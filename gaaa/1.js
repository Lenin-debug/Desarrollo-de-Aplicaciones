// Archivo: script.js 

// =======================================================================
// ** APARTADO 1: MAPA DE CONFIGURACIÓN DE 16 PDFS **
// 
// ¡IMPORTANTE! Cambia 'nombre_del_archivo_que_subiste.pdf'
// por el nombre exacto de tus archivos que están en la carpeta.
// =======================================================================
const PDF_MAP = {
    // ID (Botón) : [  'nombre_del_archivo_que_subiste.pdf',   'nombre_sugerido_para_descarga.pdf' ]
    '01': ['reporte_01.pdf', 'Data_Packet_01_Descuento.pdf'],
    '02': ['analisis_02.pdf', 'Data_Packet_02_Inventario.pdf'],
    '03': ['informe_03.pdf', 'Data_Packet_03_Ciberseguridad.pdf'],
    '04': ['log_04.pdf', 'Data_Packet_04_Logistica.pdf'],
    '05': ['manual_05.pdf', 'Data_Packet_05_Manual.pdf'],
    '06': ['doc_06.pdf', 'Data_Packet_06_Estadisticas.pdf'],
    '07': ['archivo_07.pdf', 'Data_Packet_07_Protocolo_Alpha.pdf'],
    '08': ['documento_08.pdf', 'Data_Packet_08_Protocolo_Beta.pdf'],
    '09': ['data_09.pdf', 'Data_Packet_09_Servidor_A.pdf'],
    '10': ['data_10.pdf', 'Data_Packet_10_Servidor_B.pdf'],
    '11': ['data_11.pdf', 'Data_Packet_11_Servidor_C.pdf'],
    '12': ['data_12.pdf', 'Data_Packet_12_Servidor_D.pdf'],
    '13': ['backup_13.pdf', 'Data_Packet_13_Backup_A.pdf'],
    '14': ['backup_14.pdf', 'Data_Packet_14_Backup_B.pdf'],
    '15': ['archivo_15.pdf', 'Data_Packet_15_Recursos_H.pdf'],
    '16': ['archivo_16.pdf', 'Data_Packet_16_Recursos_I.pdf'],
    // Valor por defecto en caso de error
    'default': ['error_file.pdf', 'Error_Missing_File.pdf'] 
};
// =======================================================================


// 1. Get DOM elements (Líneas 30 a 44)
const screen1 = document.getElementById('screen-1');
const screen2 = document.getElementById('screen-2');
const screen3 = document.getElementById('screen-3'); 
const startButton = document.getElementById('startButton');
const consoleOutput = document.getElementById('console-output'); 
const buttonGrid = document.getElementById('button-grid');
const backToScreen1Button = document.getElementById('backToScreen1Button');
const backToScreen2Button = document.getElementById('backToScreen2Button'); 
const downloadDataButton = document.getElementById('downloadDataButton'); 

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

// 3. Logic for Transition to Screen 2 (16 Buttons)
startButton.addEventListener('click', async (event) => {
    event.preventDefault();
    consoleOutput.innerHTML = `<span class="log-info console-line">> Activation command received...</span>`;
    startButton.classList.remove('glowing');
    startButton.disabled = true;
    startButton.textContent = '... P R O C E S S I N G - L O A D ...';
    
    await typeConsoleLine(`> Executing PROTOCOL: GAMMA-7...`, 'log-info', 50);
    await new Promise(r => setTimeout(r, 1000)); 
    await typeConsoleLine("> ACCESS GRANTED. Loading Protocol Selection Interface.", 'log-success', 30);

    setTimeout(() => {
        generateButtons();
        screen1.style.display = 'none';
        screen2.style.display = 'block';
        screen3.style.display = 'none'; 
        resetInterface();
    }, 1500);
});

// 4. Logic for Back Buttons (Navigation)
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

// 5. Function to Generate the 16 Buttons
function generateButtons() {
    buttonGrid.innerHTML = ''; 
    for (let i = 1; i <= 16; i++) {
        const selectButton = document.createElement('button');
        selectButton.className = 'grid-button';
        selectButton.textContent = `D E S T I N Y\n${String(i).padStart(2, '0')}`;
        
        selectButton.addEventListener('click', () => {
            handleButtonClick(i);
        });
        
        buttonGrid.appendChild(selectButton);
    }
}

// 6. Handle Button Click (Transition to Screen 3)
function handleButtonClick(id) {
    screen2.style.display = 'none';
    screen3.style.display = 'block';
    
    // Limpiar y resetear los recuadros de la Pantalla 3
    detailConsole.innerHTML = `<span class="log-info console-line">> [SYSTEM]: Detail Console Ready.</span><span class="log-warning console-line">> [INFO]: Logic for Data Packet ${String(id).padStart(2, '0')} loaded.</span>`;
    logConsole.innerHTML = `<span class="log-info console-line">> [00:00:00] Initializing Transaction Log...</span>`;
    addConsoleLine(`> [${new Date().toLocaleTimeString('en-GB')}] Loading Data Packet ${String(id).padStart(2, '0')}...`, 'log-info', logConsole);

    document.getElementById('status-bar-3').textContent = `STATUS: File Loaded | DATA PACKET ${String(id).padStart(2, '0')} | Data integrity check: OK`;
}


// =======================================================================
// ** APARTADO 2: FUNCIÓN DE DESCARGA CON LOS 16 PDFs **
// =======================================================================
downloadDataButton.addEventListener('click', () => {
    // 1. Obtener el ID del Data Packet actualmente cargado (ej. '05')
    const statusText = document.getElementById('status-bar-3').textContent;
    const match = statusText.match(/DATA PACKET (\d+)/);
    
    // Usar 'default' si no se encuentra el ID por alguna razón
    const packetID = match ? match[1] : 'default'; 
    
    // 2. Obtener la configuración de PDF de nuestro MAPA (PDF_MAP)
    const config = PDF_MAP[packetID] || PDF_MAP['default'];
    const PDF_URL = config[0]; 
    const DOWNLOAD_FILE_NAME = config[1];

    addConsoleLine(`> [${new Date().toLocaleTimeString('en-GB')}] Command: DOWNLOAD issued for file: ${DOWNLOAD_FILE_NAME}.`, 'log-info', logConsole);
    
    // 3. Crear y ejecutar el enlace de descarga
    const a = document.createElement('a');
    a.href = PDF_URL; 
    a.download = DOWNLOAD_FILE_NAME; 
    
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    
    addConsoleLine(`> [${new Date().toLocaleTimeString('en-GB')}] File transfer finished. Status: SUCCESS. File: ${DOWNLOAD_FILE_NAME}`, 'log-success', logConsole);
    alert(`DESCARGA INICIADA: Se ha solicitado el archivo:\n\n${DOWNLOAD_FILE_NAME}`);
});
// =======================================================================


function resetInterface() {
    startButton.textContent = '>> A C T I V A T E <<';
    startButton.disabled = false;
    startButton.classList.add('glowing'); 
}

startButton.classList.add('glowing');

// Copiar URL de imagen a los otros logos (Solo si tienes una URL real)
const imgSrc = document.getElementById('logo-placeholder').src;
document.getElementById('logo-placeholder-2').src = imgSrc;
document.getElementById('logo-placeholder-3').src = imgSrc;