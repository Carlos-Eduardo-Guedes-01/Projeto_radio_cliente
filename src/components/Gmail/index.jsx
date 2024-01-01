import './style.modules.css';
export default function Gmail({email}){
    return(
    <>
    {email && email.map((gmail, index)=>(
        <a href={`https://mailto:${gmail.Email}`} className='contato3'><div className='contorno'><img src="./gmail.svg" alt="whatsapp" width={40}/></div> E-mail</a>
    ))}
        
    </>
    )
}