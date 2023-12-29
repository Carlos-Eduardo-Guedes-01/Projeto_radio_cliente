import Geral from "../../components/Geral";
import Gmail from "../../components/Gmail";
import LinkRadio from "../../components/Link";
import Rodape from "../../components/Rodape";
import Whatstapp from "../../components/Whatsapp";
import './style.modules.css'
export default function Contato(){
    return(
    <>
        <div className="CONTATOS">
        Contatos
        </div>
            <Geral>
                <Gmail/>
                <Whatstapp/>
                <LinkRadio/>
            </Geral>
            <Rodape/>
    </>
    )
}