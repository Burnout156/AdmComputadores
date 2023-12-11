import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class AppService 
{

  readonly rootURL = 'https://localhost:44329/api';

  constructor(private http: HttpClient) { 
    this.rootURL = 'https://localhost:44329/api';
  }   
      httpOptions = 
      {  
        headers: new HttpHeaders(
        {  
          'Content-Type': 'application/json',  
          'Access-Control-Allow-Methods': 'GET, POST, DELETE, PUT',
          'Access-Control-Allow-Origin': '*'
        })  
      }    

      getData(){  
        return this.http.get(this.rootURL + '/Computadores'); 
      }  

      postData(formData: any){  
        return this.http.post(this.rootURL + '/Computadores',formData);  
      }  

      putData(id: string,formData: any){  
        return this.http.put(this.rootURL + '/Computadores/'+id,formData);  
      }  

      deleteData(id: number){  
        return this.http.delete(this.rootURL + '/Computadores/'+id);  
      }  
}

