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
    '05': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/tree/343d10c2abbc67e092dd6e6a0f43e25fc208a70c/semana%205',
    '06': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/tree/343d10c2abbc67e092dd6e6a0f43e25fc208a70c/semana%206',
    '07': 'https://github.com/Lenin-debug/Desarrollo-de-Aplicaciones/tree/924c7cb9e5486ce47d4f1a1ba60e2a0edc25fb74/Proyecto%20semana%207/SGA_SistemaAsistencia',
    '08': 'https://github.com/TuUsuario/Protocolo-Beta-08',
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
            <li>Presentamos el login del proyecto propone el desarrollo de un Sistema de Gestión de Notas y Rendimiento Académico, cuyo objetivo es brindar a los estudiantes una herramienta sencilla para consultar todas sus calificaciones por curso y criterio de evaluación. Este sistema les permite visualizar su promedio ponderado actual, entender su situación académica y proyectar su nota final. A su vez, el sistema ofrece a los docentes un módulo de Registro y Edición de Calificaciones, donde pueden ingresar y modificar las notas de cada alumno. Además, el sistema calcula el promedio general del grupo e identifica automáticamente a los alumnos con bajo rendimiento, facilitando el control y la supervisión académica de manera clara y ordenada.</li>
        `
    },
    '06': {
        subtitle: 'semana 06',
        description: ':3',
        listHTML: `
            <li>ENUNCIADO 1</li>
            <li>..</li>
            <li>Les PresentO el proyecto sobre el desarrollo de un Sistema de Registro de Actividades Académicas, cuyo objetivo es brindar a los estudiantes una herramienta sencilla para organizar sus tareas y fechas de entrega, permitiéndoles registrar actividades con su respectiva información y estado. A su vez, el sistema ofrece a los docentes un módulo de seguimiento, donde pueden visualizar el progreso individual de cada alumno y conocer qué actividades fueron entregadas o están pendientes. Además, el sistema calcula un porcentaje de avance por estudiante, facilitando el control y la supervisión académica de manera clara y ordenada.</li>
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
        description: 'Requisitos para la implementación del protocolo Beta. Este protocolo maneja la comunicación con sistemas externos y debe ser a prueba de intercepciones.',
        listHTML: `
            <li>Uso obligatorio de túnel VPN cifrado.</li>
            <li>Autenticación mutua (certificados de cliente y servidor).</li>
            <li>Monitoreo constante del tráfico anómalo por el puerto 443.</li>
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