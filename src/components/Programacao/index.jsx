import './style.modules.css';
export default function Programacao({ programacoes }) {
    const programasManha = programacoes && programacoes.filter(programa => programa.turno === 'manha');
    const programasTarde = programacoes && programacoes.filter(programa => programa.turno === 'tarde');
    const programasNoite = programacoes && programacoes.filter(programa => programa.turno === 'noite');

    return (
        <div className="programacao">
            <h3 className='programacao1'>Programação</h3>

            <p className='subtitle'>Manhã</p>
            <ul>
                {programasManha && programasManha.map(programa => (
                    <li key={programa.id}>
                        {programa.nome_programacao} - {programa.horario}
                    </li>
                ))}
            </ul>

            <p className='subtitle'>Tarde</p>
            <ul>
                {programasTarde && programasTarde.map(programa => (
                    <li key={programa.id}>
                        {programa.nome_programacao} - {programa.horario}
                    </li>
                ))}
            </ul>

            <p className='subtitle'>Noite</p>
            <ul>
                {programasNoite && programasNoite.map(programa => (
                    <li key={programa.id}>
                        {programa.nome_programacao} - {programa.horario}
                    </li>
                ))}
            </ul>
        </div>
    );
}