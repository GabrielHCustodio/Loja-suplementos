<template>
  <div>
    <header-pg />
    <h1>PRODUTOS</h1>
    <p>
      Está pagina mostrará nossos produtos e se preciso trará informações mais
      precisas(como usar, descrição e relacionados)
    </p>

    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import HeaderPg from "@/components/componentsCommon/Header.vue"
export default {
  name: "Products",
  components: {
    HeaderPg
  },
};
</script>

<style scoped>

</style>
