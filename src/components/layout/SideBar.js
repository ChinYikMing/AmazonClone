import React from 'react'
import './sideBar.css'
import { makeStyles } from '@material-ui/core'
import { connect } from 'react-redux'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles({
    accountIconStyle: {
        marginRight: '10px'
    },
    navigateIconStyle: {
        position: 'absolute',
        right: '5%',
        color: 'grey',
        '&:hover': {
            color: 'black'
        }
    }
})

function SideBar({ auth, displayName }) {
    const classes = useStyles();

    return (
        <div className="sidebar">
            <div className="top">
                <AccountCircleIcon className={classes.accountIconStyle} />
                Hello, {auth.uid ? displayName : 'Sign In'}
            </div>
            <div className="category-container">
                <div className="item text">
                    SHOP BY CATEGORY
                </div>
                <div className="item">
                    Amazon Music
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Echo & Alexa
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Fire Tablets
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Kindle E-readers & Books
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Appstore for Android
                    <NavigateNextIcon className={classes.navigateIconStyle} /></div>
                <div className="item">
                    Subscribe & Save
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Smart Home
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Amazon Physical Stores
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                    Gift Cards
                    </div>
                <div className="item">
                    #FoundItOnAmazon
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Amazon Subscription Boxes
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Amazon Live
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    International Shopping
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Baby
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
                <div className="item">
                    Arts & Crafts
                    <NavigateNextIcon className={classes.navigateIconStyle} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        displayName: state.firebase.profile.displayName
    }
}

export default connect(mapStateToProps, null)(SideBar)
