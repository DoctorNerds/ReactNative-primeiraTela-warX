import warx from '../../assets/warx.png';

import naveespacial from '../../assets/personagens/naveespacial.png';
import foguete from '../../assets/personagens/foguete.png';
import pedra from '../../assets/personagens/pedra.png';
import meteoro from '../../assets/personagens/meteoro.png';

const cesta = {
    detalhes: {
      nome: "Conheça nossos jogos",
      logoJogo: warx,
      nomeJogo: "warX",
      descricao: "O Platena Terra corre perigo, você está abordo da espaçonave warX e precisa proteger o planeta do aquele galático.",
      botao: "JOGAR AGORA",
    },
    itens: {
      titulo: "Personagens do jogo",
      lista: [
        {
          nome: "Nave espacial",
          imagem: naveespacial,
          descricao: "Este é o incrível warX, sua direção será a mesma do mouse e você precisa clicar com o botão direito para soltar o laser e destruir os inimigos."
        },
        {
          nome: "Foquete",
          imagem: foguete,
          descricao: "A ameaça alienígina está lançando foguetes para destruir nosso platena, destrua-os com seu laser."
        },
        {
          nome: "Pedra Gigante",
          imagem: pedra,
          descricao: "As pedras gigantes podem causar um estrago nunca antes visto na Terra, atire seu laser para destruí-las."
        },
        {
          nome: "Meteoro",
          imagem: meteoro,
          descricao: "Uma chuva de meteoros pode acabar com nossas chances, apenas um laser não será o suficiente para derrotá-las, continue atirando e não desista."
        }
      ]
    }
  }

export default cesta;