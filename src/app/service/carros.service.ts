import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {carros} from "../model/carros"; 
    
    @Injectable()
    export class carrosService {
        constructor(private http: HttpClient) {}

        getcarros(): Observable<carros[]> {
            return this.http.get<carros[]>
    
            ('https://6e47ed9c-5cad-488e-8c07-fd78d44afd7f.mock.pstmn.io/carros')
        }


            
        
    }