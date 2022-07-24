<template>
  <div class="center">
    <div class="left">
      <div class="nav">
        <router-link :class="['links', borderLog]" to="/user/login" >Login</router-link> 
        <p>|</p>
        <router-link :class="['links', borderReg]" to="/user/register">Cadastrar</router-link>
      </div>
      <div>
        <router-view />
      </div>
    </div>

    <div class="right"></div>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      path: ''
    }
  },
  created() {this.path = window.location.pathname},
  updated() {
    this.path = window.location.pathname
  },
  computed: {
    borderLog() {
      if(this.path === '/user/login') {
        return 'border-log'
      }
    },
    borderReg() {
      if(this.path === '/user/register') {
        return 'border-reg'
      }
    }
  }
};
</script>

<style scoped>
.center {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
    rgba(255, 165, 165, 1) 0%,
    rgba(254, 77, 77, 1) 50%,
    rgba(255, 0, 0, 1) 100%
  );
  width: 100%;
  height: 100vh;
  flex-direction: row;
  justify-content: flex-end;
}

.center .left {
  width: 55%;
  height: 70%;
  display: flex;
  flex-direction: column;

}

.center .left .nav {
  height: 40px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: white;
  margin-left: 20px;
}

.center .left .nav .links {
  margin-right: 10px;
  padding-bottom: 5px;
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  position: fixed;
}

.center .left .nav .links:last-child {
  margin-left: 90px;
}

.center .left .nav p {
  font-size: 1.4rem;
  margin-left: 70px;
  margin-top: -10px;
}

.border-log {
  border-bottom: 3px solid white;
  animation: animateLog 1s linear;
  font-weight: bolder;
  font-size: 1.6rem;
}

.border-reg {
  border-bottom: 3px solid white;
  animation: animateReg 1s linear;
  font-weight: bolder;
  font-size: 1.6rem;
}

.center .right {
  width: 35%;
  height: 100%;
  background-color: black;
}

.container {
  width: 430px;
  margin-top: 20px;
  color: white;
  font-size: 1.1rem;
}

@keyframes animateLog {
  0% {
    width: 0px;
  }

  100% {
    width: 53px;
  }
}

@keyframes animateReg {
  0% {
    width: 0px;
  }

  100% {
    width: 85px;
  }
}
</style>
