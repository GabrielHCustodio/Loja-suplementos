<template>
    <div class="container">
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
                <p>Se preferir, entre com uma rede social: </p>
                <img id="google" src="https://img.icons8.com/ios-glyphs/30/000000/google-logo--v1.png"/>
            </div>

            <router-link to="/">Entrar</router-link>
        </form>
    </div>
    
</template>

<script>
export default {
    name: 'Login'
}
</script>