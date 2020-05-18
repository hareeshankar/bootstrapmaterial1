import React from "react";
import PropTypes from "prop-types";
import Events from "./Events.js";
import { Link } from "react-router-dom";

class Home extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.logout();
  };
  /*
          <Typography component="h1" variant="h5">
            Welcome {this.props.user.username} !
          </Typography>
          <div className={classes.usertypo}>
            <Typography variant="body1" gutterBottom>
              {JSON.stringify(this.props.user)}
            </Typography>
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.handleSubmit}
          >
            Sign Out
          </Button>
*/
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Events />
      </main>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

const Homewithstyles = withStyles(styles)(Home);

export default withContext(Homewithstyles);
