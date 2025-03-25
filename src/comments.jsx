import { use } from "react"
import Comment from "./comment";
export default function Comments({commentsPromise}){
    const comments = use(commentsPromise);
    // console.log(comments)
    return (
        <div className="friends-card">
            <h2 >All Comments...</h2>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}></Comment>)
            }
        </div>
    )
}