<template>
  <div class="center">
    <h1 id="msg">Qual é o seu obejtivo?</h1>

    <div class="container-goals">
      <div class="container-goal">
        <div class="goal"></div>
        <p>Massa muscular</p>
      </div>
      <div class="container-goal">
        <div class="goal"></div>
        <p>Emagrecimento</p>
      </div>
      <div class="container-goal">
        <div class="goal"></div>
        <p>Energia</p>
      </div>
      <div class="container-goal">
        <div class="goal"></div>
        <p>Qualidade de vida</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Goals",
};
</script>

<style scoped>
#msg {
  margin-top: 20px;
}

.container-goals {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.container-goal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
}

.container-goal .goal {
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background: red;
}

.container-goal p {
  margin-top: 8px;
  font-size: 1.2rem;
  font-weight: bolder;
}

</style>
