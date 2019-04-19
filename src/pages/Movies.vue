<template>
  <q-page padding>
    <div class="row items-end q-col-gutter-lg">
      <div class="col">
        <q-input v-model="search" label="Search" />
      </div>
      <div class="col-auto"><q-btn color="primary" label="Search" @click="runSearch()" /></div>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="page" :max="pages" :maxPages="5" :directionLinks="true" />
    </div>
    <div class="row q-col-gutter-md q-mt-lg">
      <div class="col-xs-12 col-sm-4 col-md-3 col-lg-2 col-xl-1" v-for="movie in movies" :key="movie.id">
        <q-card>
          <q-card-section>
            <q-img :src="movie.medium_cover_image" :ratio="4/6" placeholder-src="movie.small_cover_image" :style="movie.scary ? 'filter: blur(20px);' : ''" />
          </q-card-section>
          <q-card-section>
            <div class="text-body1 text-bold">
              {{movie.title}}
            </div>
            <div class="row">
              <div class="col">
                <strong>Rating</strong>: {{movie.rating}}
              </div>
              <div class="col-auto">
                <q-btn color="primary" icon="fas fa-magnet" round size="sm" @click="() => {}" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="page" :max="pages" :maxPages="5" :directionLinks="true" />
  </div>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      page: 1,
      limit: 20,
      movieCount: 0,
      trackers: [
        'udp://open.demonii.com:1337/announce',
        'udp://tracker.openbittorrent.com:80',
        'udp://tracker.coppersurfer.tk:6969',
        'udp://glotorrents.pw:6969/announce',
        'udp://tracker.opentrackr.org:1337/announce',
        'udp://torrent.gresille.org:80/announce',
        'udp://p4p.arenabg.com:1337',
        'udp://tracker.leechers-paradise.org:6969'
      ],
      torrentBase: 'magnet:?xt=urn:btih:TORRENT_HASH&dn=MOVIE_NAME',
      dontShowGenres: ['horror'],
      search: null,
      movies: []
    }
  },
  computed: {
    pages () {
      return Math.ceil(this.movieCount / this.limit)
    }
  },
  async created () {
    await this.runSearch()
    console.log(JSON.parse(JSON.stringify(this.movies[0])))
  },
  methods: {
    async runSearch () {
      const { data: { data } } = await this.$axios.get('https://yts.am/api/v2/list_movies.json', {
        params: {
          query_term: this.search,
          page: this.page
        }
      })
      this.limit = data.limit
      this.movieCount = data.movie_count
      this.movies = data.movies.map(m => {
        const smaller = m.torrents.sort((a, b) => a.size_bytes - b.size_bytes)[0]
        return {
          ...m,
          scary: m.genres.some(g => this.dontShowGenres.includes(g.toLowerCase())),
          magLink: this.torrentBase
            .replace('TORRENT_HASH', smaller.hash)
            .replace('MOVIE_NAME', encodeURI(m.title)) + '&tr=' + this.trackers.join('&tr=')
        }
      })
    }
  },
  watch: {
    page () {
      this.runSearch()
    }
  }
}
</script>
