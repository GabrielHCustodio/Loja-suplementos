<template>
  <div class="container">
    <div class="form">
      <form action="">
        <div class="container-input" >
          <label class="label">Nome completo</label>
          <input id="name" class="input" type="text" v-model="name" @focus="checkName">
        </div>
        <div class="container-input" >
          <label class="label">Nome de usuário</label>
          <input id="user" class="input" type="text" v-model="nameUser" @focus="checkUser">
        </div>
        <div class="container-input" >
          <label class="label">Email</label>
          <input id="email" class="input" type="email" v-model="email" @focus="checkEmail">
        </div>
        <div class="container-input" >
          <label class="label">Senha</label>
          <input id="pass" class="input" type="password" v-model="password" @focus="checkPass">
        </div>
        <div class="container-input check">
          <input id="checkbox" type="checkbox">
          <label class="label">Concordo com os <b>Termos de Uso</b></label>
        </div>
        <div class="social">
          <p id="par">Se preferir, entre com uma rede social: </p>
          <img id="google" src="https://img.icons8.com/ios-glyphs/30/000000/google-logo--v1.png"/>
        </div>
      </form>
      <button id="register">Cadastrar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      name: '',
      nameUser: '',
      email: '',
      password: '',
    }
  },
  methods: {
    checkName() {
      let name = document.querySelector('#name')
      if(this.name === '') {
        name.classList.add('input-data-info')
      }
    },
    checkUser() {
      let user = document.querySelector('#user')
      if(this.nameUser === '') {
        user.classList.add('input-data-info')
      }
    },
    checkEmail() {
      let email = document.querySelector('#email')
      if(this.email === '') {
        email.classList.add('input-data-info')
      }
    },
    checkPass() {
      let pass = document.querySelector('#pass')
      if(this.password === '') {
        pass.classList.add('input-data-info')
      }
    }
  }
};
</script>

<style scoped>
@import "~@/assets/css/styleForm.css";

.social {
  margin-top: 0px;
}

.check {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
}

.check .label {
  margin-left: 10px;
  font-weight: normal;
}

#register {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    margin-top: 50px;
    border: 1px solid #f9f9f9;
    border-radius: 20px;
    color: #f9f9f9;
    background-color: transparent;
    font-size: 1.2rem;
    position: absolute;
    cursor: pointer;
}
</style>