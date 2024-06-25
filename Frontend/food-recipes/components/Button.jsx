import '../css/Button.css';

export function Button({text, className, onClick}) {
    return (
        <>
            <button className={`btn ${className}`} onClick={onClick}>
                {text}
                <i className="fa-solid fa-arrow-right"></i>
                </button>
        </>
    )
}