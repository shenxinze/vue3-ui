import sInput from './index.vue'

sInput.install = app => {
  app.component(sInput.name, sInput)
}

export default sInput