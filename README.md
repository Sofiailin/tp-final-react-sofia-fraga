🌈 Bienvenidos a mi Trabajo Final del curso de Front-End.

Este proyecto es el resultado del conocimiento y las habilidades que he adquirido en los últimos meses. 

💻 Pokédex 

Es una aplicación web interactiva desarrollada con React que simula una Pokédex, permitiendo a los usuarios visualizar y explorar información detallada sobre diferentes Pokémon. 

La aplicación tiene como objetivo principal ser una Pokédex funcional que cumple con los siguientes puntos:

Un inicio con una presentacion.

Un listado de Pokémons que muestra una cuadrículacon los Pokémon obtenidos de la PokeAPI.

La navegación permite moverse entre la lista principal y la vista de detalle de cada Pokémon por medio de un boton.
Y al buscarlos en el buscador se abre una pantalla con otra informacion diferente.

🚀 Tecnologías y Herramientas
Las tecnologías clave utilizadas en el desarrollo de este proyecto son:

⚛️ React: Biblioteca principal para la construcción de la interfaz de usuario.

🧭 React Router DOM: Para gestionar el enrutamiento y la navegación entre las diferentes vistas (Home, Lista, Detalle).

⚡ Vite: Bundler rápido para la configuración inicial y el desarrollo.

📡 PokeAPI: La fuente de datos principal para obtener la información de los Pokémon.

📝 Instrucciones de Instalación y Ejecución
Estas instrucciones te guiarán para clonar el proyecto y ponerlo en marcha en tu entorno de desarrollo local.

🔨 Prerrequisitos
Asegúrate de tener instalados:

🔧 Node.js (Versión LTS recomendada).

🔧 npm o yarn (Gestor de paquetes de Node.js).

🔧 Git.

📥 Pasos de Instalación
Clonar el Repositorio 💾: Abre tu terminal y ejecuta el siguiente comando:

- git clone https://github.com/Sofiailin/tp-final-react-sofia-fraga.git

- git pull (para traer lo que hay en el repositorio)

Luego hay que abrir un nuevo terminal y ejecutar los comandos:

- npm install (o si usas yarn -> yarn install)

(Nota: La dependencia react-router-dom se instalará con el npm install inicial si está correctamente listada en el package.json. No es necesario listarla dos veces en los pasos.
En el caso que no se haya instalado debera ejecutar el comando - npm install react-router-dom)

- npm run dev (o si usas yarn -> yarn dev)

Esto debera generar un link para acceder al Local Host

Abrir en el Navegador: La aplicación se iniciará y estará accesible en la URL que indique la consola (generalmente http://localhost:5173/).


⚙️ Estructura y Vistas del Proyecto
El proyecto está organizado de la siguiente manera, reflejando las funcionalidades requeridas:

📁 Estructura Principal
src/
├── components/
│   ├── Buscador.jsx          
│   ├── Cargando.jsx        
│   ├── DetallePokemon.jsx    
│   ├── Icons.jsx   
│   ├── Navbar.jsx 
│   └──Pokemones.jsx   
├── Hooks/
│   └── usePokemones.js 
├── Img/   
├── Pages/ 
│   ├──Inicio.jsx 
│   └──Pokemon.jsx                 
├── App.css    
├── App.jsx               
├── index.css            
├── App.jsx               
└── main.jsx

👨‍💻 Autora - Sofia Ailin Fraga 

📅 2025 – Diplomatura en Desarrollo Web Full Stack (UTN BA)

🧾 Licencia
Este proyecto se distribuye con fines puramente educativos como parte de la evaluación final del curso de Front End.