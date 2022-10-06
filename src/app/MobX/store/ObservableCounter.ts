import { makeAutoObservable } from 'mobx';

class ObservableCounter {
  public count: number;

  constructor() {
    makeAutoObservable(this);
    this.count = 0;
  }

  increment() {
    this.count = this.count + 1;
  }

  decrement() {
    this.count = this.count - 1;
  }
}

export default new ObservableCounter();
