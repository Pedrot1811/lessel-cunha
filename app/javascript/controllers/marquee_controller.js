import { Controller } from "@hotwired/stimulus"
import EmblaCarousel from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import Autoscroll from 'embla-carousel-auto-scroll'

// Connects to data-controller="marquee"
export default class extends Controller {
  connect() {
    const emblaNode = this.element
    const emblaApi = EmblaCarousel(emblaNode, { loop: true }, [
      Autoscroll({ speed: 2 }, { startDelay: 20 }, { stopOnInteraction: true }, { stopOnMouseEnter: true }, { stopOnFocusIn: false })
    ])
    console.log(emblaApi.slideNodes())
  }
}
