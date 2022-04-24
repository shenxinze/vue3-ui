import sButton from './index.vue'

sButton.install = app => {
  app.component(sButton.name, sButton)
}

export default sButton