<template>
    <div class="container">
        <div class="form">
            <form action="">
                <div class="container-input">
                    <label class="label">Nome de usuário</label>
                    <input class="input" type="email">
                </div>
                <div class="container-input">
                    <label class="label">Senha</label>
                    <input class="input" type="password">
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
    name: 'Login'
}
</script>

<style scoped>
.form {
    padding: 20px;
}

.container-input {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.label {
    margin-bottom: 5px;
}

.container-input .input {
    height: 30px;
    border: none;
    border-bottom: 2px solid rgba(249, 249, 249, 0.5);
    background-color: transparent;
    outline: none;
    color: #f9f9f9;
    font-size: 1rem;
    margin-top: -25px;
}

.rec {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
}

.social {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
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
    margin-top: 20px;
    border-radius: 20px;
    background-color: #29a829;
    font-size: 1.2rem;
}

a {
    text-decoration: none;
    color: #f9f9f9;
}
</style>