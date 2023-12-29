import LinkRadio from '../Link'
import Whatstapp from '../Whatsapp'
import './style.modules.css'
export default function Direita(){
    return(
    <>
    <div className="direita">
        <h3>Contatos</h3>
        <div className='botoes'>
            Entre em contato em:<br/>
            <Whatstapp/>
            Entre em contato em:<br/>
            <LinkRadio/>
        </div>
    </div>
    </>
    )
}