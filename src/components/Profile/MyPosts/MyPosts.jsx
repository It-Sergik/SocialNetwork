import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post message={post.message}/>)
    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch({type: "ADD-POST"});
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: "UPDATE-NEW-POST-TEXT",
                      newText: text});
    }

    return (
        <div>
            <div className={s.postBlock}>
                <h3>My Post</h3>
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add button</button>
                    </div>
                </div>
            </div>
            <div className={s.post}>
                {postsElement}
            </div>
        </div>
    )
        ;
}

export default MyPosts;