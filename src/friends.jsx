import { use } from "react"
import Friend from "./friend"

export default function Friends({friendsPromise}){
    const friends = use(friendsPromise)
    return(
        <div className="friends-card">
            <h2>Friend : {friends.length}</h2>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}