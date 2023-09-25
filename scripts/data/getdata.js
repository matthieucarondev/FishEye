class Url {
  constructor(url) {
    this._url = url;
  }

  // get tous data
  async get() {
    try {
      fetch(this._url)
      .then(function(response) {
        return  response.json();
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { Url };
