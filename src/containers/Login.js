import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {loginInitiate} from '../redux/actions'
import '../App.css';

class Login extends Component {
    constructor() {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.hideAlert = this.hideAlert.bind(this);
        this.state = { showAlert: false };
    }

    componentWillReceiveProps(newProps) {
        let { loginInfo } = newProps;
        if (loginInfo.success) {
            this.props.history.push('/search');
        } else if (!loginInfo.success && loginInfo.showAlert) {
            this.setState({ showAlert: true, alertText: loginInfo.alertText });
        }
    }
    /**
     * function onChange
     * @param {*} field
     * @param {*} value
     */
    onChange(field, e) {
        var userState = {};
        userState[field] = e.target.value;
        this.setState(userState);
    }

    hideAlert() {
        this.setState({ showAlert: false });
    }

    onSubmit(e) {
        this.props.loginRequest(this.state);
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Star Wars</h2>
                    <input type="text" className="form-control" name="username" placeholder="Email Address" required="" autoFocus="" onChange={this.onChange.bind(this, 'username')} />
                    <input type="password" className="form-control" name="password" placeholder="Password" required="" onChange={this.onChange.bind(this, 'password')} />
                    <button type="button" className="btn btn-lg btn-primary btn-block" onClick={this.onSubmit}>Login</button>
                </form>
                <div>
                {
                    this.state.showAlert ? this.state.alertText: null
                }
                </div>
            </div>
        )
    }
}

let mapStateToProps = function (state) {
    return { loginInfo: state.login };
}

export const mapDispatchToProps = dispatch => {
    return {
        loginRequest(dataLogin) {
        dispatch(loginInitiate(dataLogin));
      },
    };
  };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
