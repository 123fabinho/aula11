import { Component, OnInit } from '@angular/core';
import { carrosService } from "../service/carros.service";
import { carros } from "../model/carros";

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class carrosComponent implements OnInit {
      carros : carros[] = [];
  constructor(private carrosServ : carrosService) {}


  ngOnInit() {
    this.lista();
  }
  lista(){
    this.carrosServ.getcarros()
    .subscribe(response =>{
      
      this.carros = response;
    });
  }
 
  


}
