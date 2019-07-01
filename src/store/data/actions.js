import jQuery from 'jquery'
import axios from 'axios'
import findIndex from 'lodash/findIndex'
import cloneDeep from 'lodash/cloneDeep'
import sortBy from 'lodash/sortBy'
const $ = jQuery
const dataLegend = { MB: 1e3, GB: 1e6 }

function getBody (str) {
  const body = /<body\s?[^>]*>((.|\n)*?)<\/body>/gmi.exec(str)
  if (!body[1]) throw new Error('Cant Parse Body')
  return `<div>${body[1]}</div>`
}

export async function getTvShowList ({ commit, state }, force = false) {
  if (!state.tvShowList.length || force) {
    const { data } = await axios({
      url: 'https://eztv.io/showlist/'
    })

    const $body = $(getBody(data))
    const moviesLinks = $body.find('tr[name="hover"]#1').closest('tbody').find('tr[name="hover"]')
    const list = moviesLinks.map(function () {
      return {
        uid: Math.random(),
        link: $(this).find('td:eq(0) a').attr('href'),
        name: $.trim($(this).find('td:eq(0) a').text()),
        airing: $.trim($(this).find('td:eq(1)').text()),
        rating: $.trim($(this).find('td:eq(2) b').text()),
        votes: /(\d+)/g.exec($.trim($(this).find('td:eq(2) span').text()))[0]
      }
    }).get()

    commit('SET_TV_LIST', list)
    return state.tvShowList
  }
  return state.tvShowList
}

export async function getShow ({ commit, state }, { id, title, force }) {
  force = true
  const showLink = `/shows/${id}/${title}/`
  const show = cloneDeep(state.tvShowList.filter(show => {
    return show.link === showLink
  })[0])

  if (!show.episodes || force) {
    const { data } = await axios({
      url: `https://eztv.io${showLink}`
    })
    const $body = $(getBody(data))

    const episodes = $body.find('.forum_thread_header:contains("Episode Name")').closest('tbody').find('tr[name="hover"]')
    show.image = $body.find('.show_info_main_logo img').attr('src')
    show.description = $.trim($body.find('[itemprop="description"]:eq(0)').text())
    show.episodes = episodes.map(function () {
      const name = $.trim($(this).find('td:eq(1)').text())
      const size = $.trim($(this).find('td:eq(3)').text())
      const splitSize = size.split(' ')
      const bytes = +splitSize[0] * +dataLegend[splitSize[1]]
      const match = /(\d{1,2}).+?(\d{1,2})/gim.exec(name)
      const season = +match[1]
      const episode = +match[2]
      const seasonEp = `S${('0' + season).slice(-2)}E${('0' + episode).slice(-2)}`

      return {
        uid: Math.random(),
        name,
        sizes: [{
          bytes,
          size,
          mag: $(this).find('td:eq(2) .magnet').attr('href')
        }],
        released: $.trim($(this).find('td:eq(4)').text()),
        seeds: $.trim($(this).find('td:eq(5)').text()),
        seasonEp,
        season,
        episode
      }
    })
      .get()
      .reduce((last, current, i, arr) => {
        const index = findIndex(last, { seasonEp: current.seasonEp })
        if (index === -1) {
          last.push(current)
        } else {
          last[index].sizes.push({
            bytes: current.sizes[0].bytes,
            size: current.sizes[0].size,
            mag: current.sizes[0].mag
          })
          last[index].sizes = sortBy(last[index].sizes, ['bytes'])
        }
        return last
      }, [])
    show.episodes = sortBy(show.episodes, ['season', 'episode'])
    show.episodes = show.episodes.reduce((last, current, index, arr) => {
      const lastEp = arr[index - 1]
      if (lastEp) {
        const diff = lastEp.episode - current.episode
        if (diff < -1) {
          last.push({
            uid: Math.random(),
            name: 'Missing Episode',
            sizes: [],
            seasonEp: `S${('0' + current.season).slice(-2)}E${('0' + (current.episode - 1)).slice(-2)}`
          })
        }
      }
      last.push(current)
      return last
    }, [])

    commit('UPDATE_TV_SHOW', show)
    return show
  }
  return show
}
