export default function Friend({friend}){
    // console.log(friend)
    const {name, email ,phone} = friend;
    return(
        <div className="friend">
            <h3>Name: {name}</h3>
            <small>Phone : {phone} </small>
            <p>Email : {email}</p>
        </div>
    )
}