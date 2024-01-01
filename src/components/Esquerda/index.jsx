import './style.modules.css'
export default function Esquerda({equipe}){
    return(
        <div className="esquerda">
            <h3>Equipe</h3>
            <ul className='integrantes'>
                {
                equipe && equipe.map((integrante)=>(
                    <li className='integrante'>{integrante.Nome_integrante} </li>
                ))}
            </ul>
        </div>
    )
}