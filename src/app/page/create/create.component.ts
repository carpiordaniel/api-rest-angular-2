
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { GetPersonasService } from 'src/app/services/get-personas.service';
import { soloTexto, validarCorreo, validarDecimalConDosDecimales } from 'src/app/validators/ValidatorFn';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: GetPersonasService) {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, soloTexto()]],
      apellidos: ['', [Validators.required, soloTexto()]],
      email: ['', [Validators.required, validarCorreo()]],
      fecha: ['', [Validators.required]],
      salario: [0, [Validators.required, validarDecimalConDosDecimales()]],
    });
  }

  onSubmit() {

    if (this.formulario.valid) {
      console.log('El formulario es válido. Enviar solicitud...');
    } else {
      Object.values(this.formulario.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.apiService.enviarDatos(this.formulario.value).subscribe(response => {
      console.log('Datos enviados correctamente:', response);
      alert('Datos registrados correctamente');
      this.formulario.reset();
    }, error => {
      console.error('Error al enviar datos:', error);
      alert('Error al enviar datos: los campos no cumplen con los formatos requeridos');	
    });
  }

}
