import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderComponent";
import Login from "./components/Login/Login";
import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializedApp} from "./redux/appReducer"
import Preloader from "./components/commons/Preloader/Preloader";
class App extends React.Component {

    componentDidMount() {
        this.props.initializedApp();
    }

    render() {

        if (!this.props.initialized){
            return <Preloader/>
        }

        return (
            <div className={"app-wrapper"}>
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializedApp}))(App);
