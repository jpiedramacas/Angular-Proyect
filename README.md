# Prototipo con desarrollo basado en componentes con Angular

Este es un proyecto de práctica que utiliza Angular para crear un prototipo con un enfoque en el desarrollo basado en componentes. El prototipo consiste en una aplicación simple para la administración de tareas, donde se pueden agregar, ver y eliminar tareas.

## Instrucciones de Configuración y Ejecución

### Paso 1: Crear una nueva aplicación Angular

Primero, necesitas instalar Angular en tu entorno de desarrollo. Ejecuta el siguiente comando en tu terminal:

```
npm install -g @angular/cli
```

### Paso 2: Desplegar el entorno de desarrollo

Despliega tu entorno de desarrollo con el siguiente comando:

```
ng serve --host 0.0.0.0 --port 8080
```
Explicación detallada de los componentes principales y el código necesario para cada uno de ellos en el proyecto.

### 1. Componente `AddTask`

Este componente se encarga de permitir al usuario agregar nuevas tareas a la lista. Consiste en un formulario donde el usuario puede ingresar el nombre de la tarea y luego enviarla para su almacenamiento.

#### Archivos Relevantes:
- **add-task.component.html**: Contiene la estructura HTML del formulario para agregar tareas.
```html
<div class="container"> 
  <h2 class="heading">Task Administration</h2> 
  <form #userForm="ngForm" (ngSubmit)="submitForm(userForm)" class="form"> 
    <div class="form-group"> 
      <label for="name">Name</label> 
      <input type="text" class="form-control" id="name" name="name" [(ngModel)]="userDetails.name" required> 
      <div *ngIf="userForm.controls['name']?.touched && userForm.controls['name']?.invalid" class="text-danger"> 
        Name is required. 
      </div> 
    </div> 
    <button type="submit" class="btn btn-primary">Submit</button> 
  </form> 
</div> 
```
- **add-task.component.ts**: Contiene la lógica TypeScript para manejar la presentación y la lógica del formulario.
```typescript
import { Component } from '@angular/core'; 

@Component({ 
  selector: 'app-add-task', 
  templateUrl: './add-task.component.html', 
  styleUrls: ['./add-task.component.css'] 
}) 
export class AddTaskComponent { 
  userDetails = { 
    name: '' 
  }; 

  constructor() { 
    // Verificar si ya hay datos en localStorage y cargarlos si es así 
    const storedData = localStorage.getItem('datas'); 
    if (storedData) { 
      this.userDetails = JSON.parse(storedData); 
    } 
  } 

  submitForm(form: any): void { 
    if (form.valid) { 
      console.log('Form data:', this.userDetails); 

      // Obtener los datos previos del localStorage 
      let storedData: any[] = JSON.parse(localStorage.getItem('datas') || '[]'); 

      // Agregar los nuevos detalles del usuario 
      storedData.push(this.userDetails); 

      // Guardar el array actualizado en localStorage 
      localStorage.setItem('datas', JSON.stringify(storedData)); 

      console.log('Data saved:', storedData); 
    } 
  } 
} 
```

### 2. Componente `LocalStorageData`

Este componente muestra todas las tareas almacenadas en el LocalStorage. Cada tarea se muestra en una lista junto con un botón para eliminarla si es necesario.

#### Archivos Relevantes:
- **local-storage-data.component.html**: Contiene la estructura HTML para mostrar las tareas almacenadas.
```html
<div class="container"> 
  <h2 class="heading">Stored Tasks</h2> 
  <div *ngFor="let data of storedData" class="data-item"> 
    <p class="data-name">Name: {{ data.name }}</p> 
    <app-delete-item [item]="data" (delete)="deleteItem($event)" class="delete-item"></app-delete-item> 
  </div> 
</div>
```
- **local-storage-data.component.ts**: Contiene la lógica TypeScript para manejar la recuperación y eliminación de las tareas almacenadas.
```typescript
import { Component, OnInit } from '@angular/core'; 

@Component({ 
  selector: 'app-local-storage-data', 
  templateUrl: './local-storage-data.component.html', 
  styleUrls: ['./local-storage-data.component.css'] 
}) 
export class LocalStorageDataComponent implements OnInit { 
  storedData: any[] = []; 

  constructor() { } 

  ngOnInit(): void { 
    const storedData = localStorage.getItem('datas'); 
    if (storedData) { 
      this.storedData = JSON.parse(storedData); 
      if (!Array.isArray(this.storedData)) { 
        this.storedData = [this.storedData]; 
      } 
    } 
  } 

  deleteItem(item: any): void { 
    const index = this.storedData.indexOf(item); 
    if (index !== -1) { 
      this.storedData.splice(index, 1); 
      localStorage.setItem('datas', JSON.stringify(this.storedData)); 
    } 

    // Limpiar localStorage si no quedan datos 
    if (this.storedData.length === 0) { 
      localStorage.removeItem('datas'); 
    } 
  } 
} 
```

### 3. Componente `DeleteItem`

Este componente proporciona un botón para eliminar una tarea específica de la lista. Es utilizado por el componente `LocalStorageData`.

#### Archivos Relevantes:
- **delete-item.component.html**: Contiene la estructura HTML para el botón de eliminación.
```html
<button (click)="deleteItem()">Eliminar</button> 
```
- **delete-item.component.ts**: Contiene la lógica TypeScript para manejar la eliminación de la tarea.
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core'; 

@Component({ 
  selector: 'app-delete-item', 
  templateUrl: './

delete-item.component.html', 
  styleUrls: ['./delete-item.component.css'] 
}) 
export class DeleteItemComponent { 
  @Input() item: any; 
  @Output() delete = new EventEmitter<any>(); 

  deleteItem(): void { 
    this.delete.emit(this.item); 
  } 
} 
```

GIO
