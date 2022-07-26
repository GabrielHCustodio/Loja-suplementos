<template>
  <div class="center">
    <h1 id="msg">Qual é o seu obejtivo?</h1>

    <div class="container-goals">
      <div class="container-goal">
        <div class="goal muscle-mass"></div>
        <p>Massa muscular</p>
      </div>
      <div class="container-goal">
        <div class="goal slimming"></div>
        <p>Emagrecimento</p>
      </div>
      <div class="container-goal">
        <div class="goal energy"></div>
        <p>Energia</p>
      </div>
      <div class="container-goal">
        <div class="goal quality-of-life"></div>
        <p>Qualidade de vida</p>
      </div>
    </div>
  </div>
  <hr>
</template>

<script>
export default {
  name: "Goals",
};
</script>

<style scoped>
#msg {
  margin-top: 20px;
  font-weight: bolder;
  font-size: 2.1rem;
  text-align: center;
}

.container-goals {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
}

.container-goal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 15px;
}

.container-goal .goal {
  width: 180px;
  height: 180px;
  border-radius: 50%;
}

.container-goal .muscle-mass {
  background-image: url('@/assets/bg-goals/muscle-mass.jpg');
  
}

.container-goal .slimming {
  background-image: url('@/assets/bg-goals/slimming.jpg');
}

.container-goal .energy {
  background-image: url('@/assets/bg-goals/energy.webp.crdownload');
}

.container-goal .quality-of-life {
  background-image: url('@/assets/bg-goals/quality-of-life.jpeg');
}

.container-goal .muscle-mass,
.container-goal .slimming,
.container-goal .energy,
.container-goal .quality-of-life {
  background-size: cover;
  background-position: center;
  transition: all 0.2s;
  max-width: 100%;
}

.container-goal .muscle-mass:hover ,
.container-goal .slimming:hover ,
.container-goal .energy:hover ,
.container-goal .quality-of-life:hover {
  transform: scale(1.1);
  cursor: pointer;
}

.container-goal p {
  margin-top: 10px;
  font-size: 1.3rem;
  font-weight: bolder;
}

hr {
  margin-top: 20px;
  background-color: #ccc;
  width: 100%;
}
</style>
