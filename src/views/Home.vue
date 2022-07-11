<template>
  <div>
    <Header />
    <Cards />
    <router-link to="/products">Conheça nossos produtos</router-link>
  </div>
</template>

<script>
import Cards from "@/components/componentsHome/Cards.vue";
import Header from "@/components/componentsHome/Header.vue";

export default {
  name: "Home",
  components: {
    Cards,
    Header,
  },
};
</script>
