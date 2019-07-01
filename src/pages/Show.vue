<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col" style="max-width: 320px;">
        <q-img :src="base + show.image" v-if="show.image" />
      </div>
      <div class="col">
        <div class="text-h4">
          {{show.name}}
        </div>
        <div class="text-body1">
          {{show.description}}
        </div>
      </div>
    </div>
    <q-table
      binary-state-sort
      class="full-width"
      flat
      :data="show.episodes"
      :columns="columns"
      row-key="uid"
      :loading="loading"
      :pagination.sync="pagination">
      <template v-slot:top-left>
        <q-btn :disabled="loading" color="primary" icon="fas fa-sync" size="sm" round @click="refresh" :class="{spin: loading}" />
        <q-tooltip>Get new show data</q-tooltip>
      </template>
      <template v-slot:body-cell-sizes="scope">
        <q-td style="width: 100%;">
          <div class="row q-col-gutter-sm no-wrap">
            <div class="col-auto" v-for="size in scope.row.sizes" :key="size.mag">
              <q-btn dense type="a" :href="size.mag" flat icon="fas fa-magnet" />
              <q-tooltip>
                {{size.size}}
              </q-tooltip>
            </div>
          </div>
        </q-td>
      </template>
    </q-table>

  </q-page>
</template>

<script>
import naturalSort from 'javascript-natural-sort'
export default {
  async created () {
    const { id, title } = this.$route.params
    this.show = await this.$store.dispatch('data/getShow', { id, title })
    this.loading = false
  },
  data () {
    return {
      pagination: {
        sortBy: 'seasonEp',
        descending: false,
        page: 1,
        rowsPerPage: 50
      },
      base: process.env.API,
      loading: true,
      show: { episodes: [] },
      columns: [
        { name: 'seasonEp', required: true, label: 'Season Episode', align: 'left', field: 'seasonEp', sortable: true, sort: naturalSort },
        { name: 'name', required: true, label: 'Name', align: 'left', field: 'name', sortable: true },
        { name: 'sizes', label: '', align: 'left', field: 'sizes', sortable: true, sort: naturalSort },
        { name: 'released', label: 'Released', align: 'left', field: 'released', sortable: true, sort: naturalSort },
        { name: 'seeds', label: 'Seeds', align: 'left', field: 'seeds', sortable: true, sort: naturalSort }
      ]
    }
  },
  methods: {
    async refresh () {
      this.loading = true
      const { id, title } = this.$route.params
      this.show = await this.$store.dispatch('data/getShow', { id, title, force: true })
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
