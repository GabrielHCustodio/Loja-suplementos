<template>
  <div>
    <Header />
    <h1>PRODUTOS</h1>
    <p>
      Está pagina mostrará nossos produtos e se preciso trará informações mais
      precisas(como usar, descrição e relacionados)
    </p>

    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import Header from "@/components/componentsCommon/Header.vue"
export default {
  name: "Products",
  components: {
    Header
  },
};
</script>
