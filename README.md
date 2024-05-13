
---

# Proyecto de Creación de Prototipo con Desarrollo Basado en Componentes utilizando Angular

Este proyecto es un ejercicio práctico para aprender a desarrollar aplicaciones web utilizando Angular y el enfoque basado en componentes. La aplicación resultante es un administrador de tareas simple que permite agregar nuevas tareas, ver las tareas almacenadas y eliminarlas según sea necesario. 

## Pasos para ejecutar el proyecto

1. **Instalación de Angular CLI**:
   - Antes de comenzar, asegúrate de tener Angular CLI instalado en tu sistema. Si no lo tienes, puedes instalarlo globalmente con el siguiente comando:
     ```
     npm install -g @angular/cli
     ```

2. **Creación del Proyecto Angular**:
   - Crea un nuevo proyecto Angular ejecutando el siguiente comando en tu terminal:
     ```
     ng new --no-standalone nombre_de_tu_proyecto
     ```

3. **Generación de Componentes**:
   - Dentro de tu proyecto, genera los tres componentes necesarios (AddTask, LocalStorageData, DeleteItem) con el siguiente comando para cada uno:
     ```
     ng generate component nombre-del-componente
     ```

4. **Ejecución del Entorno de Desarrollo**:
   - Despliega tu entorno de desarrollo con el siguiente comando y luego haz clic en "Preview Running Application" en Cloud9:
     ```
     ng serve --host 0.0.0.0 --port 8080
     ```

5. **Configuración de las Rutas**:
   - Asegúrate de que `app-routing.module.ts` contenga todas las rutas de tu aplicación. Debe tener al menos tres rutas definidas.

6. **Modificación del `app.component`**:
   - Borra el contenido del archivo `app.component.html` y sustitúyelo por `<router-outlet></router-outlet>` para que actúe como el componente principal que llama al enrutador.

7. **Estilos de la Aplicación**:
   - Edita el archivo `styles.css` y pega los estilos CSS proporcionados en el proyecto para aplicar estilos a la aplicación.

8. **Implementación de los Componentes**:
   - Modifica los archivos HTML y TypeScript de los componentes `add-task`, `local-storage-data` y `delete-item` según los códigos proporcionados en el proyecto.

9. **Importación de FormsModule y ReactiveFormsModule**:
   - Asegúrate de importar `FormsModule` y `ReactiveFormsModule` en `app.module.ts` y añadirlos a los imports dentro de `@NgModule`.

Con estos pasos, deberías poder ejecutar y visualizar el proyecto en tu entorno de desarrollo local.

---

