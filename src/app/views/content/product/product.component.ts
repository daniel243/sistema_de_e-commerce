import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // trocarImagem(el:any) {
  //   let cachecolProduto = document.getElementById("cachecolProduto")
  //   cachecolProduto.src = el.src
  // }

}
