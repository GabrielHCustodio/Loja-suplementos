<template>
    <div class="center">
        <router-link to="/login">Login</router-link>
        <router-link to="/sign">Cadastro</router-link>
    </div>
</template>

<script>
export default {
    name: 'User'
}
</script>

<style scoped>
.center {
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,165,165,1) 33%, rgba(254,77,77,1) 66%, rgba(255,0,0,1) 100%);
    width: 100%;
    height: 100vh;
}
</style>