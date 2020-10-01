import { Injectable, OnDestroy} from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class BasketService implements OnDestroy {
  private basket: Map<string, any>;
  id: number;
  price: number;
  name: number;
  addItem(id, price, name) {
    if (!this.basket.has(id)) {
      this.basket.set(id, { id, price, name });
    }
  }
  getItems() {
    return Array.from(this.basket.values());
  }
  removeItem(id){
    this.basket.delete(id);
  }
  ngOnDestroy() {
    sessionStorage.setItem('basket', JSON.stringify(this.basket));
  }
  constructor() {
    window.onbeforeunload = () => this.ngOnDestroy();
    const storageJSON = sessionStorage.getItem('basket');
    if (!storageJSON) {
      this.basket = JSON.parse(storageJSON);
    } else {
      this.basket = new Map<string, any>();
    }
  }
}
