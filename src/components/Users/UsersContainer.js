import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleIsFetching,
    unfollow
} from "../../redux/usersReduser";
import React from "react";
import Preloader from "../Preloader/Preloader";
import {usersAPI} from "../../api/usersAPI";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setUsersTotalCount(data.totalCount);
                this.props.toggleIsFetching(false);
            });

    }

    onPageChange = (numberPage) => {
        this.props.setCurrentPage(numberPage);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items);
                this.props.toggleIsFetching(false)
            });

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
                       onPageChange={this.onPageChange}/>
            </>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    }
}

export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching})(UsersContainer);