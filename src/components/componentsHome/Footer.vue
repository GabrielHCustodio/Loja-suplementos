<template>
  <div class="center">
    <div class="left">
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
    </div>

    <div class="right">
      <div class="sac">
        <div class="container-info">
          <div class="img">
            <img src="https://img.icons8.com/ios-filled/30/000000/ringer-volume.png" />
          </div>
          <div class="info">
            <p>
              Telefone para contato :<br />
              <b>0800 000 0000</b>
            </p>
          </div>
        </div>

        <div class="container-info">
          <div class="img">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/secured-letter--v1.png" />
          </div>
          <div class="info">
            <p>
              E-mail : <br />
              <b>sac_ghsuplementos@ghsuplementos.com</b>
            </p>
          </div>
        </div>
      </div>

      <div class="social">
        <p>Siga nossas redes sociais</p>
        <div class="social-links">
            <a class="links" href="">
                <img src="https://img.icons8.com/fluency/40/000000/facebook-new.png"/>
            </a>
            <a class="links" href="">
                <img src="https://img.icons8.com/color/40/000000/instagram-new--v1.png"/>
            </a>
            <a class="links" href="">
                <img src="https://img.icons8.com/color/40/000000/twitter--v1.png" />
            </a>
            <a class="links" href="">
                <img src="https://img.icons8.com/color/40/000000/youtube-play.png" />
            </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterPg",
};
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

.left {
  width: 45%;
}

.left .central-de-atendimento {
  margin-left: 0;
}

.left .central-de-atendimento h3 {
  font-size: 1.5rem;
}

.left .central-de-atendimento #items {
  margin-top: 8px;
}

.left .central-de-atendimento #items .item {
  margin-top: 5px;
  font-size: 1.2rem;
  list-style: none;
  cursor: pointer;
}

.right .sac {
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #0a0a0a;
  padding: 10px;
  margin-top: -100px;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
  width: 370px;
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

@media screen and (max-width: 780px) {
  .center {
    flex-direction: column;
  }

  .left {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left .central-de-atendimento #items .item:last-child {
    margin-bottom: 20px;
  }
  
  .right {
    margin-bottom: 120px;
  }

  .right .sac {
    margin-top: 0;
  }

  .right .sac .container-info img {
    display: none;
  }

  .right .sac .container-info .info {
    font-size: 1rem;
  }

  .right .social {
    margin-top: 20px;
    border: 1px solid #0a0a0a;
    padding: 10px;
    display: flex;
    width: 300px;
    height: 80px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
}
</style>
