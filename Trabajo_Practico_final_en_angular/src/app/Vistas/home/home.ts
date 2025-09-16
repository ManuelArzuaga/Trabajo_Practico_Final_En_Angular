import { Component } from '@angular/core';
import { Header } from '../../Componentes/header/header';
import { Footer } from '../../Componentes/footer/footer';
import { firstValueFrom } from 'rxjs';
import { CardProducto } from '../../Componentes/card-producto/card-producto';
import { ProductModel,ProductService } from './home.service';

@Component({
  selector: 'app-home',
  imports: [Header,Footer,CardProducto],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  productos:ProductModel[] = []
    cargando = true
  
    constructor(private productService:ProductService){}
  
    async ngOnInit(): Promise<void>{
      try {
        const data = await firstValueFrom(this.productService.getProducts())
        this.productos = data
      } catch (error) {
        console.log("error")
      }finally{
        this.cargando = false
      }
    }
}
