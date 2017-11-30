import Vue from 'vue'
import App from './App.vue'

Vue.component('manage-posts', {
  template: '#manage-template',
  data: function() {
    return {
      posts: [
        'Vue.js: The Basics',
        'Vue.js Components',
        'Server Side Rendering with Vue',
        'Vue + Firebase'
      ]
    }
  },
  mounted: function () {
    this.$nextTick(function () {
      this.burst
    })
  },
  methods: {
    burst: function (event) {
      const burst = new mojs.Burst({
        left: 0, top: 0,
        count:          8,
        radius:         { 50: 150 },
        children: {
          shape:        'line',
          stroke:       [ 'white', '#FFE217', '#FC46AD', '#D0D202', '#B8E986', '#D0D202' ],
          scale:        1,
          scaleX:       { 1 : 0 },
          // pathScale:    'rand(.5, 1.25)',
          degreeShift:  'rand(-90, 90)',
          radius:       'rand(20, 40)',
          // duration:     200,
          delay:        'rand(0, 150)',
          isForce3d:    true
        }
      } );
      burst
        .tune({ x: event.pageX, y: event.pageY })
        .generate()
        .replay();
    }
  }
})

Vue.component('create-post', {
  template: '#create-template'
})
new Vue({
  el: '#app',
  render: h => h(App)
})
