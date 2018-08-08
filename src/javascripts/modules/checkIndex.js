export default class CheckIndex {
  constructor(currentIndex, startIndex, endIndex) {
    this.currentIndex = currentIndex;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }

  compareIndex = (nextIndex) => {
    console.log('currentIndex : ' + this.currentIndex);
    console.log('nextIndex : ' + nextIndex);
    if(this.currentIndex === this.endIndex && nextIndex === this.startIndex) {
      return 'next.owl.carousel';
    } else if (this.currentIndex === this.startIndex && nextIndex === this.endIndex) {
      return 'prev.owl.carousel';
    } else if(this.currentIndex < nextIndex) {
      return 'next.owl.carousel';
    } else if(this.currentIndex > nextIndex) {
      return 'prev.owl.carousel';
    }
  }

}
