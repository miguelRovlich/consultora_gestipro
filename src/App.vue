<script setup>
import Navbar2 from './components/Navbar2.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <Navbar2/>
  <router-view />
  <Footer />
</template>

<style >

@font-face {
  font-family: 'Berlin Sans FB';
  src: url('/Berlin Sans FB Regular.ttf') format('truetype');
}


@font-face {
  font-family: 'Baloo Bhai 2';
  src: url('/BalooBhai2-VariableFont_wght.ttf') format('truetype');
}


body{
  font-family: 'Baloo Bhai 2','Berlin Sans FB',sans-serif;
}
</style>
