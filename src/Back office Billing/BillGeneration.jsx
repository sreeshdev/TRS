import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import clsx from "clsx";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Icon from "@material-ui/core/Icon";
import DeleteIcon from "@material-ui/icons/Delete";
import SaveIcon from "@material-ui/icons/Save";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  }
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    alignItems: "right",
    justifyContent: "right",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  paper: {
    alignItems: "right",
    justifyContent: "right",
    padding: theme.spacing(1, 2)
  },
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(25)
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20
  },
  details: {
    alignItems: "center"
  },
  column: {
    flexBasis: "33.33%"
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(2, 2)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    }
  },
  p: {
    margintop: "100px",
    marginbottom: "100px",
    marginright: "150px",
    marginleft: "80px"
  }
}));

function handleClick(event) {
  event.preventDefault();
  alert("You clicked a breadcrumb.");
}

export default function CustomSeparator() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    subdiv: "",
    mob: "",
    reason: ""
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);
  //   React.useEffect(() => {
  //     setLabelWidth(inputLabel.current.offsetWidth);
  //   }, []);

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div>
      <div className={classes.root}>
        <Paper elevation={10} className={classes.paper}>
          <Breadcrumbs separator="›" aria-label="breadcrumb">
            <Link color="inherit" href="/" onClick={handleClick}>
              Billing
            </Link>

            <Typography color="textPrimary">Bill Generation</Typography>
          </Breadcrumbs>
        </Paper>
      </div>
      <div className={classes.p}>
        <br></br>
        <br></br>
        <center>
          <Typography color="textPrimary">
            Back Office Bill Generation
          </Typography>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="subdiv-label-placeholder" required>
                Sub Division
              </InputLabel>
              <Select
                value={values.subdiv}
                onChange={handleChange}
                inputProps={{
                  name: "subdiv",
                  id: "subdiv-label-placeholder"
                }}
                displayEmpty
                name="subdiv"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Shikaripura</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel shrink htmlFor="mob-label-placeholder" required>
                Month of Bill
              </InputLabel>
              <Select
                value={values.mob}
                onChange={handleChange}
                inputProps={{
                  name: "mob",
                  id: "mob-label-placeholder"
                }}
                displayEmpty
                name="mob"
                className={classes.selectEmpty}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Sep-2017</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </form>
        </center>
      </div>
      <div className={classes.root}>
        <ExpansionPanel defaultExpanded>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>
                Customer Details
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                required
                id="outlined-required"
                label="Connection Id"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-dense-multiline"
                label="Name & Address"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                multiline
                rowsMax="4"
              />

              <br></br>
              <TextField
                required
                id="outlined-required"
                label="RRNO"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </form>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="large" color="primary">
              Check Availability
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>
                Customer Information
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                required
                id="outlined-required"
                label="Tarrif"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-dense-multiline"
                label="Meter Constant"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                id="date"
                label="Last Bill Issued"
                type="date"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />

              <br></br>
              <TextField
                required
                id="outlined-required"
                label="Sub Tarrif"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-dense-multiline"
                label="Contract Demand"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                id="date"
                label="Due Date"
                type="date"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />

              <br></br>
              <TextField
                required
                id="outlined-required"
                label="Saction Load HP"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-dense-multiline"
                label="Avg Consumption"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
              />
              <TextField
                id="date"
                label="Reading Date"
                type="date"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                InputLabelProps={{
                  shrink: true
                }}
              />
              <br></br>
              <TextField
                required
                id="outlined-required"
                label="Meter SL No."
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-dense-multiline"
                label="No of Months"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
              />
              <br></br>
              <TextField
                required
                id="outlined-required"
                label="Meter Type"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-dense-multiline"
                label="Supply Points"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
              />
              <br></br>
              <TextField
                required
                id="outlined-required"
                label="Rebate"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-dense-multiline"
                label="% of slow Rotation"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                required
              />
              <center>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="age-label-placeholder" required>
                    Reason
                  </InputLabel>
                  <Select
                    value={values.reason}
                    onChange={handleChange}
                    inputProps={{
                      name: "reason",
                      id: "reason-label-placeholder"
                    }}
                    displayEmpty
                    name="reason"
                    className={classes.selectEmpty}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}>Sep-2017</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </center>
            </form>
          </ExpansionPanelDetails>
          <Divider />
        </ExpansionPanel>
      </div>
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>
                Reading Information
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Reading</StyledTableCell>
                    <StyledTableCell>Previous</StyledTableCell>
                    <StyledTableCell>Present</StyledTableCell>
                    <StyledTableCell>Wheeled</StyledTableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Paper>
            <br></br>
            <div className={classes.coloumn}>
              <form className={classes.container} noValidate autoComplete="off">
                <br></br>
                <TextField
                  required
                  id="outlined-required"
                  label="Recorded Demand"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
                <TextField
                  id="outlined-dense-multiline"
                  label="Power Factor"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  multiline
                  rowsMax="4"
                />

                <br></br>
                <TextField
                  required
                  id="outlined-required"
                  label="Total Cosumption"
                  defaultValue=""
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </form>
            </div>
          </ExpansionPanelDetails>
          <Divider />
          <ExpansionPanelActions>
            <Button size="large" color="primary">
              Calculate Cons
            </Button>
            <Button size="large" color="primary">
              Process
            </Button>
          </ExpansionPanelActions>
        </ExpansionPanel>
      </div>
      <div className={classes.root}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>
                Bill Calculation
              </Typography>
            </div>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div className={classes.column} />
            <form className={classes.container} noValidate autoComplete="off">
              <TextField
                required
                id="outlined-required"
                label="Connection Id"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <TextField
                id="outlined-dense-multiline"
                label="Name & Address"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                multiline
                rowsMax="4"
              />

              <br></br>
              <TextField
                required
                id="outlined-required"
                label="RRNO"
                defaultValue=""
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
            </form>
          </ExpansionPanelDetails>
          <Divider />
        </ExpansionPanel>
      </div>
      <div className={classes.root}>
        <br></br>
        <center>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
          >
            Save
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            disabled
          >
            Print
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
          >
            Reset
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
          >
            Exit
          </Button>
        </center>
      </div>
    </div>
  );
}
