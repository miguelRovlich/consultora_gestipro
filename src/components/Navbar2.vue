<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-lg">
    <div class="container">
      <router-link class="navbar-brand" to="/">
        <img :src="imagen" alt="Logo de Gestipro" style="max-width: 140px;">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">Conócenos</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/clients" class="nav-link">Clientes</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/services" class="nav-link">Servicios</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link btn btn-primary text-white rounded-5 py-2 mt-1 px-4 pt-1">Contacto</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import imagen from "../assets/GESTIPROLOGO.png";

</script>
<style scoped>

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
  
}
.navbar-nav .nav-link {
  font-size: 15px;
  font-weight: 400;
  margin-left: 4px;
  margin-right: 4px;
}
.navbar-nav .nav-link:hover {
  color: #4c9e9e;
}
.btn{
  background-color: #4c9e9e;
  border-color: #4c9e9e;
}
.navbar-brand{
  color: #4c9e9e;
}
.navbar{
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
}
</style>