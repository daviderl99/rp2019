import React from "react";
import PropTypes from "prop-types";

class Userpage extends React.PureComponent{

  static propTypes = {
    user: PropTypes.object.isRequired
  };

  render(){
    return(
      <div>
        Your info: {this.props.user.email}, created at {this.props.user.createdAt}
      </div>
    );
  }
}

export default Userpage;