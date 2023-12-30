import LinkRadio from '../Link'
import Whatstapp from '../Whatsapp'
import './style.modules.css'
export default function Direita({Link_radio, whatsapp}){
    const apiData = whatsapp; // Supondo que os dados da API estejam no campo 'whatsapp'
    const campoWhatsapp = apiData[[0][0]]; // Acessa diretamente o campo 'whatsapp'

    console.log(campoWhatsapp); // Imprime somente o campo 'whatsapp' no console

    return(
    <>
    <div className="direita">
        <h3>Contatos</h3>
        <div className='botoes'>
            Entre em contato em:<br/>
            <Whatstapp whats={whatsapp}/>
            Entre em contato em:<br/>
            <LinkRadio link={Link_radio}/>
        </div>
    </div>
    </>
    )
}