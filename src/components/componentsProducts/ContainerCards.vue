<template>
    <div class="container">
        <div class="container-cards">
            <div class="cards" v-for="p in products" :key="p.id">
                <div id="container-img">
                    <img id="image" :src="require(`@/assets/image-products/${p.image}`)" alt="">
                </div>
                <div class="container-data">
                    <h3 id="container-name">{{p.name}}</h3>
                    <ul id="container-items" v-for="d in p.description" :key="d">
                        <li id="item">{{d}}</li>
                    </ul>
                    <h3 id="container-value">R$ {{p.value}}</h3>
                    <button id="buy">Comprar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex"

export default {
    name: "ContainerCards",
    computed: {
        ...mapState(['products'])
    }
}
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: #fff;
}

.container-cards {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content:space-around;
    padding: 30px;
}

.cards {
    width: 340px;
    height: 530px;
    margin-bottom: 30px;
    border: 1px solid #9C9AA0;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.cards #container-img {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.cards #container-img #image {
    max-width: 201px;
    max-height: 250px;
}

.cards .container-data {
    width: 80%;
    height: 50%;
    display: flex;
    flex-direction: column;
}

.cards .container-data #container-name {
    width: 100%;
    text-transform: uppercase;
    font-weight: bolder;
    margin: 20px 0;
    font-size: 1.4rem;
    height: 10%;
}

.cards .container-data #container-items {
    height: 10%;
    display: flex;
    align-items: flex-start;
    list-style-type: none;
    font-size: 1.05rem;
}

.cards .container-data #container-items #item {
    color: #646169;
}

.cards .container-data #container-value {
    margin-top: 20px;
    font-size: 1.5rem;
    font-weight: bolder;
    color: #2AB523;
}

.cards .container-data #buy {
    height: 40px;
    margin-top: 20px;
    font-size: 1.1rem;
    text-transform: uppercase;
    background-color: #2AB523;
    color: #fff;
    border: none;
    border-radius: 2rem;
    opacity: .7;
    transition: .3s;
}

.cards .container-data #buy:hover {
    opacity: 1;
    cursor: pointer;
}
</style>