// export default function Post({post}){
//     return(
//         <div>
//             <p className="friend">Title : {post.title}</p>
//         </div>
//     )
// };

export default function Post({post}){
    const {title, body} = post;
    return(
        <div>
            <p className="friend">Title : {title}</p>
            <small>Body : {body}</small>
        </div>
    )
}