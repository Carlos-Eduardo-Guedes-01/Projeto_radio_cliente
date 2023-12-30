import Direita from '../../components/Direita'
import Esquerda from '../../components/Esquerda'
import Geral from '../../components/Geral'
import Programacao from '../../components/Programacao'
import Rodape from '../../components/Rodape'
import React, { useEffect, useState } from 'react';
import { fetchProgramacoes } from '../Tools/API'

export default function Home(){
    const [programacoes, setProgramacoes] = useState([]);
    
useEffect(() => {
    fetchProgramacoes()
    .then(data => {
        setProgramacoes(data);
    });
}, []);


    return(
    <>
        <Geral>
            <Esquerda/>
            <Programacao programacoes={programacoes}/>
            <Direita/>
        </Geral>
        <Rodape/>
    </>
    )
}