import { Routes } from '@angular/router';
import { Home } from './Vistas/home/home';
import { DetalleProducto } from './Vistas/detalle-producto/detalle-producto';


export const routes: Routes = [
    {
        path:"",
        component:Home
    },

    {
        path:"detalle-producto/:id",
        component:DetalleProducto
    }
];
