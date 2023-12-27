import Logo from "../../components/Logo";
import Cabecalho from "../../components/Cabecalho";
import Vw58 from "../../components/Vw58";
import Menu from "../../components/Menu";
import { Outlet } from "react-router-dom"
import Rodape from "../../components/Rodape";

export default function Padrao(){
    return(
    <>
    <Cabecalho>
        <Logo/>
        <Vw58/>
        <Menu/>
    </Cabecalho>
    <Outlet/>

    </>
    )
}