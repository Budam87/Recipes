import { Button } from "./Button";
import { Link } from "react-router-dom";
import '../css/Card.css';

export function Card({ photoUrl, title, text, id }) {
    return (
        <div className="card">
            <Link to={`/recipe/${id}`}>
            <div className="card-content">
                    <div className="img-container">
                        <img src={photoUrl} alt='course-img' className="card-image" />
                    </div>
                    <div className="card-text">
                        <h3 className="card-title">{title}</h3>
                    </div>
                </div> 
            </Link>
        </div>
    )
}