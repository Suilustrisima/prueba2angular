import { Component, OnInit } from '@angular/core';
import { DataApiService} from 'src/app/services/data-api.service';
import{ ProductoInterface} from '../../models/producto-interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  public productos: ProductoInterface;
  ngOnInit(): void {
    this.getListProductos();
  }

  getListProductos(){
    this.dataApi.getAllProductos().
    subscribe((productos: ProductoInterface)=> (this.productos =productos));


  }


}
