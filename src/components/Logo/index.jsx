import './style.modules.css';
export default function Logo({logo}){
    return(
    <>
    {logo && logo.map((log,index) => (
                    <img src={log.Logo} alt="Logo" className="logo" key={index}/>
    )
                )}
    
    </>
    )
}