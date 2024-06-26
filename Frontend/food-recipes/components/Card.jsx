import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";
import '../css/Card.css';

export function Card({ photoUrl, title, text, id }) {

    const navigate = useNavigate();

    const handleEdit = () => {
        navigate(`/recipes/edit/${id}`);
    };

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
            <Button onClick={handleEdit}>Edit</Button>
        </div>
    )
}