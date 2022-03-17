import React from 'react'
import './Home.css'
import { User } from '../User/User'
import { Post } from '../Post/Post'
export const Home = () => {
    return (
        <div className="home">
            <div className="homeleft">
                <Post postImage={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} />
            </div>
            <div className="homeright">
                <User
                    key={"user._id"}
                    userId={"user._id"}
                    name={"user.name"}
                    avatar={"user.avatar.url"}
                />

            </div>
        </div>
    )
}
