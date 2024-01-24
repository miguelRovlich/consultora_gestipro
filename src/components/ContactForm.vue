<template>
  <div class="bg-image">
    <div class="row justify-content-center align-items-center shadow-lg">
      <div class="col-md-8 col-lg-6 text-center mt-5">
        <h2 class="my-4">¡Escríbenos! Estamos para ayudarte</h2>
        <p class="mb-5 lead">Estamos disponibles para resolver cualquiera de tus dudas. Déjanos un mensaje y a la brevedad hablaremos de tu proyecto.</p>
      </div>
      <div class="col-md-8 col-lg-6 mx-4">
        <div class="card shadow-lg">
          <div class="card-header text-white">
            <h4 class="mt-2 text-center">Estemos en contacto</h4>
          </div>
          <div class="card-body">
            <!-- Transición de mensajes de éxito o error y extensión del formulario -->
            <transition name="fade" mode="out-in">
              <div :key="messageKey">
                <form class="needs-validation" @submit.prevent="handleSubmit" validate>
                  <div class="mb-3">
                    <label for="name" class="form-label">Nombre <strong class="text-danger">*</strong></label>
                    <input type="text" class="form-control" v-model.trim="name" id="name" placeholder="Ej:Katalina Medina" required>
                    <div class="invalid-feedback">Ingrese su nombre por favor</div>
                  </div>
                  <div class="mb-3">
                    <label for="cellPhone" class="form-label">Teléfono <strong class="text-danger">*</strong></label>
                    <div class="input-group">
                      <span class="input-group-text">+569</span>
                      <input type="number" class="form-control" v-model.trim="cellPhone" id="cellPhone" placeholder="49037011" required> 
                    </div>
                    <div class="invalid-feedback">Ingrese un número de teléfono válido por favor</div>
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label">Correo electrónico <strong class="text-danger">*</strong></label>
                    <input type="email" class="form-control" v-model.trim="email" id="email" placeholder="Ej:Contacto@gestipro.cl" required>
                    <div class="invalid-feedback">Ingrese un correo electrónico válido por favor</div>
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label">Mensaje <strong class="text-danger">*</strong></label>
                    <textarea class="form-control" v-model.trim="message" id="message" rows="5" placeholder="Deseo mejorar mi gestión de RRHH" required></textarea>
                    <div class="invalid-feedback">Ingrese un mensaje por favor</div>
                  </div>
                  <div class="d-grid">
                    <button type="submit" class="btn btn-primary rounded-pill btn-lg mt-3">Enviar <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-send" viewBox="0 0 26 26">
                      <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                    </svg></button>
                  </div>
                </form>
              </div>
            </transition>
            <!-- Transición de mensajes de éxito o error -->
            <transition name="fade" mode="out-in">
              <div v-if="showSuccessMessage" class="alert alert-success mt-3" key="success">
                Formulario enviado exitosamente.
              </div>
              <div v-else-if="showErrorMessage" class="alert alert-warning mt-3" key="error">
                Hubo un error al enviar el formulario. Por favor, verifica los campos.
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-label {
  font-weight: 600;
}

.card-header {
  background-color: #4c9e9e;
  color: white;
  font-weight: bold;
  font-size: 24px;

}

.form-control:focus {
  border-color: #4c9e9e;
  box-shadow: none;
}

.btn-primary {
  background-color: #4c9e9e;
  border-color: #4c9e9e;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #0062cc;
  border-color: #005cbf;
  transition: background-color 0.3s ease, border-color 0.3s ease;

}
.card {
  margin-top: 32px;
  margin-bottom: 32px;
}

textarea.form-control {
  resize: none;
}

.bg-image {
  background: url("../assets/ux-788002_1280.jpg") no-repeat center center/cover;

}
.lead{
  font-weight: bold;
  color: #4c9e9e;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<script setup>
import { ref, computed } from 'vue';

// Datos del formulario y variables de estado
const name = ref('');
const cellPhone = ref('');
const email = ref('');
const message = ref('');
const showSuccessMessage = ref(false);
const showErrorMessage = ref(false);
const messageKey = ref(0);

// Función para manejar el envío del formulario
const handleSubmit = async () => {
  const formData = new FormData();
  formData.append('name', name.value);
  formData.append('cellPhone', cellPhone.value);
  formData.append('email', email.value);
  formData.append('message', message.value);

  try {
    // este endpoint deberia ser privado pero para este proyecto no es necesario
    // TODO: cambiar el endpoint y generar archivo dotenv
    const response = await fetch('https://formspree.io/f/mqkvvvyp', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
      },
    });

    if (response.ok) {
      showSuccessMessage.value = true;
      showErrorMessage.value = false;
    } else {
      showSuccessMessage.value = false;
      showErrorMessage.value = true;
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
    showSuccessMessage.value = false;
    showErrorMessage.value = true;
  }

  // Cambiar la clave para reiniciar las transiciones después de 5 segundos
  setTimeout(() => {
    showSuccessMessage.value = false;
    showErrorMessage.value = false;
    messageKey.value++;
  }, 5000);
};
</script>