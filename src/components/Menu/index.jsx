import { Link } from "react-router-dom"
import './style.modules.css'
export default function Menu(){
    const itens = ['Home','Sobre','Contato']
    return(
        <div className="menu">
            {
                itens.map((item, index)=>(
                    <div key={index} className="item">
                        <Link to={item==='Home'?'/': item.toLowerCase()}>
                            {item}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}