<template>
  <q-page padding>
    <div class="row items-end q-col-gutter-lg">
      <div class="col">
        <q-input v-model="query.search" label="Search" />
      </div>
      <div class="col-auto"><q-btn color="primary" label="Search" @click="runSearch()" /></div>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="query.page" :max="pages" :maxPages="9" :directionLinks="true" />
    </div>
    <div class="row q-col-gutter-md q-mt-lg">
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-1" v-for="movie in movies" :key="movie.id">
        <q-card>
          <q-card-section>
            <q-img :src="movie.medium_cover_image" :ratio="4/6" :placeholder-src="movie.small_cover_image" :style="movie.scary ? 'filter: blur(20px);' : ''" />
          </q-card-section>
          <q-card-section>
            <div class="text-body1 text-bold">
              {{movie.title}}
            </div>
            <div class="row">
              <div class="col">
                <strong>Rating</strong>: {{movie.rating}}
              </div>
            </div>
            <div class="row q-col-gutter-md">
              <div class="col">
                <q-btn color="primary" icon="fas fa-eye" class="full-width" @click="movie.scary = !movie.scary" />
              </div>
              <div class="col">
                <q-btn v-if="movie.yt_trailer_code" color="primary" icon="fas fa-play" class="full-width" @click="showYoutube(movie)" />
              </div>
              <div class="col">
                <q-btn color="primary" icon="fas fa-magnet" class="full-width" @click="open(movie.magLink)" />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="query.page" :max="pages" :maxPages="9" :directionLinks="true" />
  </div>
  <q-dialog v-model="showYoutubeDialog" size="md">
      <q-card style="min-width: 700px; max-width: 80vw; height: 500px; max-height: 80vh;">
          <q-bar class="flex justify-between bg-primary text-white">
            <div>
              {{showYoutubeMovie.title}}
            </div>
            <q-btn dense flat icon="close" @click="showYoutubeDialog = false" />
          </q-bar>
          <q-video v-if="showYoutubeMovie.yt_trailer_code" :src="`https://www.youtube.com/embed/${showYoutubeMovie.yt_trailer_code}?rel=0`" style="height: calc(100% - 32px);"/>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<style>
</style>

<script>
import { extend } from 'quasar'
export default {
  name: 'PageIndex',
  data () {
    return {
      query: extend(true, { search: null, page: 1, limit: 48 }, this.$route.query),
      showYoutubeDialog: false,
      showYoutubeMovie: {},
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
      moviesData: null
    }
  },
  computed: {
    movies () {
      return this.moviesData || [...Array(this.query.limit).keys()]
    },
    pages () {
      return Math.ceil(this.movieCount / this.query.limit)
    }
  },
  async created () {
    await this.runSearch()
  },
  methods: {
    showYoutube (movie) {
      this.showYoutubeDialog = true
      this.showYoutubeMovie = movie
    },
    open (url) {
      window.open(url, '_self')
    },
    async runSearch () {
      const { data: { data } } = await this.$axios.get('https://yts.lt/api/v2/list_movies.json', {
        params: {
          query_term: this.query.search,
          page: this.query.page,
          limit: this.query.limit
        }
      })
      this.limit = data.limit
      this.movieCount = data.movie_count
      this.moviesData = data.movies.map(m => {
        const smaller = m.torrents.sort((a, b) => a.size_bytes - b.size_bytes)[0]
        return {
          ...m,
          scary: (m.genres || []).some(g => this.dontShowGenres.includes(g.toLowerCase())),
          magLink: `magnet:?xt=urn:btih:${smaller.hash}&dn=${encodeURIComponent(m.title)}&tr=${this.trackers.join('&tr=')}`
        }
      })
    }
  },
  watch: {
    'query.page' () {
      this.$router.push({ name: 'movies', query: { query_term: this.query.search, page: this.query.page, limit: this.query.limit } })
      this.runSearch()
    }
  }
}
</script>
