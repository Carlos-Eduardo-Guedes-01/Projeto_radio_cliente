import Direita from '../../components/Direita'
import Esquerda from '../../components/Esquerda'
import Geral from '../../components/Geral'
import Programacao from '../../components/Programacao'
import Rodape from '../../components/Rodape'
import React, { useEffect, useState } from 'react';
import { fetchEquipe, fetchProgramacoes, fetchRadio } from '../Tools/API'

export default function Home(){
    const [programacoes, setProgramacoes] = useState([]);
    
useEffect(() => {
    fetchProgramacoes()
    .then(data => {
        setProgramacoes(data);
    });
}, []);
const [whatsapp, setWhatsapp] = useState(""); // Estado para armazenar o campo whatsapp

    useEffect(() => {
        fetchRadio()
        .then(data => {
            setWhatsapp(data); // Armazenar apenas o campo whatsapp no estado
        });
    }, []);
    const [Link_r, setLink_r] = useState(""); // Estado para armazenar o campo Link

    useEffect(() => {
        fetchRadio()
        .then(data => {
            setLink_r(data); // Armazenar apenas o campo Link no estado
        });
    }, []);
    const [Equipe, setEquipe] = useState(""); // Estado para armazenar o campo whatsapp

    useEffect(() => {
        fetchEquipe()
        .then(data => {
            setEquipe(data); // Armazenar apenas o campo whatsapp no estado
        });
    }, []);
    return(
    <>
        <Geral>
            <Esquerda
            equipe={Equipe}
            />
            <Programacao programacoes={programacoes}/>
            <Direita 
            whatsapp={whatsapp}
            Link_radio={Link_r}
            />
        </Geral>
        <Rodape/>
    </>
    )
}