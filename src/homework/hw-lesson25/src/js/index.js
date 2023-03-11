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
    this.makeRequest();
  },
  prev() {
    if (this.data.previous !== null) this.url = this.data.previous;
    this.makeRequest();
  },
  makeRequest() {
    fetch(this.url)
      .then((res) => res.json())
      .then((d) => {
        this.data = d;
        this.showResults();
      });
  },
};
navigation.showResults();
// navigation.next().then(() => navigation.showResults());

document.querySelectorAll('button').forEach((el) => {
  el.addEventListener('click', function () {
    if (this.classList.contains('next')) {
      navigation.next();
    } else {
      navigation.prev();
    }
  });
});
