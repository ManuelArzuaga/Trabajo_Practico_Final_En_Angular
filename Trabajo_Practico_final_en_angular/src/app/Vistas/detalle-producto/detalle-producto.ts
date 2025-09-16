import { Component } from '@angular/core';
import { ProductModel,ProductService } from '../home/home.service';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Header } from '../../Componentes/header/header';
import { Footer } from '../../Componentes/footer/footer';

@Component({
  selector: 'app-detalle-producto',
  imports: [Header,Footer],
  templateUrl: './detalle-producto.html',
  styleUrl: './detalle-producto.css'
})
export class DetalleProducto {

  product: ProductModel | undefined
  
  constructor(private route:ActivatedRoute,private productService:ProductService){}

  async ngOnInit():Promise<void>{
    const id = Number(this.route.snapshot.paramMap.get("id"))
    const products = await firstValueFrom(this.productService.getProducts())
    this.product = products.find(product => product.id === id)
  }
}
