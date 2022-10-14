# Instituto Politécnico Formosa.
## Tec. en Desarrollo de Software Multiplataforma.




## Verificar versión de Node con:
#### node -v

## Verificar versión de npm con:
#### npm -v

## Para instalar las dependencias que necesita este proyecto, ejecutar el siguiente comando:
#### npm install

## Para ejecutar el proyecto, ejecutar el siguiente comando:
#### npm run dev

## Para ejecutar el proyecto en modo producción, ejecutar el siguiente comando:
#### npm start

# Documentacion del proyecto:

## Especificaciones de las funciones de la aplicacion

### La aplicacion es gestor de tareas multiusuario el cual cuenta con las siguientes funciones:

####      .Registro de usuario
####      .Inicio de Sesion
####      .Listado de todos los usuarios habilitados
####      .Consulta de un usuario por ID
####      .Actualizacion de un usuario y actualizacion del nombre del mismo en sus tareas
####      .Ocultar y Desabilitar a un usuario y ocultar sus tareas
####      .Borrar a un usuario de la base de datos y ocultar sus tareas

### ----------------------------------------------------------------------------------------------

####      .Subir una tarea
####      .Listado de todas las tareas habilitadas
####      .Consultar todas las tareas del usuario
####      .Actualizacion el estado de una tarea
####      .Ocultar una tarea
####      .Borrar una tarea


## Para comenzar utilizar el proyecto se debe tener en cuenta lo siguiente:
####      .Que el puerto es el 3000
####      .La base de datos de mongo esta en el local host
####      .Se deben usa Thunder client o Postman para hacer las peticiones
####      .En algunas peticiones se pediran datos en formato json que se deben enviar en el body de la peticion
####      .En algunas peticiones se requerira de un token de usuario el cual se tendra que colocar en el headers en una variable Authorization
####      .En algunas peticiones se requerira pasar un ID como parametro en la url

# Usos de la app

## Registro de usuario

### Mediante un metodo POST enviar por localhost:3000/usuario los datos del usuario que desea registrar envialos por el body de la siguiente manera:

´´´
{
  "usuario": "username",
  "correo": "email@gmail.com",
  "contraseña": "password"
}

´´´

## Inicio de sesion

### Mediante el metodo POST enviar por localhost:3000/login los datos del usuario que desea registrar envialos por el body de la siguiente manera:

´´´
{
  "usuario": "username",
  "contraseña": "password"
}
´´´
#### Al iniciar sesion exitosamente recibira un Token de su usuario, el cual debe guardar para posteriores usos



## Listado de Usuarios

### Mediante el metodo GET enviar por localhost:3000/usuario (y recibira todos los usuarios habilitados en la bd)



## Consulta de Usuario

### Mediante el metodo GET enviar por localhost:3000/usuario/(id de mongo del usuario)



## Actualizar el Usuario

### Mediante el metodo PUT enviar por localhost:3000/usuario/(id de mongo del usuario) los datos del usuario que desea actualizar evialos por el body de la siguiente manera:

´´´
{
  "usuario": "username",
  "correo": "email@gmail.com",
  "contraseña": "password"
}
´´´
### Ademas debera colocar el token del usuario en la parte de el headers en una variable Authorization


## Ocultar el usuario

### Mediante el metodo DELETE enviar por localhost:3000/usuario/(id de mongo del usuario) para ocultar el usuario
### Ademas debera colocar el token del usuario en la parte de el headers en una variable Authorization



## Borrar el usuario

### Mediante el metodo DELETE enviar por localhost:3000/usuarioDelete/(id de mongo del usuario) para ocultar el usuario
### Ademas debera colocar el token del usuario en la parte de el headers en una variable Authorization

## ------------------------------------------------------------------------------------------------------------------------

## Subir una tarea

### Mediante el metodo POST enviar por localhost:3000/tareas los datos de la tarea que desea subir y enviarlos dentro del body de la siguiente manera:
### Ademas debera colocar el token del usuario en la parte de el headers en una variable Authorization

´´´
{
  "titulo": "title",
  "descripcion" : "description",
  "estado": "condition"
}
´´´



## Listado de Tareas

### Mediante el metodo GET enviar por localhost:3000/tareasTodas



## Consulta de todas las tareas del usuario

### Mediante el metodo GET enviar por localhost:3000/tareas
### Ademas debera colocar el token del usuario en la parte de el headers en una variable Authorization



## Actualizar el estado de una tarea

### Mediante el metodo PUT enviar por localhost:3000/tareas/(id de mongo de la tarea) los datos de la tarea que desea subir y enviarlos dentro del body de la siguiente manera:
### Ademas debera colocar el token del usuario en la parte de el headers en una variable Authorization

´´´
{
  "descripcion" : "description"
}
´´´

## Ocultar una tarea

### Mediante el metodo DELETE enviar por localhost:3000/tareas/(id de mongo de la tarea)
### Ademas debera colocar el token del usuario en la parte de el headers en una variable Authorization



##Borrar una tarea

### Mediante el metodo DELETE enviar por localhost:3000/tareasDelete/(id de mongo de la tarea)
### Ademas debera colocar el token del usuario en la parte de el headers en una variable Authorization








