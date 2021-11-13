import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getIsAuth, getProfile, getUserId} from "../../redux/profileSelector";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} status = {this.props.status}
                updateStatus = {this.props.updateStatus}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: getProfile(state),
    status: getStatus(state),
    authorizedUserId : getUserId(state),
    isAuth: getIsAuth(state)
})

export default compose(
    connect(mapStateToProps, {getProfile: getUserProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);





