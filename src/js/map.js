export default class ErrorRepository {
  constructor() {
    this.errors = new Map();

    this.errors.set(430, 'Error 430');
    this.errors.set(240, 'Error 240');
    this.errors.set(180, 'Error 180');
  }

  translate(code) {
    if (!this.errors.has(code)) {
      return 'Unknown error';
    }
    return this.errors.get(code);
  }
}
