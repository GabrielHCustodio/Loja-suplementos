<template>
  <div class="center">
    <h1 id="msg">Temos o suplemento certo pra seu esporte:</h1>

    <div class="cards">
      <div class="container-card">
        <router-link to="/products/muscle">
          <div class="card-bg muscle">
            <p class="name-act">MUSCULAÇÃO</p>
          </div>
        </router-link>
      </div>

      <div class="container-card">
        <router-link to="/products/fight">
          <div class="card-bg fight">
            <p class="name-act">LUTAS</p>
          </div>
        </router-link>
      </div>

      <div class="container-card">
        <router-link to="/products/race">
          <div class="card-bg race">
            <p class="name-act">CORRIDA</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
  <hr />
</template>

<script>
export default {
  name: "Cards",
};
</script>

<style scoped>
.center {
  width: 100%;
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
  flex-wrap: wrap;
  width: 100%;
  margin-top: 30px;
}

.center .cards .container-card {
  width: 27%;
  min-width: 330px;
  overflow: hidden;
  margin: 10px 10px;
  height: 412px;
}

.center .cards .container-card a {
  text-decoration: none;
}

.center .cards .container-card .card-bg {
  height: 100%;
  width: 100%;
}

.center .cards .container-card .muscle {
  background-image: url("@/assets/bg-card/muscle.jpg");
}

.center .cards .container-card .fight {
  background-image: url("@/assets/bg-card/fight.webp");
}

.center .cards .container-card .race {
  background-image: url("@/assets/bg-card/race.webp");
}

.center .cards .container-card .muscle,
.center .cards .container-card .fight,
.center .cards .container-card .race {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  transition: all 0.3s;
}

.center .cards .container-card:hover .muscle,
.center .cards .container-card:hover .fight,
.center .cards .container-card:hover .race {
  transform: scale(1.1);
}

.center .cards .container-card .card-bg .name-act {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0 0 25px 35px;
  font-size: 2rem;
  font-weight: bolder;
  color: #f9f9f9;
}

hr {
  background-color: #ccc;
  width: 100%;
  margin-top: 30px;
}

@media screen and (max-width: 780px) {
  .center #msg {
    margin-top: 190px;
    text-align: center;
    padding: 0 20px;
  }
  
  hr {
    margin-top: 30px;
  }
}

@media screen and (max-width: 525px) {
  .center #msg {
    margin-top: 270px;
    text-align: center;
    padding: 0 20px;
  }
}
</style>
