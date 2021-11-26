import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../../core/model/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()product : Product;
  @Output() notification = new EventEmitter<Product>();
  @Output() deleteNotifEvent = new EventEmitter<Product>();
  @Output() updateNotifEvent = new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {

  }
  notifierParent(){
    this.notification.emit(this.product)
  }
  deleteNotif(){
    this.deleteNotifEvent.emit(this.product)
  }
  updateNotif(){
    this.updateNotifEvent.emit(this.product)
  }
}
