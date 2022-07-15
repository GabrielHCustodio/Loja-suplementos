<template>
  <div class="center">
    <div class="fixed">
      <header-pg />
    </div>
    <cards style="z-index: 1"/>
    <goals />
    <router-link to="/products" id="products">Conheça nossos produtos</router-link>
    <email />
    <footer-pg />
  </div>
</template>

<script>
import Cards from "@/components/componentsHome/Cards.vue";
import Email from "@/components/componentsHome/Email.vue"
import FooterPg from "@/components/componentsHome/Footer.vue"
import Goals from "@/components/componentsHome/Goals.vue"
import HeaderPg from "@/components/componentsCommon/Header.vue"

export default {
  name: "Home",
  components: {
    Cards,
    Email,
    FooterPg,
    Goals,
    HeaderPg,
  },
};
</script>

<style scoped>
.fixed {
  position: fixed;
  width: 100%;
  z-index: 2
}

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
