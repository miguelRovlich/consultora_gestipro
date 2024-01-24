<template>
  <div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button v-for="(image, index) in images" :key="index" type="button" :data-bs-target="'#' + carouselId"
        :data-bs-slide-to="index" :class="{ active: index === activeIndex }" @click="activeIndex = index"></button>
    </div>
    <div class="carousel-inner">
      <div v-for="(image, index) in images" :key="index"
        :class="{ 'carousel-item': true, active: index === activeIndex }">
        <img :src="image.src" class="d-block w-100" :alt="image.title">
        <div class="carousel-caption d-none d-md-block rounded-5">
          <h2 class="pt-4">{{ image.title }}</h2>
          <p class="text-justify pt-3 pb-2 px-5">{{ image.description }}</p>
          <ul v-if="image.list" class="pb-2">
            <li v-for="(item, i) in image.list" :key="i">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" :data-bs-target="'#' + carouselId" data-bs-slide="prev"
      @click="prevSlide">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" :data-bs-target="'#' + carouselId" data-bs-slide="next"
      @click="nextSlide">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

const activeIndex = ref(0);
const carouselId = 'imageCarousel';

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + images.value.length) % images.value.length;
};

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % images.value.length;
};

// Cargar las imágenes al montar el componente
const importImages = async () => {
  const imagePaths = import.meta.globEager('../assets/services/*.jpg');
  const titles = [
    'Capacitaciones',
    'Estadisticas',
    'Gestión de personas',
    'Gestión Pública',
    'Prevención de Riesgos y Salud Ocupacional'
  ];

  for (const path in imagePaths) {
    const imageSrc = imagePaths[path].default;
    const alt = 'Imagen ' + (images.value.length + 1);
    const title = titles[images.value.length] || 'Título por defecto';
    const description = getDescriptionByIndex(images.value.length);
    const list = getListByIndex(images.value.length);
    images.value.push({ src: imageSrc, alt, title, description, list });
    console.log(images.value);
  }
};

const getDescriptionByIndex = (index) => {
  const descriptions = [
    'Ofrecemos un servicio de capacitación integral para empresas y organizaciones que buscan mejorar las habilidades y competencias de su equipo de trabajo. Nos enfocamos en brindar una experiencia de aprendizaje práctica, personalizada y efectiva, que ayude a los participantes a adquirir nuevas habilidades y competencias y aplicarlas en su trabajo diario. Ofrecemos una amplia gama de programas de capacitación diseñados para satisfacer las necesidades específicas de cada organización, incluyendo entrenamiento en liderazgo, comunicación efectiva, trabajo en equipo, habilidades gerenciales, gestión del cambio, entre otros.',
    'Con el apoyo de nuestros especialistas, ayudamos a las empresas a obtener una mejor comprensión de sus datos y a tomar decisiones informadas basadas en ellos. Ofrecemos servicios personalizados de análisis de datos y modelado estadístico para identificar patrones, tendencias y relaciones en sus datos. Nuestro enfoque se centra en trabajar con su equipo para comprender sus necesidades y objetivos, y colaborar en la identificación de oportunidades de mejora en sus procesos de negocio. El objetivo es proporcionar a su empresa una consultoría en estadística personalizada y efectiva que le permita tomar decisiones más informadas y fundamentadas en datos, y así mejorar su rendimiento y competitividad en el mercado. Dentro de los servicios que ofrecemos se pueden encontrar Análisis exploratorio de datos, modelado estadístico, minería de datos, visualización de datos, análisis multivariante, validación de modelos, análisis de tendencias, análisis de datos en tiempo real, entre otras.',
    'De acuerdo a los requerimientos de nuestros clientes confeccionamos e implementamos una asesoría que permita a estas empresas y organizaciones, mejorar su eficacia, eficiencia y adaptabilidad, a través de la identificación de problemas y desafíos en la gestión de sus recursos y procesos y, en el desarrollo de estrategias para subsanar estas dificultades, para ayudar a mejorar su desempeño y alcanzar sus objetivos estratégicos. Con el objetivo de lograr una mejora significativa, se llevará a cabo un trabajo colaborativo con las empresas y organizaciones interesadas, desarrollando diferentes estrategias de acción enfocadas en mejorar la cultura organizacional, incrementar la productividad, reducir costos, fomentar la innovación y la calidad, y mejorar tanto la satisfacción de los empleados como la de los clientes. Dentro de los servicios que ofrecemos se pueden encontrar la creación de reglamentos y procedimientos, análisis y diseño de procesos y estructuras organizacionales, gestión de procesos, estructuración de control interno, análisis de productividad y eficiencia, evaluación del clima organizacional, y, gestión de cambios, entre otras',
    'Proporcionamos servicios profesionales y especializados de asesoramiento y consultoría a organismos e instituciones gubernamentales, ya sea a nivel nacional, regional o local con el fin de mejorar la eficacia y eficiencia de la gestión pública, la calidad de los servicios prestados, la transparencia y la participación ciudadana en los procesos de toma de decisiones. Además apoyamos a instituciones privadas en la creación y mejora de las relaciones con organismos públicos en diversos ámbitos. Trabajamos en colaboración con nuestros clientes para identificar problemas, necesidades y desafíos, para reforzar las herramientas que permitan desarrollar soluciones prácticas y aplicar mejores estrategias de gestión pública. Algunas de los servicios que prestamos son gestión de personas en el sector público, planificación y evaluación de políticas públicas, desarrollo de estrategias de comunicación pública, participación ciudadana, Ley de Compras Públicas, Ley de Transparencia, Ley de Modernización del Estado, Estatuto Administrativo, entre otros.',
    'Nuestro fin es asesorar a nuestros clientes en la identificación, evaluación y gestión de los riesgos laborales que puedan existir en sus operaciones y actividades, con el objetivo de minimizar los accidentes y enfermedades laborales, mejorar las condiciones de trabajo y garantizar la seguridad de los trabajadores. Prestamos asesorías a empresas de diferentes sectores para ayudarles  a cumplir con las normas y regulaciones en materia de seguridad y salud ocupacional. Dentro de nuestros servicios se pueden encontrar levantamiento y evaluación de riesgos laborales asociados a las actividades de la organización, evaluación de aspectos legales básicos, gestión de comité paritario de higiene y seguridad, charlas y confección de formularios, matriz de identificación de peligro y evaluación de riesgos, asesoramiento en selección y uso de elementos de protección personal, asesoría en la implementación del Protocolo de Vigilancia de Riesgos Psicosociales (Metodología CEAL-SM / SUSESO), charlas de autocuidado, bienestar emocional, primeros auxilios psicológicos (PAP), higiene del sueño, calidad de vida, retorno al trabajo, seguridad basada en el comportamiento, y apoyo en la implementación de prescripciones emitidas por las instituciones fiscalizadoras en materia de seguridad (SUSESO-SEREMI-MINSAL-DT), entre otras.',
    // Agrega aquí las descripciones para las imágenes restantes
  ];
  return descriptions[index] || 'Descripción por defecto';
};

const getListByIndex = (index) => {
  const lists = [
    [
    ],
    [
      'Análisis exploratorio de datos',
      'Modelado estadístico',
      'Minería de datos',
      'Visualización de datos',
      'Análisis multivariante',
      'Validación de modelos',
      'Asesoramiento en selección y uso de elementos de protección personal',
      'Análisis de datos en tiempo real',
      'Predicción y análisis predictivo',
      'Análisis de tendencias',
      'Análisis de datos en línea',
    ],
    [
    ],
    [
    ],
    [
    ],
    [
    ],
    // Agrega aquí las listas de puntos para las imágenes restantes
  ];
  return lists[index] || null;
};

// Cargar las imágenes al montar el componente
onMounted(importImages);
</script>

<style scoped>
/* Estilos personalizados */
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
}

li {
  list-style: none;
}

.carousel-item img {
  width: 600px;
  /* Tamaño deseado, ajusta según tus necesidades */
  height: 800px;
  /* Tamaño deseado, ajusta según tus necesidades */
  object-fit: cover;
  /* Para asegurarse de que la imagen se ajuste sin distorsión */
}
</style>
