<template>
    <div class="hero">
      <div class="hero-content">
        <h2 class="">Conoce nuestros servicios</h2>
        <p>Servicio ágil, flexible y de calidad</p>
      </div>
    </div>
  </template>
  <script>
  export default {
  
  }
  </script>
  <style lang="scss" scoped>
  .hero {
    height: 80vh;
    background: url("../assets/client-g38d88d820_1280.jpg") no-repeat center center/cover;
  }
  
  .hero-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width: 800px;
    margin: 0 60px;
    text-align: center;
    color: white;
  }
  
  .hero-content h2 {
    font-size: 3rem;
    // font-weight: bold;
  }
  
  .hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  </style>