import './style.modules.css'
export default function LinkRadio({link}){
    return(
    <>
    {   link && link.map((link_r, index)=>(
        <a href={`${link_r.Link}`} className='contato2' key={index}>
            <img src="./logo_cerrado-removebg-preview.png" alt="logo" width={150}/>
        </a>
    ))
        
    }
    </>
    )
}