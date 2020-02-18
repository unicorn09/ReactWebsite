import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LoadingBar from 'react-top-loading-bar'; 

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { Input } from '@material-ui/core';

import fire from './firebaseConfig';

const styles = (theme => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

class Login extends React.Component{

 
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
   
    this.signup = this.signup.bind(this);
    
    this.state = {
      email: '',
      password: ''
    };
  }
   Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Harsh Raj
        </Link>{' '}
      
      </Typography>
    );
  }
 
  changeValue(e, type) {
    const value = e.target.value;
    const nextState = {};
    nextState[type] = value;
    this.setState(nextState);
}

  login(e) {
    e.preventDefault();
    this.LoadingBar.continuousStart();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      
    }).catch((error) => {
        console.log(error);
      });
      this.LoadingBar.complete();
  }

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    
    return (
//        <div className="col-md-6">
//        <form>
//       <div class="forms-group">
//        <label for="exampleInputEmail1">Email address</label>
//        <input value={this.state.email} onChange={this.handleChange} type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
//       </div>
//        <div class="form-group">
//       <label for="exampleInputPassword1">Password</label>
//       <input value={this.state.password} onChange={this.handleChange} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
//       </div>
//       <button type="submit" onClick={this.login} class="btn btn-primary">Login</button>
//       <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
//  </form>
//  </div> 

<Grid container component="main" className={this.props.classes.root}>
<CssBaseline />
<Grid item xs={false} sm={4} md={7} className={this.props.classes.image} />
<Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
  <div className={this.props.classes.paper}>
  <LoadingBar
          height={3}
          color='#f11946'
          onRef={ref => (this.LoadingBar = ref)}
        />
    <Avatar className={this.props.classes.avatar}>
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign in
    </Typography>
    <form className={this.props.classes.form} noValidate>
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        id="exampleInputEmail1"
        label="Email Address"
        type="email"
        autoFocus
        value={this.state.email}
        errorText={this.state.password_error_text}
        onChange={e => this.changeValue(e, 'email')}
        onBlur={this.isDisabled} 
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Password"
        type="password"
        id="exampleInputPassword1"
        value={this.state.password}
        errorText={this.state.password_error_text}
        onChange={e => this.changeValue(e, 'password')}
        onBlur={this.isDisabled} 
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={this.props.classes.submit}
        onClick={this.login}

      >
        Sign In
      </Button>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={this.props.classes.submit}
        onClick={this.signup}

      >
        Sign Up
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
      <Box mt={5}>
        <this.Copyright />
      </Box>
    </form>
  </div>
</Grid>
</Grid>
    );
  }
}
export default withStyles(styles)(Login);