

# Trabajo Práctico Parte 2 — Node.js Express
## Descripción de la API
Esta es una API sobre peliculas que se desarrollo utilizando Node.js, Express y Sequelize.
Tiene la opcion de crear, traer, actualizar y eliminar registros de una base de datos

## Instrucciones para correr el proyecto
- Tener instalado Node.js, nodemon y MySQL
- Ejecutar el comando: npm install en la terminal
- Dentro del archivo mysql.md estara el comando a ejecutar para crear la base y sus tablas
- Dentro de src/data/db.js configurar la base de datos
- Ejecutar el comando: nodemon app.js

## Ejemplos de endpoints
### 1. Traer peliculas
- **Ruta**: `/peliculas`
- **Método**: `GET`
- **Descripción**: Devuelve todas las peliculas.
- **Ejemplo de solicitud**:
    ```bash
    GET http://localhost:3030/peliculas
    ```

### 2. Traer pelicula por ID
- **Ruta**: `/peliculas/:id`
- **Método**: `GET`
- **Descripción**: Devuelve una pelicula por ID.
- **Ejemplo de solicitud**:
    ```bash
    GET http://localhost:3030/peliculas/3
    ```

### 3. Crear pelicula
- **Ruta**: `/peliculas`
- **Método**: `POST`
- **Descripción**: Crea una nueva pelicula.
- **Ejemplo de solicitud**:
    ```bash
    POST http://localhost:3030/peliculas
    Content-Type: application/json
    {
        "title":"Interestelar",
        "directorID": 1,
        "categorie": "Sci-fi",
        "status": "active"
    }
    ```
- **Ejemplo de respuesta**:
    ```json
    {
      "message": "Registro creado correctamente"
    }
    ```
### 4. Actualizar pelicula
- **Ruta**: `/peliculas/:id`
- **Método**: `PUT`
- **Descripción**: Actualizar una pelicula por ID.
- **Ejemplo de solicitud**:
    ```bash
    PUT http://localhost:3030/peliculas/1
    Content-Type: application/json
    {
      "status": "inactive"
    }
    ```
- **Ejemplo de respuesta**:
    ```json
    {
      "message": "Registro actualizado correctamente"
    }
    ```
### 5. Borrar pelicula
- **Ruta**: `/peliculas/:id`
- **Método**: `DELETE`
- **Descripción**: Borrar una pelicula por ID.
- **Ejemplo de solicitud**:
    ```bash
    DELETE http://localhost:3030/peliculas/1
- **Ejemplo de respuesta**:
    ```json
    {
      "message": "Registro borrado correctamente"
    }
    ```
### 6. Crear director
- **Ruta**: `/directores/`
- **Método**: `POST`
- **Descripción**: Crear un nuevo director.
- **Ejemplo de solicitud**:
    ```bash
    POST http://localhost:3030/directores/
    Content-Type: application/json
    {
        "name": "Christopher",
        "surname": "Nolan"
    }
    ```
- **Ejemplo de respuesta**:
    ```json
    {
      "message": "Registro creado correctamente"
    }
    ```
### 7. Traer directores
- **Ruta**: `/directores/`
- **Método**: `GET`
- **Descripción**: Traer todos los directores.
- **Ejemplo de solicitud**:
    ```bash
    GET http://localhost:3030/directores/
    ```
### 8. Traer director por ID
- **Ruta**: `/directores/:id`
- **Método**: `GET`
- **Descripción**: Devuelve un director por ID.
- **Ejemplo de solicitud**:
    ```bash
    GET http://localhost:3030/directores/3
    ```
### 9. Borrar director
- **Ruta**: `/directores/:id`
- **Método**: `DELETE`
- **Descripción**: Borrar una director por ID.
- **Ejemplo de solicitud**:
    ```bash
    DELETE http://localhost:3030/directores/1
- **Ejemplo de respuesta**:
    ```json
    {
      "message": "Registro borrado correctamente"
    }
    ```
