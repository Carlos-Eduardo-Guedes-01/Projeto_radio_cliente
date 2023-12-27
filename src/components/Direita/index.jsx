import './style.modules.css'
export default function Direita(){
    return(
    <>
    <div className="direita">
        <h3>Contatos</h3>
        <div className='botoes'>
            Entre em contato em:<br/>
            <a href='#' className='contato'><img src="./whatsapp (1).png" alt="whatsapp" width={30}/> Whatsapp</a>
            Entre em contato em:<br/>
            <a href='#' className='contato2'><img src="./logo_cerrado-removebg-preview.png" alt="logo" width={150}/></a>
        </div>
    </div>
    </>
    )
}