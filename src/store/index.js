import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      {
        "id": 1,
        "name": "Whey",
        "image": "001.png",
        "description": ["Custo x Benefício","Ajuda na hipertrofia","Alta concentração proteíca"],
        "type": ["musculacao","lutas","massa muscular","emagrecimento"],
        "value" : "97,90"
      },
      {
        "id": 2,
        "name": "Creatina",
        "image": "002.png",
        "description": ["Maior desempenho físico","Aumento da massa muscular","Aumento da recuperação muscular"],
        "type": ["musculacao","corrida","massa muscular"],
        "value" : "44,40"
      },
      {
        "id": 3,
        "name": "Pré-treino",
        "image": "003.png",
        "description": ["Mais energia e disposição","Potencializa os efeitos da dieta e treino","Melhora do desempenho"],
        "type": ["musculacao","lutas","corrida","massa muscular","energia","emagrecimento"],
        "value" : "66,50"
      },
      {
        "id": 4,
        "name": "Multivitamínico",
        "image": "004.jpg",
        "description": ["Fonte de nutrientes antioxidantes","Auxilia a saúde do coração","Contrinui com o sistema imunológico"],
        "type": ["musculacao","massa muscular","qualidade de vida"],
        "value" : "38,70"
      },
      {
        "id": 5,
        "name": "Termogênico",
        "image": "005.png",
        "description": ["Redução de gordura","Combate o cansaço","Energia e disposição"],
        "type": ["emagrecimento"],
        "value" : "67,50"
      },
      {
        "id": 6,
        "name": "Melatonina",
        "image": "006.png",
        "description": ["Regulação do sono","Antioxidante natural","Regulação do humor"],
        "type": ["qualidade de vida"],
        "value" : "27,90"
      },
      {
        "id": 7,
        "name": "Betacaroteno",
        "image": "007.png",
        "description": ["Fonte de vitamina A","Usado pelo sistema imunológico","Usado na síntese e manutenção da pele e cabelo"],
        "type": ["qualidade de vida"],
        "value" : "37,40"
      },
      {
        "id": 8,
        "name": "Cafeína",
        "image": "008.jpg",
        "description": ["Construção muscular","Aumento da força muscular","Prevenção Da fadiga"],
        "type": ["musculacao","lutas","corrida","emagrecimento","massa muscular","energia"],
        "value" : "60,00"
      },
      {
        "id": 9,
        "name": "Barra de proteína",
        "image": "009.jpg",
        "description": ["Fonte de fibras","Baixo índice glicêmico","Proteínas de alto valor biológico"],
        "type": ["musculacao","lutas","corrida","massa muscular"],
        "value" : "48,00"
      },
      {
        "id": 10,
        "name": "Pasta de amendoim",
        "image": "010.webp",
        "description": ["Fonte de energia","Rico em nutrientes","Auxilia nas funções do sistema imunológico"],
        "type": ["musculacao","corrida","energia","qualidade de vida"],
        "value" : "28,90"
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
