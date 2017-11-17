import { Worker } from '@scola/worker';

export default class ObjectChecker extends Worker {
  act(response, data, callback) {
    if (data.length === 0) {
      this.fail(response, new Error('404 Object not found'), callback);
      return;
    }

    this.pass(response, data[0], callback);
  }
}
