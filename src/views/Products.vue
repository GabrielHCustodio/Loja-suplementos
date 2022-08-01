<template>
  <div>
    <header-pg />
    <container-cards />
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
