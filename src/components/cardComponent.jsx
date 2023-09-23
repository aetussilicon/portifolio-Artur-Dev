import '/src/styles/cardComponent.css'

export function cardComponent({ img, title, text, link }) {
    return (
        <div className='card'>
            <img src={img} />
            <div className='cardContent'>
                <p className='cardTitle'>{title}</p>
                <p className='cardDescription'>{text}</p>
                <div className='cardButtons'>
                <button href="#" className='cardButton'>Demonstração</button>
                <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className='cardButton secondary'>
                        Código Fonte
                    </button>
                </a>
                </div>
            </div>
        </div>
    );
}