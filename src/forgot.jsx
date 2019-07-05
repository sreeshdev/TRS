import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import bgi from "./images/Electricity.png";

import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: `url(${bgi})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  texts: {
    padding: "50px 5px 50px 150px ",
    display: "flex",
    //align: "center",
    color: "black",
    fontFamily: "Lato",
    fontSize: "35px",
    color: "white"
  }
}));

export default function SignInSide() {
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          className={classes.texts}
        >
          Mangalore Electricity Supply Company <br /> (MESCOM)
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} Validate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="User Name"
              name="username"
              autoComplete="username"
              autoFocus
            />

            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Verification Options</FormLabel>
              <RadioGroup
                aria-label="Verification Options"
                name="option1"
                className={classes.group}
                value={value}
                onChange={handleChange}
              >
                <span>
                  <FormControlLabel
                    value="Mobile No."
                    control={<Radio />}
                    label="Mobile No."
                  />{" "}
                  <FormControlLabel
                    value="Email ID"
                    control={<Radio />}
                    label="Email ID"
                  />
                </span>
              </RadioGroup>
            </FormControl>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="verify"
              label={value}
              id="verification"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Send
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              href="/login"
            >
              Return to Login
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
