import { SERVER_URL } from '../constants';

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
        ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
        : { 'Content-Type': 'application/json' },
    });

    const parsedResponse = await response.json();

    if (!response.ok) {
      const message = `${response.status}. ${parsedResponse.message}`;
      throw new Error(message);
    }

    return parsedResponse;
  }

  logIn = async (username) => this.sendHttpRequest({
    method: 'POST',
    entity: this.signInEntity,
    data: { username },
  });

  getAllBooks = async (token) => this.sendHttpRequest({
    method: 'GET',
    entity: this.booksEntity,
    token,
  });

  getBook = async (id, token) => this.sendHttpRequest({
    method: 'GET',
    entity: `${this.booksEntity}/${id}`,
    token,
  });
}

const service = new Service();
Object.freeze(service);
export default service;
