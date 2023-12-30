import Logo from "../../components/Logo";
import Cabecalho from "../../components/Cabecalho";
import Vw58 from "../../components/Vw58";
import Menu from "../../components/Menu";
import { Outlet } from "react-router-dom"
import { fetchRadio } from '../Tools/API'
import React, { useEffect, useState } from 'react';

export default function Padrao(){
    const [radio, setRadio] = useState([]);
    useEffect(() => {
        fetchRadio()
        .then(data => {
            setRadio(data);
        });
    }, []);
    return(
    <>
    <Cabecalho>
        <Logo logo={radio}/>
        <Vw58/>
        <Menu/>
    </Cabecalho>
    <Outlet/>

    </>
    )
}