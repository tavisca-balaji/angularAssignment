import { Injectable, EventEmitter } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CommunicationService {
  receiveData: EventEmitter<string>;
  constructor() {
    this.receiveData = new EventEmitter<string>();
  }

  SendData(data: string): void {
    this.receiveData.emit(data);
  }
}
