import { Component } from '@angular/core';
import {AppService} from './app.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Computadores';

  constructor(private AppService: AppService) { }  
  data: any;  

  ComputadorForm = new FormGroup({  
    ComputadorId: new FormControl(null),  
    Marca: new FormControl("",[Validators.required]),        
    Modelo: new FormControl("",[Validators.required]),  
    PlacaMae:new FormControl("",[Validators.required]),  
    MemoriaRAM: new FormControl("",[Validators.required]),  
    HD: new FormControl("",[Validators.required]),
    MarcaHD: new FormControl("",[Validators.required]),
    VelocidadeProcessador: new FormControl("",[Validators.required]),
    Foto: new FormControl("",[Validators.required]),
  })    
   
  submitted = false;   
  EventValue: any = "Salvar";  

  ngOnInit(): void {  
    this.getdata();    

    this.ComputadorForm = new FormGroup({  
      ComputadorId: new FormControl(null),  
      Marca: new FormControl("",[Validators.required]),        
      Modelo: new FormControl("",[Validators.required]),  
      PlacaMae:new FormControl("",[Validators.required]),  
      MemoriaRAM: new FormControl("",[Validators.required]),  
      HD: new FormControl("",[Validators.required]),
      MarcaHD: new FormControl("",[Validators.required]),
      VelocidadeProcessador: new FormControl("",[Validators.required]),
      Foto: new FormControl("",[Validators.required]),  
    })    
  }  

  getdata() {  
    this.AppService.getData().subscribe((data) => {  
      this.data = data;  
    })  
  }  

  deleteData(id: number) {  
    this.AppService.deleteData(id).subscribe((data) => {  
      this.data = data;  
      this.getdata();  
    })  
  }  

  Save() {   
    this.submitted = true;      
     if (this.ComputadorForm.invalid) {  
            return;  
     }  
    this.AppService.postData(this.ComputadorForm.value).subscribe((data) => {  
      this.data = data;  
      this.resetFrom();   
    })  
  }  
  Update() {   
    this.submitted = true;      
    if (this.ComputadorForm.invalid) {  
     return;  
    }        
    this.AppService.putData(this.ComputadorForm.value.PagamentoId,
             this.ComputadorForm.value).subscribe((data) => {  
      this.data = data;  
      this.resetFrom();  
    })  
  }  
  
  EditData(Data: any) {  
    this.ComputadorForm.controls["ComputadorId"].setValue(Data.ComputadorId);  
    this.ComputadorForm.controls["Marca"].setValue(Data.Marca);      
    this.ComputadorForm.controls["Modelo"].setValue(Data.Modelo);  
    this.ComputadorForm.controls["PlacaMae"].setValue(Data.PlacaMae);  
    this.ComputadorForm.controls["MemoriaRAM"].setValue(Data.MemoriaRAM); 
    this.ComputadorForm.controls["HD"].setValue(Data.HD);
    this.ComputadorForm.controls["MarcaHD"].setValue(Data.MarcaHD);  
    this.ComputadorForm.controls["VelocidadeProcessador"].setValue(Data.VelocidadeProcessador);  
    this.ComputadorForm.controls["Foto"].setValue(Data.Foto); 
    this.EventValue = "Atualizar";  
  }    
  
  resetFrom()  
  {     
    this.getdata();  
    this.ComputadorForm.reset();  
    this.EventValue = "Salvar";  
    this.submitted = false;   
  } 
}