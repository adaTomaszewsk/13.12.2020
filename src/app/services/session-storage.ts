import {Injectable} from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private readonly cryptoKey: string;

  constructor() {
    this.cryptoKey = new Date().getTime().toString() + uuidv4();
  }

  set(key: string, value: any) {
    value = JSON.stringify(value);
    value = this.encryptData(value);
    sessionStorage.setItem(key, value);
  }

  get(key: string): any {
    let value = sessionStorage.getItem(key);
    if (!value) {
      return null;
    }
    value = this.decryptData(value);
    console.log('sessionStorage (before parse): ' + value);
    const result = JSON.parse(value);
    console.log(result);
    return result;
  }

  remove(key: string) {
    sessionStorage.removeItem(key);
  }

  clear() {
    sessionStorage.clear();
  }

  private encryptData(data): string {
    return CryptoJS.AES.encrypt(data, this.cryptoKey).toString();
  }

  private decryptData(data): string {
    return CryptoJS.AES.decrypt(data, this.cryptoKey).toString(CryptoJS.enc.Utf8);
  }

  private hash(key: string): string {
    return CryptoJS.HmacSHA512(key, this.cryptoKey).toString();
  }

}
