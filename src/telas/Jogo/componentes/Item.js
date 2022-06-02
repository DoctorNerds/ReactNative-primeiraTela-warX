import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import Texto from '../../../componentes/Texto';

export default function Item({ item:{nome, imagem, descricao} }){
    return <>
    <View>
        <View style={estilos.item}>
            <Image source={ imagem } style={estilos.imagem} />
            <Texto style={estilos.nome}>{ nome }</Texto>
        </View>
        <View style={estilos.item}>
            <Texto style={estilos.nome}>{ descricao }</Texto>
        </View>
    </View>

    </>
}

const estilos = StyleSheet.create({
    item:{
        flexDirection: "row",
        borderBottomWidth: 1, 
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem:{
        width: 66,
        height: 46,
        resizeMode: "contain"
    },
    nome:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color:  "#464646"
    },
    legenda:{
        paddingVertical: 16,
        marginHorizontal: 16,
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color:  "#464646"
    }
});