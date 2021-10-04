import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.posts.map(post => <Post message={post.message}/>)

    return (
        <div>
            <div className={s.postBlock}>
                <h3>My Post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Add button</button>
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