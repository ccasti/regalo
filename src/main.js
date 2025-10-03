import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './routes'

import { library } from '@fortawesome/fontawesome-svg-core'

import { 
	faPhoneAlt,
	faMapMarkerAlt,
	faClock,
	faEnvelope,
	faChevronDown,
	faChevronUp
} from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
	faPhoneAlt,
	faMapMarkerAlt,
	faClock,
	faEnvelope,
	faChevronDown,
	faChevronUp
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({ 
	routes,
	mode: "history"
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
