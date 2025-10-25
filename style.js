// Archivo: script.js 

// =======================================================================
// ** APARTADO 1: MAPA DE NOMBRES DE BOTONES (MODIFICAR AQUÍ) **
// =======================================================================
const BUTTON_NAME_MAP = {
    // ID (Botón) : 'TEXTO_DE_BOTÓN_PERSONALIZADO'
    '01': 'SEMANA 01', // Ejemplo: Usa \n para salto de línea
    '02': 'SEMANA 02',
    '03': 'SEMANA 03',
    '04': 'SEMANA 04',
    '05': 'SEMANA 05',
    '06': 'SEMANA 06',
    '07': 'SEMANA 07',
    '08': 'SEMANA 08',
    '09': 'SEMANA 09',
    '10': 'SEMANA 10',
    '11': 'SEMANA 11',
    '12': 'SEMANA 12',
    '13': 'SEMANA 13',
    '14': 'SEMANA 14',
    '15': 'SEMANA 15',
    '16': 'SEMANA 16',
    'default': 'D E S T I N Y\n D E F A U L T'
};
// =======================================================================


// =======================================================================
// ** APARTADO 2: MAPA DE CONFIGURACIÓN DE 16 URLs de GITHUB (MODIFICAR AQUÍ) **
// =======================================================================
const GITHUB_MAP = {
    // ID (Botón) : 'URL COMPLETA DEL REPOSITORIO O PERFIL'
    '01': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/tree/120d1de77f19d441f8ec40b41215317de6c0f4d4/semana%201', 
    '02': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/tree/786ada81b0d10816bd6d046fb9c7fefde31188cb/semana%202', 
    '03': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/tree/786ada81b0d10816bd6d046fb9c7fefde31188cb/semana%203',
    '04': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/tree/786ada81b0d10816bd6d046fb9c7fefde31188cb/semana%204',
    '05': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/blob/bf539e3aba7b4ad8ba2ad968efe773959a17b4ac/semana%205.tar',
    '06': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/blob/658200dfdf2165768604bdd446979996d94e860f/semana%206%20(2).tar',
    '07': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/blob/28203cbf3f6c2e7658eb5d911bc23e4d438f5f41/semana%207%20(2).tar',
    '08': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/tree/d1769d0f631990416725f9d743b98873ed3bf9f7/semana%208',
    '09': 'https://github.com/TuUsuario/Servidor-A-09',
    '10': 'https://github.com/TuUsuario/Servidor-B-10',
    '11': 'https://github.com/TuUsuario/Servidor-C-11',
    '12': 'https://github.com/TuUsuario/Servidor-D-12',
    '13': 'https://github.com/TuUsuario/Backup-13',
    '14': 'https://github.com/TuUsuario/Backup-14',
    '15': 'https://github.com/TuUsuario/Recursos-H-15',
    '16': 'https://github.com/TuUsuario/Recursos-I-16',
    // URL por defecto
    'default': 'https://github.com/TuUsuario/Mi-Perfil' 
};
// =======================================================================


// =======================================================================
// ** APARTADO 3: MAPA DE CONTENIDO DE LAS 16 SEMANAS (MODIFICAR AQUÍ) **
// =======================================================================
const PACKET_CONTENT_MAP = {
    '01': {
        subtitle: 'semana 01',
        description: 'Una tienda ha puesto en venta de camisas ofreciendo un descuento, por temporada de verano, denominado 7% + 7%. Analiza la aplicación del descuento anidado.',
        listHTML: `
            <li> Enunciado 1</li>
            <li>            </li>

<li>El importe de la compra es igual al producto del precio de la camisa por la cantidad de unidades adquiridas.<li>
<li>El importe del primer descuento es igual al 7% del importe de la compra.<li>
<li>El importe del segundo descuento es igual al 7% de lo que queda de restar el importe de la compra menos el importe del primer descuento.<li>
<li>El importe del descuento total es igual a la suma de los dos descuentos anteriores.<li>
            <li>El importe por pagar es igual al importe de la compra menos el importe del descuento total..</li>
             <li>         </li>
            <li>Enunciado 2:.</li>
            <li>Una empresa expondrá sus productos en una feria. La empresa considera que el monto total de dinero a invertir estará distribuido de la siguiente manera:</li>
            <li>·Alquiler de espacio en la feria: 23%</li>
            <li>·Publicidad: 7%</li>
            <li>·Transporte: 26%<li>
            <li>·Servicios feriales: 12%</li>
            <li>·Decoración: 21%</li>
            <li>·Gastos varios: 11%</li>
            <li>·Dado el monto total de dinero a invertir, diseñe un programa que determine cuánto gastará la empresa en cada rubro.</li>
        `
    },
    '02': {
        subtitle: 'SEMANA 02',
        description: ':3',
        listHTML: `
            <li>ENUNCIADO 1:</li>
            <li>..</li>
            <li>El programa calcula primero el **Importe de la Compra** multiplicando el precio de la docena por la cantidad de docenas adquiridas. Luego, determina el **Importe del Descuento**: si se compran 10 docenas o más, se aplica un 20%; si son menos, el descuento es del 10%. Con este descuento, se calcula el **Importe a Pagar** (Compra menos Descuento). Finalmente, se determina la **Cantidad de Lapiceros de Obsequio**: si el Importe a Pagar es de \$200 o más, el cliente recibe 2 lapiceros por cada docena comprada; de lo contrario, no recibe obsequios.</li>
            <li>ENUNCIADO 2</li>
            <li>..</li>
            <li>El programa de cálculo de sueldos determina el **Sueldo Básico** multiplicando las horas trabajadas por la tarifa horaria, que es S/. 45.0 para la Categoría A y S/. 37.5 para la Categoría B. A esto se suma la **Bonificación por Hijos**, que es S/. 40.5 por hijo si tiene hasta 3, y S/. 35.0 por hijo si tiene más de 3. La suma de estos dos montos constituye el **Sueldo Bruto**. Finalmente, se aplica un **porcentaje de descuento legal** sobre el Sueldo Bruto para calcular el **Sueldo Neto** que recibirá el empleado.</li>
        `
    },
    '03': {
        subtitle: 'semana 03',
        description: ':3',
        listHTML: `
            <li>ENUNCIADO 1</li>
            <li>..</li>
            <li>El programa debe calcular el **Importe de la Compra** multiplicando el precio por docena por la cantidad adquirida, para luego determinar el **Importe del Descuento**: si se compran **10 o más docenas**, el descuento es del **20%**; si son **menos de 10**, es del **10%**. Restando este monto al importe de la compra se obtiene el **Importe a Pagar**, valor crucial para definir la **Cantidad de Lapiceros de Obsequio**: si el importe final es de **S/. 200 o más**, se obsequian **dos lapiceros por cada docena**; si es menor, no se entrega ninguno.</li>
            <li>ENUNCIADO 2</li>
            <li>..</li>
            <li>El programa debe calcular el **Importe de la Compra** multiplicando la cantidad de pasajes por el precio de S/. 37.5 (igual para ambos turnos), para luego aplicar el **Importe del Descuento**: si se adquieren **15 o más pasajes**, el descuento es del **8%**; si son **menos de 15**, es del **5%**. El **Importe a Pagar** se obtiene restando este descuento, y su valor final determina la **Cantidad de Caramelos de Obsequio**: si el importe a pagar es **mayor a S/. 200**, el cliente recibe **dos caramelos por cada boleto**; si es igual o menor a S/. 200, no recibe obsequios.</li>
        `
    },
    '04': {
        subtitle: 'semana 04',
        description: ':3',
        listHTML: `
            <li>ENUNCIADO 1</li>
            <li>..</li>
            <li>El proyecto consiste en extender la aplicación Java Swing anterior para incluir un **módulo de cálculo geométrico** que determine el área y perímetro de tres figuras distintas, mostrando una imagen ilustrativa. Además, se debe implementar un sistema de **Login por Roles** (Alumno y Docente) que, al ser autenticado, dirija a una segunda ventana para realizar **conversiones de cuatro unidades de medida a una unidad base común**. El rol **Docente** tendrá privilegios para **modificar** los datos de conversión, mientras que el rol **Alumno** solo tendrá acceso de **visualización**.</li>
            

        `
    },
    '05': {
        subtitle: 'semana 05',
        description: ':3',
        listHTML: `
            <li>ENUNCIADO 1</li>
            <li>....</li>
            <li> El proyecto SistemaGestionUsuarios es una aplicación desarrollada en Java 22 con Maven , cuyo núcleo funcional se centra en la gestión de accesos y la diferenciación de perfiles mediante una base de datos SQLite . La base de datos es esencial, manteniendo la tabla de usuarios con campos críticos para la autenticación y la autorización . Esta estructura permite un sistema de control de acceso basado en categorías de usuario , validado por datos de prueba que incluyen perfiles de Estudiante y Docente .

La funcionalidad del sistema se traduce en una Interfaz Gráfica de Usuario (GUI) conceptualmente definida por paneles . El flujo comienza en el LoginPanel con el JButton_Ingresar , que valida las credenciales y dirige al usuario al módulo correspondiente: el PanelDocente (con botones para la gestión y administración) o el PanelEstudiante (con botones para la consulta de información). Este diseño garantiza que las herramientas y funcionalidades específicas del sistema sean accesibles solo al tipo de usuario autorizado, cumpliendo el objetivo de construir una infraestructura de seguridad robusta y funcional.</li>
        `
    },
    '06': {
        subtitle: 'semana 06',
        description: ':3',
        listHTML: `
            <li>ENUNCIADO 1</li>
            <li>..</li>
            <li>En esta etapa se desarrolló la conexión del sistema con la base de datos, asegurando la comunicación correcta entre la aplicación y el servidor de datos. Se implementó el script SQL correspondiente para la creación de las tablas, relaciones y registros iniciales, garantizando la integridad y persistencia de la información. Este proceso permitió que el sistema gestionara de forma automática los datos de alumnos, docentes y actividades académicas, base fundamental para su funcionamiento completo..</li>
        `
    },
    '07': {
        subtitle: 'semana 07',
        description: ':3',
        listHTML: `
            <li>ENUNCIADO 1</li>
            <li>...</li>
            <li>Presentamos el proyecto donde se desarrollo de un Sistema de Gestión de Asistencia y Reportes, cuyo objetivo es brindar a los docentes una herramienta sencilla para registrar y actualizar la asistencia de sus alumnos por curso y fecha. A su vez, el sistema ofrece a los estudiantes un módulo de consulta, donde pueden visualizar su propio historial de asistencia y conocer su porcentaje de faltas acumuladas. Además, el sistema calcula métricas clave para el docente, como el porcentaje de inasistencia grupal e identifica a los alumnos con riesgo académico por falta de asistencia, facilitando el control y la supervisión académica de manera clara y ordenada.</li>
        `
    },
    '08': {
        subtitle: 'semana 08',
        description: ':3',
        listHTML: `
            <li>Entrega de proyecto</li>
            <li>...</li>
            <li>La última fase concluyó con la entrega final y completamente funcional del SistemaGestionUsuarios , logrando la integración total de todos sus componentes. Se ejecutó un proceso de validación que confirma la operatividad de cada funcionalidad crítica: desde la autenticación en el panel de inicio, la conexión estable con la base de datos SQLite , hasta el correcto control de acceso por perfiles y la gestión de la información académica. Las pruebas de funcionamiento confirman la estabilidad y la integridad de los datos de alumnos y docentes , demostrando que el aplicativo cumple con todos los objetivos de diseño planteados para el entorno académico.</li>
        `
    },
    '09': {
        subtitle: 'S E R V E R _ A _ M A I N T E N C E',
        description: 'Registro de mantenimiento preventivo del Servidor A. Tareas realizadas: limpieza de registros, desfragmentación de disco y optimización de la base de datos.',
        listHTML: `
            <li>Eliminación de logs obsoletos (> 30 días).</li>
            <li>Ejecución del script de optimización del índice SQL.</li>
            <li>Verificación de la integridad del sistema de archivos.</li>
        `
    },
    '10': {
        subtitle: 'S E R V E R _ B _ R E C O V E R Y',
        description: 'Procedimiento de recuperación de desastres para el Servidor B. El sistema debe restaurarse a partir del último punto de respaldo verificado (T-24 horas).',
        listHTML: `
            <li>Aislar el servidor de la red principal.</li>
            <li>Montar la imagen de respaldo en el entorno de prueba.</li>
            <li>Verificar la consistencia de los datos restaurados.</li>
            <li>Realizar el Go-Live (puesta en producción) gradual.</li>
        `
    },
    '11': {
        subtitle: 'S E R V E R _ C _ E X P A N S I O N',
        description: 'Plan de expansión de capacidad para el Servidor C. Adición de 32GB de RAM y un nuevo módulo de CPU para manejar la carga pico de tráfico prevista.',
        listHTML: `
            <li>Comprobar la compatibilidad del hardware (velocidad y latencia).</li>
            <li>Instalar el nuevo hardware en ranuras designadas.</li>
            <li>Actualizar la configuración del BIOS/UEFI.</li>
        `
    },
    '12': {
        subtitle: 'S E R V E R _ D _ T R O U B L E S H O O T',
        description: 'Guía de resolución de problemas para el Servidor D, que experimenta alta latencia. Posible causa: bucle de red o configuración errónea de DNS.',
        listHTML: `
            <li>Ejecutar 'traceroute' para identificar el cuello de botella.</li>
            <li>Verificar la configuración de DNS primario y secundario.</li>
            <li>Revisar si hay rutas de red redundantes causando bucles.</li>
        `
    },
    '13': {
        subtitle: 'B A C K U P _ L O G _ 1 3',
        description: 'Registro de la última copia de seguridad completa (Full Backup) exitosa. Se utilizó la estrategia de backup incremental en los días intermedios.',
        listHTML: `
            <li>Fecha de Backup Completo: 2077-10-15.</li>
            <li>Checksum de verificación: SHA256-4b8c9d1e.</li>
            <li>Estado: Completado con éxito (0 Errores).</li>
        `
    },
    '14': {
        subtitle: 'D I S A S T E R _ R E C O V E R Y',
        description: 'Simulación del Plan de Recuperación de Desastres (DRP) en el sitio de contingencia secundario. El tiempo de recuperación objetivo (RTO) se cumplió en 3 horas.',
        listHTML: `
            <li>Iniciar la conmutación por error (Failover) de la base de datos.</li>
            <li>Redirigir el tráfico a los servidores de contingencia.</li>
            <li>Medir el RPO (Recovery Point Objective) y RTO (Recovery Time Objective).</li>
        `
    },
    '15': {
        subtitle: 'H U M A N _ R E S O U R C E S',
        description: 'Documentación sobre la nueva política de capacitación para el personal de ingeniería. Enfoque en lenguajes de programación asíncronos y arquitecturas de microservicios.',
        listHTML: `
            <li>Módulo 1: Introducción a NodeJS y Python (Async/Await).</li>
            <li>Módulo 2: Despliegue en contenedores (Docker y Kubernetes).</li>
            <li>Módulo 3: Monitoreo con Prometheus y Grafana.</li>
        `
    },
    '16': {
        subtitle: 'I N T E R N A L _ A U D I T',
        description: 'Informe de auditoría interna sobre el cumplimiento normativo. Se recomienda actualizar el framework de logging para adherirse a las nuevas regulaciones de privacidad de datos.',
        listHTML: `
            <li>Revisar el anonimato de IPs en logs de acceso.</li>
            <li>Asegurar el borrado seguro de datos personales.</li>
            <li>Certificar el cumplimiento con la Ley de Protección de Datos V2.0.</li>
        `
    },
    'default': {
        subtitle: 'E R R O R _ L O A D I N G _ P A C K E T',
        description: 'ERROR: El Data Packet solicitado no se pudo encontrar en el registro de la base de datos. Verifique el ID e intente nuevamente.',
        listHTML: '<li>[ERROR]: Datos de soporte no disponibles.</li>'
    }
};
// =======================================================================


// 4. Get DOM elements
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3'); 
const screen4 = document.getElementById('screen-4'); 
const startButton = document.getElementById('startButton');
const knowledgeButton = document.getElementById('knowledgeButton'); 
const consoleOutput = document.getElementById('console-output'); 
const buttonGrid = document.getElementById('button-grid');
const backToScreen1Button = document.getElementById('backToScreen1Button');
const backToScreen2Button = document.getElementById('backToScreen2Button'); 
const backToScreen1ButtonFrom4 = document.getElementById('backToScreen1ButtonFrom4'); 

// Elementos de inyección de contenido (Pantalla 3)
const dataPacketTitle = document.getElementById('dataPacketTitle');
const dataPacketSubtitle = document.getElementById('dataPacketSubtitle');
const dataPacketDescription = document.getElementById('dataPacketDescription');
const dataPacketList = document.getElementById('dataPacketList');

// Elementos de GitHub
const githubButton = document.getElementById('githubButton'); 
const githubLink = document.getElementById('githubLink'); 

// Consoles
const detailConsole = document.getElementById('detail-console');
const logConsole = document.getElementById('log-console');

// Helper function for typing effect (used on Screen 1)
function typeConsoleLine(text, className = 'log-info', delay = 100, targetConsole = consoleOutput) {
    return new Promise(resolve => {
        const line = document.createElement('span');
        line.className = `${className} console-line`;
        targetConsole.appendChild(line);
        targetConsole.scrollTop = targetConsole.scrollHeight;

        let charIndex = 0;
        const typingInterval = setInterval(() => {
            if (charIndex < text.length) {
                line.textContent += text.charAt(charIndex);
                charIndex++;
                targetConsole.scrollTop = targetConsole.scrollHeight;
            } else {
                clearInterval(typingInterval);
                resolve();
            }
        }, delay);
    });
}

// Helper function for adding simple lines (used on Screen 3)
function addConsoleLine(text, className = 'log-info', targetConsole) {
    const line = document.createElement('span');
    line.className = `${className} console-line`;
    line.textContent = text;
    targetConsole.appendChild(line);
    targetConsole.scrollTop = targetConsole.scrollHeight;
}

// Simulating a system boot sequence on load
window.addEventListener('load', async () => {
    await typeConsoleLine("> BOOT SEQUENCE INITIATED...", 'log-info', 50);
    await typeConsoleLine("> [20%] Core diagnostics running...", 'log-info', 30);
    await new Promise(r => setTimeout(r, 500)); 
    await typeConsoleLine("> [100%] CONTROL UNIT ONLINE. Awaiting activation command.", 'log-success', 40);
});


// 5. Logic for Transition to Screen 2 (Activate Button)
startButton.addEventListener('click', async (event) => {
    event.preventDefault();
    consoleOutput.innerHTML = `<span class="log-info console-line">> Activation command received...</span>`;
    startButton.classList.remove('glowing');
    startButton.disabled = true;
    knowledgeButton.disabled = true; 
    startButton.textContent = 'CARGANDO....';
    
    await typeConsoleLine(`> Executing PROTOCOL: GAMMA-7...`, 'log-info', 50);
    await new Promise(r => setTimeout(r, 1000)); 
    await typeConsoleLine("> ACCESS GRANTED. BIENVENIDO A MI PORTAFOLIO :3.", 'log-success', 30);

    setTimeout(() => {
        generateButtons();
        screen1.style.display = 'none';
        screen2.style.display = 'block';
        screen3.style.display = 'none'; 
        screen4.style.display = 'none'; 
        resetInterface();
    }, 1500);
});

// 6. Logic for Transition to Screen 4 (Knowledge Button)
knowledgeButton.addEventListener('click', () => {
    screen1.style.display = 'none';
    screen2.style.display = 'none';
    screen3.style.display = 'none'; 
    screen4.style.display = 'block'; 
});

// 7. Logic for Back Buttons (Navigation)
backToScreen1Button.addEventListener('click', () => {
    screen2.style.display = 'none';
    screen1.style.display = 'block';
    typeConsoleLine("> Selection cancelled. Interface restored. Awaiting command.", 'log-info', 30);
});

backToScreen2Button.addEventListener('click', () => {
    screen3.style.display = 'none';
    screen2.style.display = 'block';
    document.getElementById('status-bar-2').textContent = 'STATUS: Sub-Menu Active | Select Hazard Destination...';
});

// Botón de regreso de la Pantalla 4
backToScreen1ButtonFrom4.addEventListener('click', () => {
    screen4.style.display = 'none';
    screen1.style.display = 'block';
    typeConsoleLine("> Knowledge base closed. Interface restored. Awaiting command.", 'log-info', 30);
});


// =======================================================================
// ** APARTADO 8: GENERACIÓN DE BOTONES (AHORA LECTURA DEL MAPA) **
// =======================================================================
function generateButtons() {
    buttonGrid.innerHTML = ''; 
    for (let i = 1; i <= 16; i++) {
        const packetID = String(i).padStart(2, '0');
        
        // Obtener el texto del botón del nuevo mapa, si no existe usa el default.
        const buttonText = BUTTON_NAME_MAP[packetID] || BUTTON_NAME_MAP['default'];

        const selectButton = document.createElement('button');
        selectButton.className = 'grid-button';
        selectButton.textContent = buttonText; // Usamos el texto del mapa
        
        selectButton.addEventListener('click', () => {
            handleButtonClick(i);
        });
        
        buttonGrid.appendChild(selectButton);
    }
}
// =======================================================================


// 9. Lógica Central de Contenido e Inyección
function handleButtonClick(id) {
    screen2.style.display = 'none';
    screen3.style.display = 'block';
    
    const packetID = String(id).padStart(2, '0');
    
    // 1. Obtener el contenido y el URL de GitHub
    const content = PACKET_CONTENT_MAP[packetID] || PACKET_CONTENT_MAP['default'];
    const githubURL = GITHUB_MAP[packetID] || GITHUB_MAP['default'];

    // 2. Inyectar el contenido en el HTML de la Pantalla 3
    dataPacketTitle.textContent = `// ** D A T A - P A C K E T - ${packetID} ** //`;
    dataPacketSubtitle.textContent = `D A T A - B L O C K : ${content.subtitle}`;
    dataPacketDescription.textContent = content.description;
    dataPacketList.innerHTML = content.listHTML; // Usamos innerHTML para la lista

    // 3. Asignar el evento de clic al botón GitHub
    githubButton.onclick = () => {
        window.open(githubURL, '_blank');
        addConsoleLine(`> [${new Date().toLocaleTimeString('en-GB')}] Command: GITHUB_NAV issued for URL: ${githubURL}`, 'log-info', logConsole);
    };

    // 4. Actualizar Consola y Status Bar
    detailConsole.innerHTML = `<span class="log-info console-line">> [SYSTEM]: Detail Console Ready.</span><span class="log-warning console-line">> [INFO]: Logic for Data Packet ${packetID} loaded.</span>`;
    logConsole.innerHTML = `<span class="log-info console-line">> [00:00:00] Initializing Transaction Log...</span>`;
    addConsoleLine(`> [${new Date().toLocaleTimeString('en-GB')}] Loading Data Packet ${packetID}...`, 'log-info', logConsole);
    document.getElementById('status-bar-3').textContent = `STATUS: File Loaded | DATA PACKET ${packetID} | Data integrity check: OK`;
}


function resetInterface() {
    startButton.textContent = '>> A C T I V A T E <<';
    startButton.disabled = false;
    knowledgeButton.disabled = false;
    startButton.classList.add('glowing'); 
}

startButton.classList.add('glowing');

// Copiar URL de imagen a los otros logos (Solo si tienes una URL real)
const imgSrc = document.getElementById('logo-placeholder').src;
document.getElementById('logo-placeholder-2').src = imgSrc;
document.getElementById('logo-placeholder-3').src = imgSrc;
document.getElementById('logo-placeholder-4').src = imgSrc;