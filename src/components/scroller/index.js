import Scroller from './components/Scroller.vue'

function install (Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('jn-scroller', Scroller)
}

const VueScroller = {
  install: install,
  Scroller
}

if (typeof window !== undefined && window.Vue) {
  window.Vue.use(VueScroller)
}

export default VueScroller
