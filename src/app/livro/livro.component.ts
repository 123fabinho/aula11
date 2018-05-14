import { Component, OnInit } from '@angular/core';
import { LivroService } from "../service/livro.service";
import { Livro } from "../model/livro";

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {
       Livro : Livro[] = [];
  constructor(private LivroServ : LivroService) {}


  ngOnInit() {
    this.lista();
  }
  lista(){
    this.LivroServ.getLivro()
    .subscribe(response =>{
      //console.log(response);
      this.Livro = response;
    });
  }
 
  


}
