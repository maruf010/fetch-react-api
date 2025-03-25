export default function Comment({comment}){
    const {name,email} = comment;
    return(
        <div className="friend bg">
        <p>Name: {name}</p>
        <p>Email : {email}</p>
        </div>
    )
}