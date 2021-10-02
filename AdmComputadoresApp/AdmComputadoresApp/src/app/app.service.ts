import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders }    from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})

export class AppService 
{

  readonly rootURL = 'http://localhost:44329/api';

  constructor(private http: HttpClient) { }   
      httpOptions = {  
        headers: new HttpHeaders({  
          'Content-Type': 'application/json'  
        })  
      }    

      getData(){  
        return this.http.get(this.rootURL + '/Computadores'); 
      }  

      postData(formData: any){  
        return this.http.post(this.rootURL + '/Computadores',formData);  
      }  

      putData(id: number,formData: any){  
        return this.http.put(this.rootURL + '/Computadores/'+id,formData);  
      }  

      deleteData(id: number){  
        return this.http.delete(this.rootURL + '/Computadores/'+id);  
      }  
}

