import React from "react";
import MyPosts from "../MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
   return {
       posts: state.profilePage.posts,
       newPostText: state.profilePage.newPostText
   }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;