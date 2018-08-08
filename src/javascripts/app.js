import './modules'
import $ from 'jQuery';
import 'owl.carousel';
import CheckIndex from './modules/checkIndex';

export default class Main {
  constructor() {
    this.currentIndex = 0;
    this.startIndex = 0;
    this.endIndex = 5;
    this.checkIndex = new CheckIndex(this.currentIndex, this.startIndex, this.endIndex);
    this.load();
  }

  load = () => {
    var fullCarousel = jQuery('.full-carousel');
    fullCarousel.owlCarousel({
      margin: 50,
      loop: true,
      items: 1,
      stagePadding: 350,
      touchDrag: false,
      mouseDrag: false
    });
    $('.full-carousel__body').hide();
    $('.full-carousel__body-tab0').show();
    $('.owl-item').on('click', { checkIndex: this.checkIndex, fullCarousel: fullCarousel }, function(event){
      var nextIndex = jQuery(this).find('.item').data("index"); //get tab index
      var fullCarousel = event.data.fullCarousel;
      var checkIndex = event.data.checkIndex;

      fullCarousel.trigger(checkIndex.compareIndex(nextIndex));
      checkIndex.currentIndex = nextIndex;
      $('.full-carousel__body').hide();
      $('.full-carousel__body-tab'+ nextIndex).show();
      fullCarousel.css("background-image", "url(./images/image-tab"+ nextIndex +".jpg)");
    });
  }
}

new Main(document.getElementById('animation'));
