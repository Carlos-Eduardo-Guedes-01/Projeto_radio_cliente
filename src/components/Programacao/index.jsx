import './style.modules.css'
export default function Programacao(){
    return(
        <div className="programacao">
            <h3 className='programacao1'>Programação</h3>
            <p className='subtitle'>Manhã</p>
            <ul>
                <li>Programação X - 08:00</li>
                <li>Programação Y - 09:00</li>
                <li>Programação Z - 12:00</li>
            </ul>
            <p className='subtitle'>Tarde</p>
            <ul>
                <li>Programação X - 14:00</li>
                <li>Programação Y - 15:00</li>
                <li>Programação Z - 18:00</li>
            </ul>
            <p className='subtitle'>Noite</p>
            <ul>
                <li>Programação X - 20:00</li>
                <li>Programação Y - 21:00</li>
                <li>Programação Z - 22:00</li>
            </ul>
        </div>
    )
}