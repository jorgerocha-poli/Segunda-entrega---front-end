// Mocks data (si se necesita para futuras funcionalidades)
// Aquí se almacenan los servicios con sus propiedades como nombre, descripción, precio, duración y garantía
const servicesMock = {
    latoneria: {
        name: "Latonería", // Nombre del servicio
        description: "Servicios profesionales de reparación de carrocería", // Descripción del servicio
        price: "$150 - $2000", // Rango de precios para el servicio
        duration: "1-5 días", // Duración del servicio
        warranty: "6 meses" // Garantía ofrecida
    },
    pintura: {
        name: "Pintura",
        description: "Pintura profesional con acabados de calidad",
        price: "$300 - $3000",
        duration: "3-7 días",
        warranty: "12 meses"
    },
    motor: {
        name: "Reparación de Motor",
        description: "Diagnóstico y reparación de motores",
        price: "$200 - $5000",
        duration: "1-10 días",
        warranty: "12 meses"
    },
    mofle: {
        name: "Reparación de Mofle",
        description: "Reparación y reemplazo de sistemas de escape",
        price: "$80 - $500",
        duration: "1-2 días",
        warranty: "6 meses"
    },
    direccion: {
        name: "Reparación de Dirección",
        description: "Servicios para sistemas de dirección",
        price: "$100 - $800",
        duration: "1-3 días",
        warranty: "6 meses"
    },
    frenos: {
        name: "Reparación de Frenos",
        description: "Servicio completo para sistemas de frenos",
        price: "$80 - $600",
        duration: "1-2 días",
        warranty: "6 meses"
    },
    escaner: {
        name: "Escáner",
        description: "Diagnóstico computarizado avanzado",
        price: "$50 - $150",
        duration: "1 hora",
        warranty: "N/A" // Sin garantía para este servicio
    }
};

// Este evento se dispara cuando el DOM se ha cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a los elementos del DOM
    const menuItems = document.querySelectorAll('.menu-item'); // Todos los elementos de menú
    const submenuItems = document.querySelectorAll('.submenu-item'); // Elementos dentro de un submenú
    const submenu = document.querySelector('.submenu'); // Submenú
    const serviceSections = document.querySelectorAll('.service-section'); // Secciones de servicios

    // Función para mostrar una sección de servicio específica
    function showServiceSection(serviceId) {
        // Primero, desactivar todas las secciones de servicio
        serviceSections.forEach(section => {
            section.classList.remove('active');
        });
        // Buscar la sección de servicio correspondiente
        const targetSection = document.getElementById(serviceId);
        if (targetSection) {
            targetSection.classList.add('active'); // Activar la sección seleccionada
        }

        // Actualizar el elemento de menú activo
        menuItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.service === serviceId) {
                item.classList.add('active');
            }
        });

        // Actualizar el elemento de submenú activo
        submenuItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.service === serviceId) {
                item.classList.add('active');
            }
        });
    }

    // Función para alternar la visibilidad del submenú
    const reparacionItem = document.querySelector('.menu-item[data-service="reparacion"]');
    const arrow = reparacionItem.querySelector('.arrow');
    
    reparacionItem.addEventListener('click', function() {
        // Verifica si el submenú está abierto
        const isOpen = submenu.classList.contains('open');
        
        if (!isOpen) {
            // Abre el submenú si está cerrado
            submenu.classList.add('open');
            arrow.classList.add('open');
        } else {
            // Cierra el submenú si está abierto
            submenu.classList.remove('open');
            arrow.classList.remove('open');
            // Al hacer clic en el ítem principal de reparación, se muestra la sección de motor
            showServiceSection('motor');
        }
    });

    // Handler para el clic en los elementos del menú sin submenú
    menuItems.forEach(item => {
        if (!item.classList.contains('has-submenu')) {
            item.addEventListener('click', function() {
                const serviceId = this.dataset.service; // Obtiene el id del servicio desde los datos del elemento
                showServiceSection(serviceId); // Muestra la sección correspondiente
            });
        }
    });

    // Handler para el clic en los elementos dentro del submenú
    submenuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation(); // Evita que se propague el clic
            const serviceId = this.dataset.service; // Obtiene el id del servicio
            showServiceSection(serviceId); // Muestra la sección correspondiente
        });
    });

    // Funcionalidad de los botones de inicio de sesión y cierre de sesión
    const loginButton = document.querySelector('.nav-button.login');
    const logoutButton = document.querySelector('.nav-button.logout');

    // Acción del botón de inicio de sesión (mock)
    loginButton.addEventListener('click', function() {
        alert('Función de inicio de sesión (mock)');
        // Aquí se conectaría con un sistema de autenticación real en una aplicación real
    });

    // Acción del botón de cierre de sesión (mock)
    logoutButton.addEventListener('click', function() {
        alert('Has cerrado sesión (mock)');
        // Aquí se manejaría la funcionalidad de cierre de sesión en una aplicación real
    });
});

