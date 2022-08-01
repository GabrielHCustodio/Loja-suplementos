<template>
    <div class="center">
        <h1 id="title">Gerenciar pedidos</h1>
        <div id="products-table-heading">
            <div class="order-id">#:</div>
            <div>Produto:</div>
            <div>Quantidade:</div>
            <div>Valor:</div>
            <div>Valor final:</div>
        </div>
        <div id="products-table-rows">
            <div class="products-table-row">
                <div class="order-number">1</div>
                <div>Whey</div>
                <div>
                    <input class="quantity" type="number" v-model="inputValue" @change="calculateValue">
                </div>
                <div>R$ {{productValue}}</div>
                <div>R$ {{finalValue}}</div>
            </div>
        </div>
        <div id="products-table-rows">
            <div class="products-table-row">
                <div class="order-number">1</div>
                <div>Whey</div>
                <div>
                    <input class="quantity" type="number" v-model="inputValue" @change="calculateValue">
                </div>
                <div>R$ {{productValue}}</div>
                <div>R$ {{finalValue}}</div>
            </div>
        </div>

        <router-link id="more-products" to="/products">Adicionar mais produtos ?</router-link>

        <div id="finalize-request">
            <button id="finalized">Finalizar pedido</button>
            <h2>Valor Total = R${{totalValue}}</h2>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Shopping',
    data() {
        return {
            inputValue: '',
            productValue: '98.90',
            finalValue: '',
            totalValue: ''
        }
    },
    methods: {
        calculateValue() {
            if(this.inputValue === 1) {
                this.finalValue = this.productValue
            }else if (this.inputValue > 1 && this.inputValue <= 10) {
                this.finalValue = (this.inputValue * this.productValue).toFixed(2)  
            }else {
                this.inputValue = 10
            }

            this.totalityValue()
        },
        totalityValue()  {
            // Metodo de somar valor final dos produtos
        }
    },
}
</script>

<style scoped>
#title {
    width: 100%;
    text-align: center;
    font-size: 2.5rem;
    background-color: #d20a0a;
    color: #fff;
    padding: 1.2rem;
}

#products-table-rows {
    max-width: 900px;
    width: 100%;
}

#products-table-heading,
.products-table-row,
#finalize-request {
    max-width: 900px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

#products-table-heading {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 3rem 0 1rem 0;
    border-bottom: 3px solid #333;
}

.products-table-row {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    padding: 1.3rem 0 1rem 0;
    border-bottom: 1px solid #CCC;
}

#products-table-heading .order-id,
.products-table-row .order-number{
    width: 8%;
}

#products-table-heading div,
.products-table-row div {
    width: 23%;
}

.products-table-row .quantity {
    width: 2.5rem;
    height: 2rem;
    border: 2px solid #333;
    border-radius: 50%;
    outline: none;
    padding-left: 0.4rem;
    font-size: 0.8rem;
}

#more-products {
    padding-top: 2rem;
    text-decoration: none;
    font-size: 1.5rem;
    color: #918b8b;
    transition: .4s;
}

#more-products:hover {
    color: #474242;
    cursor: pointer;
}

#finalize-request {
    justify-content: space-around;
    align-items: center;
    width: 70%;
    padding-top: 3rem;
}

#finalize-request #finalized {
    width: 9rem;
    height: 2.5rem;
    font-size: 1.1rem;
    border-radius: 1rem;
    border: none;
    background-color: #2AB523;
    color: #fff;
    opacity: .7;
    transition: .5s;
}

#finalize-request #finalized:hover {
    opacity: 1;
    cursor: pointer;
}
</style>