import { Component } from '@angular/core';
import { Header } from '../../Componentes/header/header';
import { Footer } from '../../Componentes/footer/footer';
import { FormBuilder, NgModel, ReactiveFormsModule,Validator,Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [Header,Footer,ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {

  contactForm;

  constructor(private fb: FormBuilder){

    const {required,minLength,email} = Validators
    this.contactForm = this.fb.group({
      nombre:["",[required,minLength(3)]],
      email:["",[required,email]],
      mensaje:["",[required,minLength(10)]]
    })
  }

  onSubmit(){
    if(this.contactForm.valid){
      alert("Mensaje Enviado")
    }else{
      alert("Hay errores al enviar")
    }
  }
}
