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
            </form>
            <router-link id="login" to="/">Entrar</router-link>
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
@import "~@/assets/css/styleForm.css";

.rec {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-top: 30px;
    position: absolute;
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

@media screen and (max-width: 480px) {
    .rec {
        flex-direction: column;
    }

    .rec a {
        margin-bottom: 15px;
    }

    .social {
        margin-top: 130px;
    }

    #login {
        margin-top: 200px;
    }
}
</style>