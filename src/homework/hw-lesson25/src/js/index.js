const navigation = {
  url: 'https://swapi.dev/api/people/?page=1',
  data: null,
  showResults() {
    if (this.data === null) {
      this.makeRequest();
    } else {
      console.log('data:', this.data);
    }
  },
  next() {
    if (this.data !== null) {
      this.url = this.data.next === null ? this.url : this.data.next;
    }
    this.makeRequest(this.url);
  },
  prev() {
    if (this.data.previous !== null) this.url = this.data.previous;
    this.makeRequest(this.url);
  },
  makeRequest(url) {
    fetch(url)
      .then((res) => res.json())
      .then((d) => {
        this.data = d;
        this.showResults();
      });
  },
  changePageCategory(str) {
    this.url = `https://swapi.dev/api/${str}`;
  },
};
navigation.changePageCategory('planets');
navigation.showResults();

document.querySelectorAll('button').forEach((el) => {
  el.addEventListener('click', function () {
    if (this.classList.contains('next')) {
      navigation.next();
    } else {
      navigation.prev();
    }
  });
});
