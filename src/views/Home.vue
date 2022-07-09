<template>
  <div>
    <Header />
    <h1>HOME</h1>
    <p>Aqui será a landing page que ira mostrar aos clientes oq somos, oq fazemos e porque fazemos</p>
    <router-link to="/products">Conheça nossos produtos</router-link>
  </div>
</template>

<script>
import Header from '@/components/componentsHome/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
