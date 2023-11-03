import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')


// Vue.use({
//   install: function(Vue, options){
//       Vue.prototype.$jQuery = require('jquery'); 
//       }
//   });

// const races = document.querySelector(".races");
// console.log(races.offsetWidth)

// function getScrollAmount() {
// 	let racesWidth = races.scrollWidth;
// 	return -(racesWidth - window.innerWidth);
// }

// const tween = gsap.to(races, {
// 	x: getScrollAmount,
// 	duration: 3,
// 	ease: "none",
// });


// ScrollTrigger.create({
// 	trigger:".racesWrapper",
// 	start:"top 20%",
// 	end: () => `+=${getScrollAmount() * -1}`,
// 	pin:true,
// 	animation:tween,
// 	scrub:1,
// 	invalidateOnRefresh:true,
// 	markers:true
// })

