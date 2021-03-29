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
    token = '88qx7gky0ij666d2ucy3w',
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

  getAllBooks = async () => this.sendHttpRequest({
    method: 'GET',
    entity: this.booksEntity,
  });

  getBook = async (id) => this.sendHttpRequest({
    method: 'GET',
    entity: `${this.booksEntity}/${id}`,
  });
}

const service = new Service();
Object.freeze(service);
export default service;
