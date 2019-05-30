import jQuery from 'jquery'

export default async ({ Vue }) => {
  Vue.prototype.$jQuery = jQuery
}
