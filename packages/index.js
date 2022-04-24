import sButton from "./button/index";
import sInput from "./input/index";


const install = app => {
  app.use(sButton)
  app.use(sInput)
}

const SUI = {
  install
}

export { sButton, sInput }

export default SUI