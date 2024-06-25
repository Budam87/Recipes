import '../css/Modal.css';
import { useState} from 'react';

export function Modal({ comment, onClose, onConfirm }) {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleConfirm = () => {
        if(email === comment.email) {
            onConfirm(comment._id);
        } else {
            setError('Emaail does not match')
        }
    };

    return (
        <div className='modal-wrapper'>
            <div className='modal'>
                <h2>Confirm deletion the deletion of comment</h2>
                <p>Enter your email to confirm the deletion:</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                {error && <p className="error">{error}</p>}
                <button onClick={handleConfirm}>Confirm</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    )
}