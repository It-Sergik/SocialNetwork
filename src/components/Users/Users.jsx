import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png"
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {usersAPI} from "../../api/usersAPI";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                                 onClick={() => {
                                     props.onPageChange(p)
                                 }}>{p}</span>
                })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile"}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => {
                                    usersAPI.deleteFollow(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.follow(u.id)
                                            }
                                        });
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    usersAPI.postFollow(u.id)
                                        .then(data => {
                                            if (data.resultCode == 0) {
                                                props.unfollow(u.id);
                                            }
                                        });
                                }}>Follow</button>}

                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.city"}</div>
                            <div>{"u.location.country"}</div>
                        </span>
                    </span>
                    </div>
                )
            }
        </div>
    )
}

export default Users;