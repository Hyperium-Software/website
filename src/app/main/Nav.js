import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Example from '../pages/Example.js';
import Home from '../pages/Home.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    nav: {
        backgroundColor: '#2980b9',
    }
}));

function Nav() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>

                <AppBar className={classes.nav} position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>


                        <Typography variant="h6" className={classes.title}>


                            Hyperium Software Development
                        </Typography>

                        <Link to="/">Home</Link>
                        <Link to="/example">Example</Link>
                    </Toolbar>
                </AppBar>

                <Switch>


                    <Route path="/example" render={HomeFunc} />
                    <Route path="/" render={ExampleFunc} />


                    <Route path="/">
                         {<HomeFunc />}
                    </Route>

                    <Route path="/Example">
                        {<ExampleFunc />}
                    </Route>

                </Switch>

            </div>
        </Router>


    );
}

function HomeFunc() {
    console.log("Home func")
    return <Home />;
}

function ExampleFunc() {
    console.log("ExampleFunc")
    return <Example />;
}

export default Nav