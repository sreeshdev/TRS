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
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
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
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  button: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 100
  },
  root: {
    display: "flex",
    alignItems: "left",
    justifyContent: "left",
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
    alignItems: "left",
    justifyContent: "left",
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
    alignItems: "left"
  },
  column: {
    // flexBasis: "15.33%"
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

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

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
          <form className={classes.root} autoComplete="off">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
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
                <MenuItem value={10}>Shikaripura</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel ref={inputLabel} htmlFor="outlined-age-simple">
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
                required
                id="outlined-required"
                label="RRNO"
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
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="Last-Issue-Date"
                  label="Last Issue Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>

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
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="due-date"
                  label="Due Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>

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
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="reading-date"
                  label="Reading Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
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
                <TableBody>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      KWH
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        required
                        id="outlined-required"
                        label=""
                        defaultValue="0.0"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        required
                        id="outlined-required"
                        label=""
                        defaultValue="0.0"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        required
                        id="outlined-required"
                        label=""
                        defaultValue="0.0"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      KVAH
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        required
                        id="outlined-required"
                        label=""
                        defaultValue="0.0"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        required
                        id="outlined-required"
                        label=""
                        defaultValue="0.0"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        required
                        id="outlined-required"
                        label=""
                        defaultValue="0.0"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                  <StyledTableRow>
                    <StyledTableCell component="th" scope="row">
                      LT
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        required
                        id="outlined-required"
                        label=""
                        defaultValue="0.0"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        required
                        id="outlined-required"
                        label=""
                        defaultValue="0.0"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <TextField
                        required
                        id="outlined-required"
                        label=""
                        defaultValue="0.0"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                      />
                    </StyledTableCell>
                  </StyledTableRow>
                </TableBody>
              </Table>
            </Paper>

            <br></br>

            <div>
              <br></br>
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
                  required
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
            <Table className={classes.table}>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Billing Charges
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <TextField
                      required
                      id="outlined-required"
                      label="Fixed Charges"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="Energy Charges"
                      label="Energy Charges"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="LTEC"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="FAC"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Excess Demand"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="PF Penalty"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Discount
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <TextField
                      required
                      id="outlined-required"
                      label="GOK Discount"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Customer Discount"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Other Charges
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <TextField
                      required
                      id="outlined-required"
                      label="Tax"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Other Charges"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Withdrawal Amount
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <TextField
                      required
                      id="outlined-required"
                      label="Customer"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="GOK"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Arrears
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <TextField
                      required
                      id="outlined-required"
                      label="Revenue Arrears"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Interest Arrears"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Tax Arrears"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="GOK Arrears"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    Interest
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <TextField
                      required
                      id="outlined-required"
                      label="Revenue Interest"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="Tax Interest"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                    <TextField
                      required
                      id="outlined-required"
                      label="GOK Rev Interest"
                      defaultValue=""
                      className={classes.textField}
                      margin="normal"
                      variant="outlined"
                    />
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
            <br></br>
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
