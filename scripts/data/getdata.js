class Url {
  constructor(url) {
    this._url = url;
  }

  // get tous data
  async get() {
    try {
      const response = await fetch(this._url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export { Url };
