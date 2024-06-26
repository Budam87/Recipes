import '../css/Comments.css';
import { Button } from './Button';
import { useState, useEffect } from 'react';
import { Modal } from './Modal';

export function Comments() {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);
    const [selectedComment, setSelectedComment] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault;

        const response = await fetch(`http://localhost:8080/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({comment, name, email})
        })

        if(response.ok) {
            alert('Comment posted successfully');
            setComment('');
            setName('');
            setEmail('');
        } else {
            alert('Failed to post');
        }
        
    };

    const fetchComments = async() => {
        try {
            const response = await fetch(`http://localhost:8080/comments`);
            if (response.ok) {
                const data = await response.json();
                setComments(data);
            } else {
                setError(`Error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            setError(`Error: ${error.message}`);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8080/comments/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                alert('Komentaras istrintas');
                fetchComments();
            } else {
                alert('Nepavyko istrinti komentaro');
            }
        } catch (error) {
            alert('Klaida: ' + error.message);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="comments">
            <h2>LEAVE A REPLY</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Comment*</label> <br />
                <textarea name="comment" id="comment" rows='15' value={comment} onChange={(e) => setComment(e.target.value)}></textarea> <br />
                <label htmlFor="name">Name*</label> <br />
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Button text="POST" className="comments-btn" type='submit'/>
            </form>
            <div className='comments-list'>
                {comments.map((comment) => (
                    <div key={comment._id} className='comment'>
                        <p>{comment.name} <span> - {comment.createdAt}</span></p>
                        <p>{comment.comment}</p>
                        <Button text='REMOVE' onClick={() => setSelectedComment(comment)}/>
                    </div>
                ))}
            </div>
            {selectedComment && (
                <Modal
                    comment={selectedComment} 
                    onClose={() => setSelectedComment(null)} 
                    onConfirm={(id) => { 
                        handleDelete(id);
                        setSelectedComment(null); 
                    }}
                />
            )}
        </div>
    )
}