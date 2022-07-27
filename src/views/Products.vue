<template>
  <div>
    <header-pg />
    <h1>PRODUTOS</h1>
    <p>
      Está pagina mostrará nossos produtos e se preciso trará informações mais
      precisas(como usar, descrição e relacionados)
    </p>
    
    <hr>
    
     <ul v-for="p in products" :key="p.id">
      <li>{{p}}</li>
     </ul>

    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex"
import HeaderPg from "@/components/componentsCommon/Header.vue"

export default {
  name: "Products",
  data() {
    return {
      products: this.$store.state.products
    }
  },
  components: {
    HeaderPg
  }
};
</script>

<style scoped>

</style>
