import React from 'react';
import { Image, StyleSheet, Dimensions} from 'react-native';

import Texto from '../../../componentes/Texto';
import capa from '../../../../assets/capa.png';

const width = Dimensions.get('screen').width

export default function Topo({ nome, logoFazenda, nomeFazenda, titulo }) {
    return <>
        <Image source={capa} style={estilos.topo} />
        <Texto style={estilos.titulo}>{titulo}</Texto>    
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: '100%',
        height: 1120/1960 * width,
    },
    
    titulo: {
        width: '100%',
        position: 'absolute',
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 26,
        color: 'white',
        fontWeight: 'bold',
        padding: 16
    }
});