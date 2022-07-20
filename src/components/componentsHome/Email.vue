<template>
    <div class="center">
        <div class="container-email">
            <div id="msg">
                <p>Cadastre seu e-mail e receba promoções e novidades exclusivas da GH Suplementos</p>
            </div>
            <div id="input">
                <input type="email" id="email">
                <button id="button">Enviar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Email'
}
</script>

<style scoped>
.container-email {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 100vw;
    min-height: 100px;
    height: 100%;
    background-color: #d20a0a;
}

#msg {
    width: 400px;
    font-size: 1.4rem;
    color: #f9f9f9;
    padding: 20px;
}

#input {
    max-width: 510px;
    width: 100%;
    background: #f9f9f9;
    height: 50px;
    border: none;
    border-radius: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
}

#input #email {
    max-width: 400px;
    width: 100%;
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
    margin-right: 5px;
}

#input #button:hover {
    opacity: 0.8;
}

@media screen and (max-width: 780px) {
    .container-email {
        flex-direction: column;
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    #msg {
        width: 100%;
        text-align: center;
    }
}
</style>