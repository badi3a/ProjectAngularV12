import { Component, OnInit } from '@angular/core';
import {Product} from "../../core/model/product";

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.css']
})
export class MainProductComponent implements OnInit {

  listProduct: Product[];
  showFormTemplate: boolean;
  buttonValue: string;
  inputProduct: Product // the parent component will send this input to the child (formProduct)
  constructor() { }

  ngOnInit(): void {
    this.showFormTemplate = false;
    this.buttonValue="add new Product";
    this.listProduct = [
      { id: '12',
        title: 'T-Shirt 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis',
        quantity: 10,
        price: 15,
        nbrLike: 0,
        picture: 'assets/t shirt 1.jpg'
      },
      { id: '12',
        title: 'T-Shirt 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis',
        quantity: 10,
        price: 25,
        nbrLike: 0,
        picture: 'assets/t shirt 2.jpg'
      },
      { id: '12',
        title: 'T-Shirt 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis',
        quantity: 0,
        price: 100,
        nbrLike: 0,
        picture: 'assets/t shirt 1.jpg'
      },
      { id: '12',
        title: 'T-Shirt 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis',
        quantity: 100,
        price: 45,
        nbrLike: 5,
        picture: 'assets/t shirt 2.jpg'
      }
    ]
  }

  like(product: Product): void{
    let i = this.listProduct.indexOf(product);
    this.listProduct[i].nbrLike++
    //console.log(this.listProduct)
  }
  //the method save will check if is an update case or adding a new product case
  save(product: Product): void{
    let i = this.listProduct.indexOf(product);
    if(i!= -1){
      this.listProduct[i]= product
    }
    else this.listProduct.push(product);
    this.showFormTemplate = false
  }
  showForm(){
    if (this.showFormTemplate ===false){
      this.showFormTemplate = true
      this.buttonValue= "go Back to the List";
      this.inputProduct = new Product();
    }
    else {
      this.buttonValue="add new Product";
      this.showFormTemplate = false
    }
  }
  delete(product:Product): void{
    let i = this.listProduct.indexOf(product);
    this.listProduct.splice(i,1);
  }
  update(product: Product): void{
    //in order to update a product, the parent component will change the input value
    //and send it to the child component
    this.inputProduct = product;
    this.showFormTemplate = true;

  }

}
