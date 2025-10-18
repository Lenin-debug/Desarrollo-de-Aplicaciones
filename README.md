<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Desarrollo de Aplicaciones</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Fuente medieval -->
  <link href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&display=swap" rel="stylesheet">

  <style>
    /* Título medieval con fuente y animación */
    .titulo-medieval {
      font-family: 'UnifrakturCook', cursive;
      background: linear-gradient(90deg, #03332df8, #0f8d74, #0c685d, #0f8d74, #03332df8);
      background-size: 300% auto;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: brillo 5s linear infinite;
    }

    /* Fondo con imagen + partículas de destellos suaves */
    body::before {
      content: "";
      position: fixed;
      inset: 0;
      z-index: 0;

      background:
        radial-gradient(circle, rgba(20,184,166,0.15) 1px, transparent 1px),
        url("FONFO.jpg") center/cover no-repeat;

      background-size:
        40px 40px,
        cover;

      animation:
        mover 10s linear infinite,
        brilloFondo 6s ease-in-out infinite alternate;

      filter: brightness(0.6);
    }

    @keyframes mover {
      from { background-position: 0 0, center; }
      to { background-position: 40px 40px, center; }
    }

    @keyframes brilloFondo {
      0% { opacity: 0.3; }
      100% { opacity: 0.6; }
    }

    @keyframes brillo {
      to { background-position: 300% center; }
    }

    .fade-in {
      animation: aparecer 1s ease forwards;
      opacity: 0;
    }

    @keyframes aparecer {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    header {
      background: linear-gradient(90deg, #022523, #022523);
      z-index: 30;
      position: relative;
    }
    footer {
      background: linear-gradient(90deg, #052c28, #043d36);
      z-index: 30;
      border-top: 2px solid #0f8d74;
      box-shadow: 0 -2px 10px rgba(15, 141, 116, 0.4);
    }

    .bloque-parallax {
      position: relative;
      height: 350px;
      background-image: url('imagenes/tecnologia-verde.jpg');
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      border-top: 4px solid #0f8d74;
      border-bottom: 4px solid #0f8d74;
      box-shadow: inset 0 0 50px rgba(0,255,200,0.15), 0 0 30px rgba(0,255,200,0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 40px 0;
      filter: brightness(0.85) contrast(1.1);
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 1.2s ease, transform 1.2s ease;
    }

    .bloque-parallax.visible {
      opacity: 1;
      transform: translateY(0);
    }

    .bloque-parallax h2 {
      font-size: 3rem;
      color: #d9fff8;
      text-shadow: 0 0 15px #0fffcf, 0 0 30px #0f8d74;
      background: rgba(0,0,0,0.5);
      padding: 10px 30px;
      border-radius: 15px;
    }
  </style>
</head>

<body class="bg-black text-gray-100 min-h-screen flex flex-col relative overflow-hidden">

  <!-- ENCABEZADO -->
  <header class="relative text-white py-10 shadow-xl flex items-center justify-center">
 
<!-- Logo a la izquierda -->
<div class="absolute left-6 top-1/2 transform -translate-y-1/2">
  <img src="LOGO.png" alt="Logo Universidad" class="h-24 w-auto">
</div>

    <!-- Título y nombre al centro -->
    <div class="text-center">
      <h1 class="titulo-medieval text-5xl font-bold drop-shadow-xl hover:scale-105 transition-transform duration-500">
        Desarrollo de Aplicaciones
      </h1>
      <p class="titulo-medieval text-teal-100 text-2xl mt-2 tracking-wide">
        Jeremy Barzola Caso
      </p>
    </div>
  </header>

  <!-- CONTENIDO PRINCIPAL -->
  <main class="flex-1 flex items-center justify-center relative overflow-hidden">
    <div class="relative z-10 text-center fade-in">
      <h2 class="titulo-medieval text-3xl mb-6 text-teal-300 drop-shadow-md">
        Bienvenido a mi portafolio
      </h2>

      <!-- BOTÓN INICIAR -->
      <a href="semanas.html"
         class="bg-teal-600 hover:bg-teal-500 text-white font-bold px-8 py-4 rounded-2xl shadow-lg 
                hover:shadow-teal-400/50 hover:scale-110 transition-all duration-500 text-xl">
        👾 Iniciar
      </a>
    </div>
  </main>

<!-- PIE DE PÁGINA -->
<footer class="w-full bg-gradient-to-r from-teal-800 to-teal-900 text-center text-teal-200 py-8 mt-auto">
  <p class="text-sm">&copy; 2025 - Portafolio de Desarrollo de Aplicaciones</p>
  <p class="mt-1">Universidad Peruana Los Andes</p>  
</footer>

</body>
</html>
