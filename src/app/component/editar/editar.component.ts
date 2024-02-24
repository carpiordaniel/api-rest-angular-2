import { Component, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Persona } from  '../../interface/Persona';
import { GetPersonasService } from '../../services/get-personas.service';
import { Router } from '@angular/router';
import { soloTexto, validarCorreo, validarDecimalConDosDecimales } from 'src/app/validators/ValidatorFn';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {

  @Input() personaEditar!: Persona;
  personaForm: FormGroup;


  constructor(private fb: FormBuilder, private apiService: GetPersonasService, private router: Router) {
    this.personaForm = this.fb.group({
      id: 0,
      nombre: ['', [Validators.required, soloTexto()]],
      apellidos: ['', [Validators.required, soloTexto()]],
      email: ['', [Validators.required, validarCorreo()]],
      fecha: ['', [Validators.required]],
      salario: ['', [Validators.required, validarDecimalConDosDecimales()]],
    });

    console.log("constructor");
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['personaEditar'] && this.personaEditar) {
      this.personaForm.patchValue(this.personaEditar);
    }
    console.log("onchange");
  }
  

  guardar(): void {

    const valoresFormulario = this.personaForm.value;
    console.log("Persona ", this.personaEditar?.nombre);
    console.log("Persona editada", valoresFormulario);
    
    if (this.personaForm.valid) {
      
      console.log('El formulario es válido. Enviar solicitud...');
    } else {
      
      Object.values(this.personaForm.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }
    
    this.apiService.actualizar(valoresFormulario).subscribe(
      response => {
        console.log('Persona editada correctamente:', response);
        alert('Persona editada correctamente');
        window.location.reload();
      
      },
      error => {
        console.error('Error al editar persona:', error);
        alert('Error al editar persona: los campos no cumplen con los formatos requeridos');	
      }
    )
  }
  
}
