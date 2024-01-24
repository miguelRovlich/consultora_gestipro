<template>
  <section class="main">
    <div class="container-fluid custom-container">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-10 col-lg-8">
          <div class="text-center">
            <h1 class="mb-4">Transformación digital en tus procesos de RRHH</h1>
            <p class="lead mb-4">Contáctanos y te ayudaremos con una solución que se ajuste a tu empresa</p>
            <button class="btn btn-primary rounded-5" @click="redirigirWhatsApp"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg> Quiero que me asesoren</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
const redirigirWhatsApp = () => {
  const telefono = '56971268080'; // Número de teléfono al que se enviará el mensaje
  const url = `https://api.whatsapp.com/send?phone=${telefono}`;

  window.location.href = url; // Redirige al enlace de WhatsApp
};
</script>
<style lang="scss" scoped>
  /* Definir variables para los colores */
  $primary-color: #4c9e9e;
  $secondary-color: #109a7e;
  $gradient-start: #f6f6f6;
  $gradient-end: #96C5CB;

  /* Usar el gradiente de fondo en toda la página */
  section{
    background: url("../assets/virtual-coworkers-g8ebe1670d_1280.jpg") no-repeat center right/cover;

  }

  /* Estilos para el contenedor */
  .custom-container {
    padding: 80px 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Estilos para el título */
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #16a085;
    margin-bottom: 20px;
  }

  /* Estilos para el texto secundario */
  p {
    font-size: 25px;
    font-weight: 650;
    color: $gradient-start;
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 22px;
  }

  /* Estilos para el botón */
  .btn-primary {
    background-color: $primary-color;
    border-color: $primary-color;
    transition: all 0.3s ease;
    padding: 16px 24px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 50px;
  }

  /* Estilos para el botón al pasar el mouse */
  .btn-primary:hover {
    background-color: $secondary-color;
    border-color: $secondary-color;
  }

</style>