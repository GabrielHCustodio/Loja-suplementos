<template>
    <div class="container">
        <div class="form">
            <form action="">
                <div class="container-input" >
                    <label class="label">Nome de usuário</label>
                    <input id="user" class="input" type="text" v-model="nameUser" @focus="checkUser">
                </div>
                <div class="container-input">
                    <label class="label">Senha</label>
                    <input id="pass" class="input" type="password" v-model="password" @focus="checkPass">
                </div>

                <div class="rec">
                    <router-link to="/">Esqueci minha senha</router-link>
                    <router-link to="/">Esqueci meu nome de usuário</router-link>
                </div>

                <div class="social">
                    <p id="par">Se preferir, entre com uma rede social: </p>
                    <img id="google" src="https://img.icons8.com/ios-glyphs/30/000000/google-logo--v1.png"/>
                </div>

                <router-link id="login" to="/">Entrar</router-link>
            </form>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            nameUser: '',
            password: ''
        }
    },
    methods: {
        checkUser() {
            console.log(this.nameUser)
            let user = document.querySelector('#user')
            if(this.nameUser === '') {
                user.classList.add('input-data-info')
            }
        },
        checkPass() {
            let pass = document.querySelector('#pass')
            if(this.password === '') {
                pass.classList.add('input-data-info')
            }
        } 
    }
}
</script>

<style scoped>
.form {
    padding: 20px;
    position: relative;
}

.container-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.label {
    margin-bottom: 5px;
    font-weight: bolder;
}

.container-input .input {
    height: 30px;
    border: none;
    border-bottom: 2px solid rgba(249, 249, 249, 0.5);
    background-color: transparent;
    outline: none;
    color: #f9f9f9;
    font-size: 1rem;
    font-weight: bolder;
    margin-top: -25px;
}

.container-input .input-data-info {
    margin-top: 0px;
    border-bottom: 2px solid rgba(249, 249, 249, 1);
    transition: 1s linear;
}

.rec {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 30px;
    position: absolute;
}

.social {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 80px;
    position: absolute;
}

.social #google {
    margin-left: 8px;
    cursor: pointer;
}

#login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 30px;
    margin-top: 130px;
    border-radius: 20px;
    background-color: #29a829;
    font-size: 1.2rem;
    position: absolute;
}

a {
    text-decoration: none;
    color: #f9f9f9;
}
</style>