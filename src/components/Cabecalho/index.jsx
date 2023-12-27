import './style.modules.css';
export default function Cabecalho({children}){
    return(
        <header className="cabecalho">
        {children}
        </header>
    )
}