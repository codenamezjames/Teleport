<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          class="lt-sm"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Teleport
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"

      :width="200"
      :breakpoint="600"
      show-if-above
      bordered
      content-class="bg-grey-3"
    >
      <q-list>
        <q-item clickable :to="{name: 'movies'}">
          <q-item-section avatar>
            <q-icon name="fas fa-ticket-alt" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Movies</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable :to="{name: 'tv'}">
          <q-item-section avatar>
            <q-icon name="fas fa-tv" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Tv</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      miniState: true,
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
