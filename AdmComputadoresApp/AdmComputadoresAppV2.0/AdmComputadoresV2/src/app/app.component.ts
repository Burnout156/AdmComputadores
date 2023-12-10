import { ChangeDetectorRef, Component, DoCheck } from '@angular/core';
// Remova os imports relativos a CommonModule, RouterOutlet, ReactiveFormsModule
import { Computador } from './model/computador.model';
import { FormControl, Validators, ReactiveFormsModule, FormGroup, FormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [AppService],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, HttpClientModule]
})
export class AppComponent implements DoCheck {
  title = 'Computadores';

  constructor(private appService: AppService, private _changeRef: ChangeDetectorRef) { }

  data: Computador[] = [];

  ComputadorForm!: FormGroup;

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
    this.appService.getData().subscribe((data: Object) => {
      this.data = data as Computador[];
    })
  }

  deleteData(id: number) {
    this.appService.deleteData(id).subscribe((data: Object) => {
      this.data = data as Computador[];
      this.getdata();
    });
  }
  

  Salvar() {
    debugger
    this.submitted = true;
     if (this.ComputadorForm.invalid) {
            return;
     }

     this.ComputadorForm.value.Foto = this.base64Image;

    this.appService.postData(this.ComputadorForm.value).subscribe((data: Object) => {
      this.resetFrom();
    })

    this.getdata();
  }

  Atualizar() {
    this.submitted = true;
    if (this.ComputadorForm.invalid) {
     return;
    }
    this.appService.putData(this.ComputadorForm.value.ComputadorId,
             this.ComputadorForm.value).subscribe((data: Object) => {
      this.data = data as Computador[];
      this.resetFrom();
    })
  }

  
  EditData(d: Computador) {
    this.ComputadorForm.controls["ComputadorId"].setValue(d.computadorId);
    this.ComputadorForm.controls["Marca"].setValue(d.marca);
    this.ComputadorForm.controls["Modelo"].setValue(d.modelo);
    this.ComputadorForm.controls["PlacaMae"].setValue(d.placaMae);
    this.ComputadorForm.controls["MemoriaRAM"].setValue(d.memoriaRAM);
    this.ComputadorForm.controls["HD"].setValue(d.hd);
    this.ComputadorForm.controls["MarcaHD"].setValue(d.marcaHD);
    this.ComputadorForm.controls["VelocidadeProcessador"].setValue(d.velocidadeProcessador);
  
    // Verificar se d.foto é definido antes de atribuir
    if (d.foto !== undefined) {
      this.base64Image = d.foto;
      this.ComputadorForm.controls["Foto"].setValue(d.foto);
    }
  
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
