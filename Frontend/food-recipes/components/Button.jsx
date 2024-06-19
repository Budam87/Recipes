import '../css/Button.css';

export function Button({text, className}) {
    return (
        <>
            <button className={`btn ${className}`}>
                {text}
                <i className="fa-solid fa-arrow-right"></i>
                </button>
        </>
    )
}