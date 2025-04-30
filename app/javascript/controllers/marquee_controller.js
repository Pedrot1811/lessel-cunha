import { Controller } from "@hotwired/stimulus"
import EmblaCarousel2 from 'embla-carousel'
import Autoscroll2 from 'embla-carousel-auto-scroll'

// Connects to data-controller="marquee"
export default class extends Controller {
  connect() {
    const emblaNode2 = this.element
    const emblaApi2 = EmblaCarousel2(emblaNode2, { loop: true }, [
      Autoscroll2({ speed: 1 }, { direction: 'forward' }, { startDelay: 20 }, { stopOnInteraction: true }, { stopOnMouseEnter: true }, { stopOnFocusIn: false })
    ])
    console.log(emblaApi2.slideNodes())
  }
}
