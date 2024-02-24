import { Component } from '@angular/core';
import { GetPersonasService } from 'src/app/services/get-personas.service';
import { MenuComponent } from 'src/app/component/menu/menu.component';
import {EditarComponent } from '../../component/editar/editar.component';
import { Persona } from 'src/app/interface/Persona';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export  class HomeComponent {
  personas: any ; 
  personasFiltradas: any; 
  personaEditar: any;
  modoOculto: boolean = true;
  constructor(private getPersonasService: GetPersonasService) {
  }
  ngOnInit() {
   this.getData();
  }
  eliminarPorId(id: number) {
    console.log(id)
    this.getPersonasService.eliminarPorId(id).subscribe(
      (response) => {
      console.log('Persona eliminada correctamente');
      this.getData();
    }, error => {
      console.error('Error al eliminar persona:', error);
    });
  }

  getData(){
    this.getPersonasService.getData().subscribe(data => {
      this.personas = data;
      this.personasFiltradas = this.personas;
      
    })
  }

  buscar(texto: Event) {
    const input = texto.target as HTMLInputElement;
    this.personasFiltradas = this.personas.filter( (persona: any) =>
      persona.nombre.toLowerCase().includes(input.value.toLowerCase()) ||
      persona.apellidos.toLowerCase().includes(input.value.toLowerCase()) ||
      persona.email.toLowerCase().includes(input.value.toLowerCase()) ||
      persona.fecha.toLowerCase().includes(input.value.toLowerCase()) ||
      persona.salario.toString().includes(input.value.toLowerCase())
    );
    console.log(this.personasFiltradas)
  }

  toggleModoEdicion(persona: Persona) {
    this.personaEditar = persona;
    this.editarModoOcuto()
    console.log("algoooo*", this.personaEditar);
  }

  editarModoOcuto(){
    this.modoOculto = !this.modoOculto;
  }

 

}
