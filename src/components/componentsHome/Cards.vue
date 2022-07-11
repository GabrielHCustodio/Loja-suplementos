<template>
  <div class="center">
    <h1 id="msg">Temos o suplemento certo pra seu esporte:</h1>

    <div class="cards">
      <div class="container-card">
        <div class="card-bg muscle">
          <p class="name-act">MUSCULAÇÃO</p>
        </div>
      </div>

      <div class="container-card">
        <div class="card-bg fight">
          <p class="name-act">LUTAS</p>
        </div>
      </div>

      <div class="container-card">
        <div class="card-bg race">
          <p class="name-act">CORRIDA</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>

<style scoped>
.center {
  width: 100%;
  height: 100%;
}

.center #msg {
  margin-top: 155px;
  font-weight: bolder;
  font-size: 2.1rem;
}

.center .cards {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  height: 412px;
  margin-top: 30px;
}

.center .cards .container-card {
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
  max-width: 475px;
}

.center .cards .container-card .card-bg {
  height: 100%;
  width: 100%;
  cursor: pointer;
}

.muscle {
  background-image: url("@/assets/bg-card/muscle.jpg");
}

.fight {
  background-image: url("@/assets/bg-card/fight.webp");
}

.race {
  background-image: url("@/assets/bg-card/race.webp");
}

.muscle,
.fight,
.race {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100%;
}

.center .cards .container-card .card-bg .name-act {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 0 20px 20px;
  font-size: 2rem;
  font-weight: bolder;
  color: #f9f9f9;
}

</style>
