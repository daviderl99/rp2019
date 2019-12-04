import React from "react";
import PropTypes from "prop-types";
import { UserPropTypes } from "../store/reducer";
import {connect} from "react-redux";
import {userUpdate, tokenUpdate} from "../store/actions.js";
import protectedRedirect from "../components/protectedRedirect.jsx";
import "../css/userPage.css";

class Userpage extends React.PureComponent{

  static propTypes = {
    user: PropTypes.shape(UserPropTypes),
    dispatch: PropTypes.func.isRequired
  };

  handleLogout = () => {
    this.props.dispatch(userUpdate(null));
    this.props.dispatch(tokenUpdate(null));
  }

  render(){
    return(
      <div className={"wrapper"}>
        <div className={"user_container"}>
          <div className={"user_info"}>
            <div>
              <span className={"user_info_span"}>Email: </span>{this.props.user.email}
            </div>
            <div>
              <span className={"user_info_span"}>Created: </span>{this.props.user.createdAt}
            </div>
          </div>
          <button className={"btn-logout"} onClick={this.handleLogout}><p>Log out</p></button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    user: store.user
  };
};

export default connect(mapStateToProps)(protectedRedirect(Userpage));
