import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { func } from "prop-types";

const useStyles = makeStyles(theme => ({
    root: {flexGrow: 1,},
    menuButton: {marginRight: theme.spacing(2),},
    title: {flexGrow: 1,},
}));

export default function MenuAppBar(){
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    function handleChange(event){
        setAuth(event.target.checked);
    }

    function handleMenu(event){
        setAnchorEl(event.currentTarget);
    }

    function handleClose(event){
        setAnchorEl(null);
    }

    return (
        <div className={classes.root}>
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={auth} onChange={handleChange} aria-label="login switch"/> }
                    label={auth ? 'Logout' : 'Login'}
            />
            </FormGroup>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    )
}