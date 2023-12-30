import './style.modules.css';
export default function Logo({logo}){
    console.log(logo)
    return(
    <>
    {logo && logo.map(log => (
                    <img src={log.Logo} alt="Logo" className="logo"/>
    )
                )}
    
    </>
    )
}