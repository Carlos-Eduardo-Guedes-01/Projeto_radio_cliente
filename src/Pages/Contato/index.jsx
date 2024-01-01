import Geral from "../../components/Geral";
import Gmail from "../../components/Gmail";
import LinkRadio from "../../components/Link";
import Rodape from "../../components/Rodape";
import Whatstapp from "../../components/Whatsapp";
import './style.modules.css'
import React, { useEffect, useState } from 'react';
import { fetchRadio } from '../Tools/API'
export default function Contato(){
    const [whatsapp, setWhatsapp] = useState(""); // Estado para armazenar o campo whatsapp

                useEffect(() => {
                    fetchRadio()
                    .then(data => {
                        setWhatsapp(data); // Armazenar apenas o campo whatsapp no estado
                    });
                }, []);
    return(
    <>
        <div className="CONTATOS">
        Contatos
        </div>
            <Geral>
                <Gmail
                email={whatsapp}
                />
                <Whatstapp
                whats={whatsapp}
                />
                <LinkRadio
                link={whatsapp}
                />
            </Geral>
            <Rodape/>
    </>
    )
}