<template>
    <div class="container-fluid d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6 mx-auto text-center">
            <h1 class="display-2 text-white font-weight-bold my-3">Asesorías Personalizadas</h1>
            <!-- write a cool subtitle -->
            <p class="lead text-white ">Obtén soluciones personalizadas para las necesidades de tu organización. 
             Revisa nuestros servicios disponibles y no dudes en contactarnos.</p>
            <!-- <p class="lead text-white ">En</p> -->
            
            <router-link to="/contact" class="btn btn-outline-light rounded-5 btn-lg py-2 mt-1 px-4 pt-1 w-auto ">Conoce más</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  .container-fluid {
    height: 100vh;
    background-size: cover ;
    background-image: url("../assets/office-ga0616d7c3_1280.jpg");
  }
  h1 {
    font-weight: 400;
    margin-bottom: 40px;
  }
  
  p {
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  </style>