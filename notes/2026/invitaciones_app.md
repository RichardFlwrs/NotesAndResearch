# Nombre: 
Orquidea

# Descripción: 
Nuestra página se enfoca en la gestión de invitados para tu evento y gestión de las mesas.
Nuestros clientes podrán tener su propio "link" para su evento, donde sus invitados se "identificarán" para poder confirmar su asistencia y definir sus acompañantes.
Además los clientes tendrán apoyo visual al momento de organizar las mesas y definir dónde se sentará cada invitado con sus acompañantes. El cliente puede elegir entre 3 estilos distintos para su invitación digital o con un costo extra le hacemos su diseño


# Features:
+ Envío de Correos y mensajería de WhatsApp.
+ Mensajería instanea de notificación (websocket)
+ Personalización de Recordatorios.
+ Control de Invitados (cancelaciones, request para traer acompañante)
+ Link donde ellos escriban su correo y telefono, además de cantidad de invitaciones.


# UX/UI Global:
+ i18 lenguaje de texto


# Página personalizada

Cada cliente al pagar su cuenta, entrará a su "Dashboard de Eventos", donde verá sus eventos pasados.
Cada evento creado por el cliente, será un link único con su configuración de estilo, lenguaje por defecto, etc.
Ejemplo.-
Evento Nombre | Invitados totales | link
Mi cumpleaños |        40         | www.orquidea.com/username/mi-cumpleanos
Graduación    |        100        | www.orquidea.com/username/graduacion


# Módulos:

1. Dashboard Cliente.
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

2. Sección de Invitado.
Confirma su asistencia
    Si sí.- Tiene derecho a X cantidad de acompañantes
Si ya está confirmado.- Información de sus estatus y de sus acompañantes

3. Gestión de Mesas
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


4. Estilización de la Página
Por defecto la página personal de su evento tendrá un estilo predefinido 



# Tech Stack

Monorepo; landing, backend API, shared Zod schemas, and E2E tests.

## Estructura

| Folder | Stack |
|--------|--------|
| `frontend/` | Vite + React + TypeScript + Vitest + react-konva |
| `backend/` | Fastify + TypeScript |
| `zod/` | Shared Zod schemas |
| `e2e/` | Playwright |
| `docs/` | Feature specifications |


## Frontend Specs
+ react-konva.- Se usará para el pintado de mesas