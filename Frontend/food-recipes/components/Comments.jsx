import '../css/Comments.css';
import { Button } from './Button';
import { useState, useEffect } from 'react';

export function Comments() {
    const [comment, setComment] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

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
                <Button text="POST COMMENT" className="comments-btn" type='submit'/>
            </form>
        </div>
    )
}