import { ChangeDetectorRef, Component, DoCheck } from '@angular/core';
import {AppService} from './app.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Computador } from './model/computador.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'Computadores';

  constructor(private AppService: AppService, private _changeRef: ChangeDetectorRef) { }
  data: Computador[] = [];

  ComputadorForm: FormGroup;

  submitted = false;
  EventValue: any = "Salvar";
  base64Image: string | undefined;

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

  ngDoCheck() {
    this._changeRef.markForCheck();
  }


  getdata() {
    this.AppService.getData().subscribe((data: Computador[]) => {

      this.data = data;
    })
  }

  deleteData(id: number) {
    this.AppService.deleteData(id).subscribe((data: any[]) => {
      this.data = data;
      this.getdata();
    })
  }

  Salvar() {
    debugger
    this.submitted = true;
     if (this.ComputadorForm.invalid) {
            return;
     }

     this.ComputadorForm.value.Foto = this.base64Image;

    this.AppService.postData(this.ComputadorForm.value).subscribe((data: Computador[]) => {
      this.resetFrom();
    })

    this.getdata();
  }

  Atualizar() {
    this.submitted = true;
    if (this.ComputadorForm.invalid) {
     return;
    }
    this.AppService.putData(this.ComputadorForm.value.ComputadorId,
             this.ComputadorForm.value).subscribe((data: any[]) => {
      this.data = data;
      this.resetFrom();
    })
  }

  EditData(Data) {
    this.ComputadorForm.controls["ComputadorId"].setValue(Data.computadorId);
    this.ComputadorForm.controls["Marca"].setValue(Data.marca);
    this.ComputadorForm.controls["Modelo"].setValue(Data.modelo);
    this.ComputadorForm.controls["PlacaMae"].setValue(Data.placaMae);
    this.ComputadorForm.controls["MemoriaRAM"].setValue(Data.memoriaRAM);
    this.ComputadorForm.controls["HD"].setValue(Data.hd);
    this.ComputadorForm.controls["MarcaHD"].setValue(Data.marcaHD);
    this.ComputadorForm.controls["VelocidadeProcessador"].setValue(Data.velocidadeProcessador);
    Data.foto = this.base64Image;
    this.ComputadorForm.controls["Foto"].setValue(Data.foto);
    //this.ComputadorForm.controls["Foto"].setValue(Data.foto);
    this.EventValue = "Atualizar";
  }

  resetFrom()
  {
    this.getdata();
    this.ComputadorForm.reset();
    this.EventValue = "Salvar";
    this.submitted = false;
  }

  handleFileInput(event: any): void {
    debugger;
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.base64Image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
