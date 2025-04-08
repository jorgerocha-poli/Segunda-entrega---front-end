1. Código CSS (Estilos de la Interfaz)
Este código define los estilos visuales de una interfaz web, utilizando variables CSS (definidas en :root) para facilitar la personalización de colores, tamaños y tiempos de transición. Aquí se detallan los aspectos más importantes:
•	Variables CSS: Las variables definidas al inicio (--primary-color, --secondary-color, etc.) permiten cambiar fácilmente los colores, tamaños de los componentes y la velocidad de las transiciones en toda la interfaz.
•	Estilos de la Navbar (Barra de navegación): Se aplica un fondo fijo en la parte su-perior con color principal (--primary-color) y un diseño flexible para acomodar los elementos del menú. Los botones tienen transiciones suaves al cambiar de color cuando se pasa el ratón por encima.
•	Sidebar (Barra lateral): Esta barra lateral se mantiene fija a la izquierda y tiene un color oscuro, con un diseño que permite interactuar con el contenido dentro de la página. Su visibilidad puede ajustarse con transiciones suaves en dispositivos móvi-les.
•	Main Content (Contenido Principal): El contenido principal se ajusta al espacio disponible, desplazando hacia la derecha la sección de contenido principal en rela-ción con el sidebar.
•	Estilos Responsivos: Con los estilos dentro de la regla @media (max-width: 768px), se ajusta la visibilidad del sidebar en pantallas más pequeñas, haciendo que el sidebar sea ocultado por defecto y aparezca con una animación al interac-tuar con un botón de menú.
Este código crea una estructura de navegación visualmente atractiva y funcional, adaptable a diferentes tamaños de pantalla.


2. Código JavaScript (Interactividad del Menú y Servicios)
Este código es responsable de manejar la interactividad de los elementos del menú y las secciones de servicio en la interfaz:
•	Datos de los servicios (servicesMock): Este objeto simula un conjunto de datos de servicios disponibles en un sistema de reparación. Cada servicio tiene propiedades como nombre, descripción, precio, duración y garantía. Este mock (simulación) faci-lita futuras expansiones y pruebas de la interfaz sin depender de datos reales.
•	Manipulación de DOM:
o	showServiceSection: Esta función permite mostrar una sección específica de servicios al hacer clic en un elemento del menú o submenú. Actualiza las clases CSS de los elementos del menú para indicar cuál está activo y realiza el cambio visual en la interfaz.
o	Eventos en el Menú: El código gestiona los clics en los elementos del menú, mostrando las secciones correspondientes. Además, maneja la apertura y cierre del submenú al hacer clic en el ítem principal de "Reparación".
o	Eventos en Submenú: Los elementos dentro del submenú también son in-teractivos y, al hacer clic, actualizan la sección activa en el contenido prin-cipal.
•	Funciones de inicio y cierre de sesión: Aunque son simulaciones (mock), los boto-nes de inicio de sesión y cierre de sesión muestran alertas al hacer clic, simulando el comportamiento de una aplicación real. En una aplicación funcional, estos even-tos se conectarían a un sistema de autenticación real.
Este código proporciona la lógica para manejar la navegación dinámica entre los diferentes servicios y submenús, así como las interacciones de usuario con botones de acción (login/logout).

3. Conexión entre el CSS y JavaScript
La estructura y los estilos definidos en el código CSS se complementan con la funcionalidad implementada en JavaScript, creando una interfaz interactiva donde el usuario puede navegar entre diferentes servicios, con transiciones suaves y una experiencia de usuario optimizada.
•	Navegación Dinámica: El CSS define la estructura visual (barra de navegación, si-debar, y contenido principal) mientras que el JavaScript permite que el contenido cambie de manera dinámica cuando el usuario interactúa con los elementos del menú.
•	Interacción de Submenú: El CSS maneja el diseño visual del submenú, mientras que el JavaScript asegura que el submenú se abra y se cierre correctamente según la interacción del usuario, cambiando las clases CSS en función de la acción.
•	Estilos Responsivos: Mientras que el CSS gestiona cómo debe comportarse la in-terfaz en dispositivos móviles, el JavaScript controla cómo el submenú y el sidebar se comportan dependiendo de las acciones del usuario, garantizando una navega-ción fluida en pantallas pequeñas.
En conjunto, estos tres fragmentos de código crean una interfaz de usuario interactiva y adaptable, con un diseño visualmente atractivo, capacidad de navegación entre secciones de servicios, y simulación de funcionalidades clave como el inicio y cierre de sesión.
