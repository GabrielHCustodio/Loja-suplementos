<template>
    <div class="container">
        <div class="container-cards">
            <div class="cards" v-for="p in products" :key="p.id">
                <img :src="require(`@/assets/image-products/${p.image}`)" alt="">
                <p>{{p.name}}</p>
                <ul v-for="d in p.description" :key="d">
                    <li>{{d}}</li>
                </ul>
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
    background-color: #ccc;
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
    width: 350px;
    height: 530px;
    background-color: red;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.cards img {
    width: 280px;
    max-height: 350px;
}
</style>