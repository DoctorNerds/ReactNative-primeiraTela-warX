import React from 'react';
import { Image, StyleSheet, View} from 'react-native';

import Texto from '../../../componentes/Texto';
import Botao from '../../../componentes/Botao';


export default function Detalhes({nome, logoJogo, nomeJogo, descricao, botao}) {
    return <>
    <Texto style={estilos.nome}>{ nome }</Texto>
    <View style={estilos.jogo}>
      <Image source={logoJogo} style={estilos.imagemJogo} />
      <Texto style={estilos.nomeJogo}>{ nomeJogo }</Texto>
    </View>
    <Texto style={estilos.descricao}>{ descricao }</Texto>
    <Botao texto={botao} />
  </>
}

const estilos = StyleSheet.create({

    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },

    jogo:{
        flexDirection: 'row',
        paddingVertical: 6,
    },

    imagemJogo:{
        width: 52,
        height: 52,
    },

    nomeJogo:{
        fontSize: 40,
        lineHeight: 50,
        marginLeft: 12,
        textAlign: "center",
    },
    
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        paddingVertical: 6,
    },

    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    }
});