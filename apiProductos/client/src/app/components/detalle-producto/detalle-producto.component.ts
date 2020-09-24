import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductoInterface} from 'src/app/models/producto-interface';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }
  public producto: ProductoInterface = {
    tipo: "",
    marca: "",
    precio: "",
    color: ""
  };

  ngOnInit(): void {
    const producto_id = this.route.snapshot.params["id"];
    this.getDetalle(producto_id);
  }

  getDetalle(id: string) {
    this.dataApi.getProductoID(id)
    .subscribe(producto => (this.producto = producto));

  }

}
