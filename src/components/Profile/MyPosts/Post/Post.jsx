import s from "./Post.module.css";

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src={"http://sun9-52.userapi.com/s/v1/if1/32ijHm4Sol5VI3pA9FeEsCyXvBKLVenwUrJGEi6mPhe1OtOJDg4CW2aCQkaiwK8SkP7aw-8U.jpg?size=200x280&quality=96&crop=0,0,431,604&ava=1"} />
                { props.message }
            </div>

    );
}

export default Post;