import '../css/Comments.css';
import { Button } from './Button';

export function Comments() {
    return (
        <div className="comments">
            <h2>LEAVE A REPLY</h2>
            <form action="">
                <label htmlFor="comment">Comment*</label> <br />
                <textarea name="comment" id="comment" rows='15' ></textarea> <br />
                <label htmlFor="name">Name*</label> <br />
                <input type="text" name="name" id="name" />
                <label htmlFor="email">Email*</label>
                <input type="email" name="email" id="email" />
                <Button text="POST COMMENT" className="comments-btn" />
            </form>
        </div>
    )
}