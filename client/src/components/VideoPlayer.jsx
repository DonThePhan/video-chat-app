import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { SocketContext } from "../SocketContext";

// const useStyles = makeStyles((theme) => ({
//   video: {
//     width: "550px",
//     [theme.breakpoints.down("xs")]: {
//       width: "300px",
//     },
//   },
//   gridContainer: {
//     justifyContent: "center",
//     [theme.breakpoints.down("xs")]: {
//       flexDirection: "column",
//     },
//   },
//   paper: {
//     padding: "10px",
//     border: "2px solid black",
//     margin: "10px",
//   },
// }));

const VideoPlayer = () => {
  // const classes = useStyles();
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div>
      {/* Our own video  */}
      {stream && (
        <div>
          {name || "Name"}
          <video playsInline muted ref={myVideo} autoPlay></video>
        </div>
      )}

      {/* User's video  */}
      {callAccepted && !callEnded && (
        <div>
          {call.name || "Name"}
          <video playsInline ref={userVideo} autoPlay></video>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;

/*
   <Grid container classname={classes.gridContainer}>
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant='h5' gutterBottom>
            Name
          </Typography>
          <video
            playsInline
            muted
            ref={"myVideo"}
            autoPlay
            className={classes.video}
          ></video>
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Grid item xs={12} md={6}>
          <Typography variant='h5' gutterBottom>
            Name
          </Typography>
          <video
            playsInline
            ref={"userVideo"}
            autoPlay
            className={classes.video}
          ></video>
        </Grid>
      </Paper>
    </Grid>
 */
