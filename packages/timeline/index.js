import sTimeline from './index.vue'

sTimeline.install = app => {
  app.component(sTimeline.name, sTimeline)
}

export default sTimeline