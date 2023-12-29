import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Padrao from './Pages/Padrao';
import Home from './Pages/Home';
import Sobre from './Pages/Sobre';
import Contato from './Pages/Contato';
function RotasApp(){
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Padrao/>}>
                <Route index element={<Home/>}/>
                <Route path='sobre' element={<Sobre/>}/>
                <Route path='contato' element={<Contato/>}/> 
            </Route>
        </Routes>
    </BrowserRouter>
    </>
    )
}
export default RotasApp