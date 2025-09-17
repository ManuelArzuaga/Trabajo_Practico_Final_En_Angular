import { Component,Input} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card-producto',
  imports: [RouterModule],
  templateUrl: './card-producto.html',
  styleUrl: './card-producto.css'
})
export class CardProducto {

  @Input() id = 0
  @Input() image = ""
  @Input() title = ""
  @Input() price = 0
  @Input() description = ""
  @Input() category = ""
}
