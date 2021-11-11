import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import ProfileReduxForm from "../ProfileForm";


const MyPosts = (props) => {
    let postsElement = props.posts.map(post => <Post message={post.message}/>)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        <div>
            <div className={s.postBlock}>
                <h3>My Post</h3>
                <ProfileReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.post}>
                {postsElement}
            </div>
        </div>
    );
}

export default MyPosts;