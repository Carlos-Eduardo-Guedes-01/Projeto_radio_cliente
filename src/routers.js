import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Padrao from './Pages/Padrao';
import Home from './Pages/Home';
function RotasApp(){
    return(
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Padrao/>}>
                <Route index element={<Home/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    </>
    )
}
export default RotasApp