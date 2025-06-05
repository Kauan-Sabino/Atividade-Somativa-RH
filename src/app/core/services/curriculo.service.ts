import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from 'src/app/models/curriculo.model';


@Injectable({
  providedIn: 'root'
})
export class CurriculosService {
  //atributos
  private apiUrl = "http://localhost:3009/Curriculos"; //caminho da url

  constructor(private http:HttpClient) { }

  //métodos de conexão API


  //get = read
  getCurriculos(): Observable<Curriculo[]>{//responsavel por traduzir as informações da API
    return this.http.get<Curriculo[]>(this.apiUrl)
  }

  //post = create
  cadastrarCurriculo(curriculo:Curriculo): Observable<Curriculo[]>{
    return this.http.post<Curriculo[]>(this.apiUrl,Curriculo);
  }

  //put = update
  atualizarCurriculo(id: any,curriculo:Curriculo): Observable<Curriculo[]>{
    const urlAtualizado = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(urlAtualizado,Curriculo);
  }

  //delete= delete
    removerCurriculo(id:any): Observable<Curriculo[]>{
      const urlDeletar = `${this.apiUrl}/${id}`;
      return this.http.delete<Curriculo[]>(urlDeletar);
    }
}
