# Prueba Tecnica

Descripción corta y concisa del propósito del proyecto.

## Desarrollador

- **Nombre:** Freya Lopez Lopez

## Tecnologías Utilizadas

- PHP (Versión 8.1)
- Laravel (Versión X.X)
- Angular (Versión X.X)
- SQL Server (Versión X.X)

## Descripción del Proyecto

Este proyecto es un sistema CRUD (Crear, Leer, Actualizar, Eliminar) desarrollado con PHP Laravel para el backend y Angular para el frontend. La base de datos está construida en SQL Server.

**Principales Funcionalidades:**

El sistema permite la gestión de usuarios con las siguientes acciones principales:

- Crear nuevos usuarios proporcionando datos básicos como nombre, apellido y email.
- Modificar la información de usuarios existentes, incluyendo la capacidad de actualizar nombre, apellido, email, departamento y cargo.
- Eliminar usuarios existentes del sistema.
- Agregar y gestionar departamentos y cargos asociados a los usuarios.

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas antes de comenzar:

- PHP 8.1
- Composer (para Laravel)
- Node.js y npm (para Angular)
- SQL Server

## Configuración del Proyecto

1. **Configuración de Laravel:**
   - Clona este repositorio.
   - Ejecuta `composer install` para instalar las dependencias de Laravel.
   - Copia el archivo `.env.example` a `.env` y configura la conexión a la base de datos.

2. **Configuración de Angular:**
   - Navega al directorio `frontend` y ejecuta `npm install` para instalar las dependencias de Angular.
   - Configura la URL del backend en el archivo de configuración de Angular.

3. **Migraciones y Semillas:**
   - Ejecuta las migraciones de Laravel con `php artisan migrate` para crear las tablas en la base de datos.

## Ejecución del Proyecto

1. **Backend (Laravel):**
   - Ejecuta el servidor de Laravel con `php artisan serve`.

2. **Frontend (Angular):**
   - Navega al directorio `frontend` y ejecuta `ng serve`.

3. **Acceso a la Aplicación:**
   - Abre tu navegador y visita la URL proporcionada por Laravel.



