import React from 'react'
import { Avatar, Button, Typography, Dialog } from "@mui/material";
import { MoreVert, Favorite, FavoriteBorder, ChatBubbleOutline, DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import './Post.css'
export const Post = ({
    postId,
    caption,
    postImage,
    likes = [],
    comments = [],
    ownerImage,
    ownerName,
    ownerId,
    isDelete = false,
    isAccount = false, }) => {
    return (
        <div className="post">
            <div className="postHeader">

                <Button>
                    <MoreVert />
                </Button>

            </div>

            <img src={postImage} alt="Post" />

            <div className="postDetails">
                <Avatar
                    src={ownerImage}
                    alt="User"
                    sx={{
                        height: "3vmax",
                        width: "3vmax",
                    }}
                />

                <Link to={`/user/${ownerId}`}>
                    <Typography fontWeight={700}>{ownerName}</Typography>
                </Link>

                <Typography
                    fontWeight={100}
                    color="rgba(0, 0, 0, 0.582)"
                    style={{ alignSelf: "center" }}
                >
                    {caption}
                </Typography>
            </div>

            <button
                style={{
                    border: "none",
                    backgroundColor: "white",
                    cursor: "pointer",
                    margin: "1vmax 2vmax",
                }}


            >
                <Typography>5 Likes</Typography>
            </button>

            <div className="postFooter">
                <Button>
                    <Favorite style={{ color: "red" }} />
                </Button>

                <Button>
                    <ChatBubbleOutline />
                </Button>


                <Button >
                    <DeleteOutline />
                </Button>

            </div>
        </div>
    )
}
