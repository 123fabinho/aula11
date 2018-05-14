import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Livro} from "../model/livro"; 
    
    @Injectable()
    export class LivroService {
        constructor(private http: HttpClient) {}

        getLivro(): Observable<Livro[]> {
            return this.http.get<Livro[]>
            ('https://3e5cec4a-4824-421e-bd7d-0f478d415247.mock.pstmn.io/livros')
        }


            
        
    }