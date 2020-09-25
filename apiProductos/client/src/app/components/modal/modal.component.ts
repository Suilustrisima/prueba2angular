import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../services/data-api.service';
import { ProductoInterface } from '../../models/producto-interface';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(
    public dataApiService: DataApiService,
    public location: Location) { }

  ngOnInit(): void {
  }


onSaveProducto(productoForm: NgForm): void{
  if(productoForm.value.productoId==null){
    //nuevo
    this.dataApiService.saveProducto(productoForm.value).subscribe(producto=> location.reload());
  }else{
    //actualizar
this.dataApiService.updateProducto(productoForm.value).subscribe(producto=> location.reload());

  }
}

}
