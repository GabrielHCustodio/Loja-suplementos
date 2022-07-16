<template>
    <div class="center">
        <div class="central-de-atendimento">
            <h3>Central de atendimento</h3>
            <ul id="items">
                <li class="item">Sobre a GH Suplementos</li>
                <li class="item">Fale Conosco</li>
                <li class="item">Blog</li>
                <li class="item">Segurança e Privacidade</li>
                <li class="item">Formas de Pagamento</li>
                <li class="item">Política de Troca e Devolução</li>
                <li class="item">Envio de encomenda</li>
                <li class="item">Política de Entrega</li>
                <li class="item">Política de Privacidade</li>
            </ul>
        </div>

        <div class="right">
            <div class="sac">
                <div class="container-info">
                    <div class="img">
                        <img src="https://img.icons8.com/ios-filled/30/000000/ringer-volume.png"/>
                    </div>
                    <div class="info">
                        <p>Telefone para contato :<br> <b>0800 000 0000</b></p>
                    </div>
                </div>

                <div class="container-info">
                    <div class="img">
                        <img src="https://img.icons8.com/ios-glyphs/30/000000/secured-letter--v1.png"/>
                    </div>
                    <div class="info">
                        <p>E-mail : <br> <b>sac_ghsuplementos@ghsuplementos.com</b></p>
                    </div>
                </div>
            </div>

            <div class="social">
                <p>Siga nossas redes sociais</p>
                <img class="links" src="https://img.icons8.com/fluency/40/000000/facebook-new.png"/>
                <img class="links" src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/>
                <img class="links" src="https://img.icons8.com/color/40/000000/twitter--v1.png"/>
                <img class="links" src="https://img.icons8.com/color/40/000000/youtube-play.png"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FooterPg"
}
</script>

<style scoped>
.center {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 10px;
}

.center .central-de-atendimento {
    width: 45%;
    margin-left: 0;
}

.center .central-de-atendimento h3 {
    font-size: 1.5rem;
}

.center .central-de-atendimento #items {
    margin-top: 8px;
}

.center .central-de-atendimento #items .item {
    margin-top: 5px;
    font-size: 1.2rem;
    list-style: none;
    cursor: pointer;
}

.right .sac{
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: 1px solid #0a0a0a;
    padding: 10px;
}

.right .sac .container-info {
    display: flex;
    flex-direction: row;
}

.right .sac .container-info:nth-child(1) {
    margin-bottom: 10px;
}

.right .sac .container-info img {
    margin-right: 10px;
}

.right .sac .container-info .info {
    font-size: 1.1rem;
}

.right .social {
     margin-top: 20px;
     border: 1px solid #0a0a0a;
     padding: 10px;
}

.right .social p {
    font-size: 1.15rem;
    margin-bottom: 10px;
    font-weight: bolder;
}

.right .social .links {
    margin-right: 10px;
    cursor: pointer;
}
</style>