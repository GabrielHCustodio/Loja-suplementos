<template>
    <div class="container-msg">
      <h4 class="msg">Somos referência em <b>NUTRIÇÃO ESPORTIVA</b></h4>
    </div>

    <div class="container">
      <div class="container-logo">
        <h1>GH Suplementos</h1>
      </div>

      <div class="container-icons">
        <div class="icon-user">
          <router-link to="/user" class="link">
            <img src="@/assets/icons/icon-user.png" alt="icon-user" id="user" />
            <p id="msg-user">Bem-vindo, faça seu login</p>
          </router-link>
        </div>
        <div class="icon-talk">
          <router-link to="/talk" class="link">
            <img src="@/assets/icons/icon-talk.png" alt="icon-talk" id="talk" />
            <p id="msg-talk">Fale Conosco, clique aqui</p>
          </router-link>
        </div>
        <div class="icon-shopping">
          <router-link to="/shopping" class="link">
            <img src="@/assets/icons/icon-shopping.svg" alt="icon-shopping" id="shopping" />
            <p id="msg-shopping">Meu carrinho</p>
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "HeaderPg",
};
</script>

<style scoped>
.container-msg {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: #0a0a0a;
}

.container-msg .msg {
  color: #f9f9f9;
}

.container-msg .msg b {
  color: #d20a0a;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #981010;
  height: 90px;
  width: 100%;
}
.container .container-logo {
  width: 50%;
}

.container .container-logo h1 {
  color: #f9f9f9;
  padding-left: 100px;
}

.container .container-icons {
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 50%;
  justify-content: space-evenly;
}

.container .container-icons .link {
  text-decoration: none;
  width: 100%;
  display: flex;
  align-items: center;
}

.container .container-icons .icon-user #user,
.container .container-icons .icon-talk #talk,
.container .container-icons .icon-shopping #shopping {
  width: 26px;
  height: 26px;
}

.container .container-icons .icon-user #msg-user,
.container .container-icons .icon-talk #msg-talk,
.container .container-icons .icon-shopping #msg-shopping {
  width: 100px;
  color: #f9f9f9;
  margin-left: 10px;
}
</style>
