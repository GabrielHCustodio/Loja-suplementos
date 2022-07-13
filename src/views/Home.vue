<template>
  <div class="center">
    <Header />
    <Cards />
    <Goals />
    <router-link to="/products" id="products">Conheça nossos produtos</router-link>
  </div>
</template>

<script>
import Cards from "@/components/componentsHome/Cards.vue";
import Goals from "@/components/componentsHome/Goals.vue"
import Header from "@/components/componentsCommon/Header.vue"

export default {
  name: "Home",
  components: {
    Cards,
    Goals,
    Header,
  },
};
</script>

<style scoped>
#products {
  width: 400px;
  height: 50px;
  text-align: center;
  padding-top: 6px;
  margin-top: 30px;
  font-size: 2rem;
  text-decoration: none;
  background-color: #0a0a0a;
  color: #d20a0a;
  border: none;
  border-radius: 40px;
}

#products:hover {
  transition: all 0.7s;
  color: #0a0a0a;
  background: #d20a0a;
}
</style>
