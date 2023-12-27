import Direita from '../../components/Direita'
import Esquerda from '../../components/Esquerda'
import Programacao from '../../components/Programacao'
import Rodape from '../../components/Rodape'
import './style.modules.css'
export default function Home(){
    return(
    <>
        <div className='Geral'>
            <Esquerda/>
            <Programacao/>
            <Direita/>
            
        </div>
        <Rodape/>
    </>
    )
}