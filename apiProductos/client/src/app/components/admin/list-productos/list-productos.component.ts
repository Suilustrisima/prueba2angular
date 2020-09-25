import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../../services/data-api.service';
import { ProductoInterface } from '../../../models/producto-interface';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListProductosComponent implements OnInit {

  constructor(private dataApiService: DataApiService) { }
  public productos: ProductoInterface;

  ngOnInit(): void {
    this.getListProductos()
  }

  getListProductos(): void{
    this.dataApiService.getAllProductos()
    .subscribe((productos: ProductoInterface)=> (this.productos= productos));
  }

  onDeleteProducto(id:string): void{
    if(confirm("Esta seguro que desea eliminar este producto?")){
      this.dataApiService.deleteProducto(id).subscribe();

    }

  }
onPreUpdateProducto(producto:ProductoInterface):void{
  this.dataApiService.selectedProducto=Object.assign({}, producto);
}

resetForm(productoForm?:NgForm): void{
  this.dataApiService.selectedProducto={
    id:null,
    tipo:"",
    marca:"",
    color:""
  };
}

}
