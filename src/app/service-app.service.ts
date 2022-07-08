import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAppService {

  constructor(private http:HttpClient) { }

viewTodos=()=>{
 
  return this.http.get("https://jsonplaceholder.typicode.com/todos")
}


}

