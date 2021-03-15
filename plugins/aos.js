import AOS from 'aos'
import 'aos/dist/aos.css'

export default ({ app }) => {
  app.AOS = new AOS.init({
    duration: 900,
    easing: 'ease-in-out-cubic',
    once: false,
  })
}