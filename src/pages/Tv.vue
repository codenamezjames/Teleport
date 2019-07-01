<template>
  <q-page class="">
    <div class="q-pa-md">
      <q-table
        binary-state-sort
        class="full-width"
        flat
        :data="shows"
        :columns="columns"
        row-key="uid"
        :filter="filter"
        :loading="loading"
        :pagination.sync="pagination">
        <template v-slot:top-left>
          <q-btn :disabled="loading" color="primary" icon="fas fa-sync" size="sm" round @click="refresh" :class="{spin: loading}" />
          <q-tooltip>Get new show data</q-tooltip>
        </template>
        <template v-slot:top-right>
          <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
        </template>
        <template v-slot:body-cell-name="scope">
          <q-td>
            <router-link :to="`tv`+scope.row.link">
              {{scope.row.name}}
            </router-link>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import naturalSort from 'javascript-natural-sort'
export default {
  name: 'PageIndex',
  async created () {
    if (this.$route.query.page) {
      this.pagination = this.$route.query
    }
    this.shows = await this.$store.dispatch('data/getTvShowList')
    this.loading = false
  },
  data () {
    return {
      pagination: {
        sortBy: 'name',
        descending: false,
        page: 1,
        rowsPerPage: 10
      },
      loading: true,
      filter: '',
      shows: [],
      columns: [
        { name: 'name', required: true, label: 'Name', align: 'left', field: 'name', sortable: true },
        { name: 'airing', label: 'Airing', align: 'left', field: 'airing', sortable: true, sort: naturalSort },
        { name: 'rating', label: 'Rating', align: 'left', field: 'rating', sortable: true, sort: naturalSort },
        { name: 'votes', label: 'Votes', align: 'left', field: 'votes', sortable: true, sort: naturalSort }
      ]
    }
  },
  methods: {
    async refresh () {
      this.loading = true
      this.shows = await this.$store.dispatch('data/getTvShowList', true)
      this.loading = false
    }
  },
  watch: {
    pagination () {
      this.$router.push({ name: 'tv', query: this.pagination })
    }
  }

}
</script>

<style lang="stylus" scoped>

</style>
