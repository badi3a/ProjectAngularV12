import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Product} from "../../core/model/product";

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {
  @Input() product:Product;
  @Output() addEvent=new EventEmitter<Product>();
  constructor() { }

  ngOnInit(): void {
  }
  save(){
    this.addEvent.emit(this.product);
    this.product = new Product();
  }

}
