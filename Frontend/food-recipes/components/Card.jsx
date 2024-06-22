import { Button } from "./Button"
import '../css/Card.css'

export function Card({ photoUrl, title, text }) {
    return (
        <div className="card">
           <div className="card-content">
                <div className="img-container">
                    <img src={photoUrl} alt='course-img' className="card-image" />
                </div>
                <div className="card-text">
                    <h3 className="card-title">{title}</h3>
                </div>
            </div> 
            <div className="card-button">
                <Button text='READ MORE'/>
            </div>
        </div>
    )
}