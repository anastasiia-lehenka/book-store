import { SERVER_URL } from './constants';

class Service {
  constructor() {
    if (!Service.instance) {
      this.url = SERVER_URL;
      this.booksEntity = 'books';
      this.purchaseEntity = 'purchase';
      this.signInEntity = 'signin';
      Service.instance = this;
    }

    return Service.instance;
  }

  async sendHttpRequest({
    method,
    entity,
    data,
    token,
  }) {
    const response = await fetch(`${this.url}/${entity}`, {
      method,
      body: JSON.stringify(data),
      headers: token
        ? { Authorization: `Bearer ${token}` }
        : { 'Content-Type': 'application/json' },
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const message = `${response.status}. ${parsedResponse.message}`;
      throw new Error(message);
    }

    return parsedResponse;
  }

  getBooks = async () => this.sendHttpRequest({
    method: 'GET',
    entity: this.booksEntity,
    token: '9wa76vgfe3k9q4uknz1fw4',
  });
}

const service = new Service();
Object.freeze(service);
export default service;
