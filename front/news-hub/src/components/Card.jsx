import './Card.scss'

const Card = ({imgUrl}) => {
    return (
        <header className="card">
            <img className='card_img' src={imgUrl} alt="" />
            <div className="card_overlay">
                <p className="card_text"></p>
            </div>
        </header>
    )
}

export default Card