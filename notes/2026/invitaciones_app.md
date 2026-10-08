# Ficha del Proyecto: Orquídea

## Descripción
Plataforma de gestión de eventos, confirmación de invitados (RSVP) y maquetación interactiva de mesas con invitaciones digitales personalizables.

---

## Tech Stack & Estructura

**Monorepo:** API Symfony, SPA/Assets React, OpenAPI Codegen y tests E2E.

| Folder | Stack / Herramientas | Propósito |
| :--- | :--- | :--- |
| `backend/` | **Symfony 7** + PHP 8.3 + Doctrine ORM + `NelmioApiDocBundle` | API REST, validaciones (DTOs), exportación de OpenAPI spec y gestión de eventos/archivos Excel. |
| `frontend/` | **Vite + React + TypeScript** + Tailwind CSS + `react-konva` | Dashboard del cliente, canvas interactivo de mesas y landing estática/RSVP de invitados. |
| `openapi/` | **OpenAPI 3.0 Spec** (`openapi.json` autocreado desde Symfony) | Contrato centralizado de datos y esquemas de validación. |
| `codegen/` | `openapi-zod-client` / `orval` | Generación automática de tipos TypeScript y esquemas Zod desde la spec de OpenAPI. |
| `e2e/` | **Playwright** | Pruebas de integración de flujos críticos (RSVP y canvas de mesas). |
| `docs/` | Especificaciones de características | Documentación técnica del dominio. |

---

## Flujo de Arquitectura y Datos (Single Source of Truth)

```
[Symfony DTOs / Constraints] ──(Nelmio)──> [OpenAPI Spec (JSON)] ──(openapi-zod-client)──> [React (Zod Schemas + TS Types)]
```

1. **Backend (Symfony 7):** Define entidades, DTOs y reglas de validación mediante PHP Attributes (`Symfony\Component\Validator`). Genera la especificación OpenAPI automáticamente.
2. **Contrato de API (`openapi/`):** La especificación JSON sirve de contrato único entre backend y frontend.
3. **Frontend (React):** Ejecuta el script de *codegen* para crear esquemas de **Zod** y tipos de **TypeScript** sincronizados para formularios (`react-hook-form`), solicitudes HTTP y estado local.

---

## Features

* **Notificaciones:** Envíos por correo (Symfony Mailer) y mensajería de WhatsApp.
* **Control de Invitados:** RSVP, solicitud de acompañantes, validación de cupos y recordatorios personalizados.
* **Procesamiento de Archivos:** Carga de Excel en Symfony con detección y resolución interactiva de duplicados (por nombre o teléfono).
* **Internacionalización (i18n):** Soporte multi-idioma global en landing, dashboard y vista del invitado.

---

## Módulos Principales

### 1. Dashboard del Cliente
* **Gestión de Eventos:** Creación de links únicos (`/username/nombre-evento`).
* **Importación Masiva:** Carga de Excel. Si hay duplicados (ej: dos "Ricardo Flores"), solicita editar nombres o exigir teléfono para desambiguar.
* **Tabla de Control:** Estatus de asistencia, acompañantes y mesa asignada.

### 2. Sección del Invitado (RSVP)
* Confirmación de asistencia e identificación por nombre o teléfono.
* Selección de número de acompañantes dentro del límite asignado.
* Consulta del estatus actual y resumen de confirmación.

### 3. Gestión Visual de Mesas (`react-konva`)
* **Grid Dinámico:** Creación de layouts de mesas con sillas predeterminadas.
* **Context Menu:** Renombrar mesas, ajustar número de sillas y aplicar etiquetas.
* **Asignación:** Selector de invitados con actualización en tiempo real del canvas (sillas ocupadas vs. libres).
* **Interacción Drag-and-Drop:** Reordenamiento visual de posiciones de sillas e invitados alrededor de la mesa. Persistencia mediante peticiones REST (`PUT`/`PATCH`) a Symfony.

### 4. Estilización e Invitaciones
* Selección de 3 plantillas base para la invitación digital o integración de diseños a medida.




# Página personalizada

Cada cliente al pagar su cuenta, entrará a su "Dashboard de Eventos", donde verá sus eventos pasados.
Cada evento creado por el cliente, será un link único con su configuración de estilo, lenguaje por defecto, etc.
Ejemplo.-
Evento Nombre | Invitados totales | link
Mi cumpleaños |        40         | www.orquidea.com/username/mi-cumpleanos
Graduación    |        100        | www.orquidea.com/username/graduacion


# Módulos:

## 1. Dashboard Cliente.
Los Clientes nos tienen que dar "Nombre", "Telefono" y "Correo E.". Los ultimos 2 serían opcionales.
Puede ver una tabla con sus invitados, su estatus actual, cantidad de acompañantes y mesa asignada.

El cliente tendrá que adjuntar un archivo excel con los datos de sus invitados.
Una vez procesados por el backend, se pintará la tabla y notificará al usuario si tiene problemas de duplicados. Es decir si existen 2 filas con el mismo valor para "Nombre", se le pedirá modificar el texto a cada uno. O en su defecto agregar telefono para hacerlos únicos.
Ejemplo.- 
Invitado 1: Ricardo Flores | (sin telefono)
Invitado 2: Ricardo Flores | (sin telefono)
> El cliente puede optar por:
[Opcion A]:
    Invitado 1: Ricardo Flores Torres | (sin telefono)
    Invitado 2: Ricardo Flores De la Fuente | (sin telefono)
--- Resultado-> Los invitados se identifican por nombre solamente.

[Opcion B]:
    Invitado 1: Ricardo Flores | 8123995671
    Invitado 2: Ricardo Flores | 8115358764
--- Resultado-> Los invitados al ingresar su nombre, se le pedirá también su telefeono para corroborar la información.

## 2. Sección de Invitado.
Confirma su asistencia
    Si sí.- Tiene derecho a X cantidad de acompañantes
Si ya está confirmado.- Información de sus estatus y de sus acompañantes

## 3. Gestión de Mesas
El usuario puede designar cuantás mesas tendrá su evento, y cuantas sillas tendrá las mesas por defecto.
Posteriormente el usuario puede hacer click en cada mesa para asignarles un "nombre" y "etiquietas", además se personalizar la cantidad de sillas.
El grid de las mesas será tambien personalizable, 3x3, 4x2, etc.
Ejemplo.-
> Usuario ingresa 4 mesas con 4 sillas por defecto
> Aparecen en pantalla 4 figuras grandes, con 4 figuras más pequeñas a su alrededor para simular cada mesa. Todas las mesas tienen nombre por defecto al número de índice (Mesa #1, Mesa #2, etc)
> El usuario hace click en la "Mesa #1" y salen un "context-menu" para las distintas opciones
> El usuario selecciona: "Cambiar nombre", y aparece un text-input con el nombre actual para modificar e inserta: "Mesa Familia Principal"
> El usuario vuelve hacer click en la "Mesa Familia Principal" para el menu, y selecciona: "Modificar sillas"
> Cambia el número de sillas de 4 a 8.
> Esa mesa en particular se hace más grande y agrega 4 figuras pequeñas extras a su alrededor
> El usuario vuelve hacer click en la "Mesa Familia Principal" para el menu, y selecciona: "Llenar Mesa"
> Le aparece un listado a seleccionar de Invitados, selecciona 7 invitados y acepta.
> La mesa se actualiza, mostrando cada silla con su invitado y dejando una silla libre.
> El usuario arrastra una silla para cambiar el orden de los nombres alredodor de la Mesa.
> El usuario hace click en una silla en específico, sale un "context-menu" y selecciona: "Asignar invitado"
> Aparece el mismo lsitado con los invitados pendientes de asignación. Selecciona uno y acepta.
> Se actualiza la mesa.


## 4. Estilización de la Página
Por defecto la página personal de su evento tendrá un estilo predefinido 