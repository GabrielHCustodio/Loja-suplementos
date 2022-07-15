<template>
    <div class="center">
        <div id="msg">
            <p>Cadastre seu e-mail e receba promoções e novidades exclusivas da GH Suplementos</p>
        </div>
        <div id="input">
            <input type="email" id="email">
            <button id="button">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Email'
}
</script>

<style scoped>
.center {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    margin: 30px 0;
    width: 100%;
    height: 100px;
    background-color: #d20a0a;
}

#msg {
    width: 400px;
    font-size: 1.4rem;
    color: #f9f9f9;
}

#input {
    width: 510px;
    background: #f9f9f9;
    height: 50px;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#input #email {
    width: 400px;
    height: 40px;
    border: none;
    border-radius: 50px;
    background: transparent;
    outline: none;
    padding-left: 20px;
    font-size: 1.1rem;
}

#input #button {
    width: 100px;
    height: 40px;
    border: none;
    border-radius: 50px;
    background: #118411;
    cursor: pointer;
    color: #f9f9f9;
    font-size: 1.1rem;
}

#input #button:hover {
    opacity: 0.8;
}
</style>