import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AvatarImage from "../../assets/avatar/avatar1.jpg";

const styles = {
  avatar: {
    margin: 10,
    width: "250px",
    height: "250px"
  }
};

const AvatarCompoment = ({ classes }) => {
  return (
    <Avatar alt="Tan Nguyen" src={AvatarImage} className={classes.avatar} />
  );
};

export default withStyles(styles)(AvatarCompoment);
