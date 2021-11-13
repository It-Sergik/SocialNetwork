import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers,
    setCurrentPage,
    toggleFollowingProgress,
    unfollow
} from "../../redux/usersReduser";
import React from "react";
import Preloader from "../commons/Preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount,
    getUser
} from "../../redux/usersSelector";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       onPageChange={this.onPageChange}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers}),
    withAuthRedirect
)(UsersContainer);
