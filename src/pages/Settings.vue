<template>
  <q-page padding>
    <h1>Settings</h1>
    <q-input v-model="url" type="text" label="YTS Url" />
  </q-page>
</template>

<script>
export default {
  computed: {
    url: {
      get () { return this.$store.state.settings.url },
      set (val) { this.$store.commit('settings/SET_URL', val) }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
