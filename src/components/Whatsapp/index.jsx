import './style.modules.css';
export default function Whatstapp({whats}){
    return(
        <>
        {whats && whats.map((whatsapp,index)=>(
            <a href={`https://wa.me/${whatsapp.Whatsapp}`} className='contato' key={index}>
                <img src="./whatsapp (1).png" alt="whatsapp" width={40}/> Whatsapp
            </a>
        ))}
            
        </>
    )
}