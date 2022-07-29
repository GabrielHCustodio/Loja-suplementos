<template>
  <div>
    <header-pg />
    <container-cards />
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import ContainerCards from "@/components/componentsProducts/ContainerCards.vue"
import HeaderPg from "@/components/componentsCommon/Header.vue"

export default {
  name: "Products",
  components: {
    ContainerCards,
    HeaderPg
  }
}
</script>
