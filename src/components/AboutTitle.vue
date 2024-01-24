<template>
    <div class="hero">
      <div class="hero-content">
        <h2 class="">¡Conócenos!</h2>
        <p>Gran experiencia y cobertura a nivel nacional</p>
      </div>
    </div>
  </template>
  <script>
  export default {
  
  }
  </script>
  <style lang="scss" scoped>
  .hero {
    height: 100vh;
    background: url("../assets/podcast-g20a836087_1280.png") no-repeat center center/cover;
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
    margin-bottom: 1rem;
  }
  
  .hero-content p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  </style>