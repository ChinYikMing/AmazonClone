import React, { useState, useEffect } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import orange from '@material-ui/core/colors/orange';
import LanguageIcon from '@material-ui/icons/Language';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './navBar.css'
import { signOut } from '../../redux'
import { getFirestore } from 'redux-firestore'
import { CircularProgress } from '@material-ui/core'
import SideBar from './SideBar'
import CloseIcon from '@material-ui/icons/Close'

const useStyles = makeStyles({
    menuIconStyle: {
        color: 'white',
        margin: 12,
        '&:hover': {
            cursor: 'pointer',
            border: '1px solid white'
        }
    },
    searchIconStyle: {
        backgroundColor: orange[300],
        height: '100%',
        width: 35
    },
    languageIconStyle: {
        color: 'white',
    },
    shoppingCartIconStyle: {
        color: 'white',
    },
    closeIconStyle: {
        position: 'absolute',
        right: '0',
        color: '#FFF',
        zIndex: 3,
        '&:hover': {
            cursor: 'pointer'
        }
    }
})

function NavBar({ signOut, auth, displayName }) {
    const classes = useStyles();

    const [sideBar, setSideBar] = useState(false);
    const [itemCount, setItemCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (auth.uid) {
            let itemsFromDb = [];
            const db = getFirestore();
            const cartsDb = db.collection('carts').doc(`${auth.uid}`).collection('carts');

            return cartsDb.onSnapshot(snapshot => {
                snapshot.forEach(doc => {
                    itemsFromDb.push(doc.data());
                });

                setItemCount(itemsFromDb.length);

                if (loading) {
                    setLoading(false);
                    itemsFromDb = [];
                }
            });
        } else
            setLoading(false);
    }, [])

    const signOutHandler = () => {
        signOut();
        setItemCount(0);
    }

    const setSideBarAppearHandler = () => {
        const body = document.getElementsByTagName('body')[0];
        const overlayLayer = document.getElementById('overlay');
        overlayLayer.style.display = 'block';
        body.style.overflow = 'hidden';
        setSideBar(true);

        overlayLayer.addEventListener('click', () => {
            overlayLayer.style.display = 'none';
            body.style.overflow = 'auto';
            setSideBar(false);
        })

    }

    const setSideBarDisappearHandler = () => {
        const body = document.getElementsByTagName('body')[0];
        const overlayLayer = document.getElementById('overlay');
        overlayLayer.style.display = 'none';
        body.style.overflow = 'auto';
        setSideBar(false);

        overlayLayer.removeEventListener('click', () => {
            overlayLayer.style.display = 'block';
            body.style.overflow = 'hidden';
            setSideBar(true);
        })
    }

    return (
        <>
            {/* the sidebar-container is styled in navBar.css */}
            <div
                className="sidebar-container"
                style={{ visibility: sideBar ? 'visible' : 'hidden' }}
            >
                <SideBar />
                <CloseIcon
                    fontSize="large"
                    className={classes.closeIconStyle}
                    onClick={() => setSideBarDisappearHandler()}
                />
            </div>
            <div className="navbar" >
                <div className="menu-and-logo-container">
                    <MenuIcon
                        className={classes.menuIconStyle}
                        fontSize='large'
                        onClick={() => setSideBarAppearHandler()}
                    />
                    <Link to='/'>
                        <img
                            className="navbar-logo"
                            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                            alt="Amazon Logo"
                        />
                    </Link>
                </div>
                <div className="searchbox">
                    <input type="text" className="search-input" />
                    <SearchIcon className={classes.searchIconStyle} />
                </div>
                <div className="nav-link">
                    <LanguageIcon className={classes.languageIconStyle} />
                    {auth.uid ? (
                        <Link to='/' className="link" onClick={() => signOutHandler()}>
                            <div>
                                <div className="text-1">Hello, {displayName}</div>
                                <div className="text-2">Sign Out</div>
                            </div>
                        </Link>
                    ) : (
                            <Link to='/signin' className="link">
                                <div>
                                    <div className="text-1">Hello, user</div>
                                    <div className="text-2">Sign In</div>
                                </div>
                            </Link>
                        )}

                    <Link to='/signin' className="link">
                        <div>
                            <div className="text-1">Returns</div>
                            <div className="text-2">& Orders</div>
                        </div>
                    </Link>

                    <Link to='/cart' className="link cart-link">
                        <ShoppingCartIcon
                            fontSize="large"
                            className={classes.shoppingCartIconStyle}
                        />
                        <div>
                            {loading ? (
                                <div><CircularProgress /></div>
                            ) : (
                                    <div className="item-count">{itemCount}</div>
                                )}
                            <div className="text-2">Cart</div>
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        displayName: state.firebase.profile.displayName
    }
}

const mapDispatchToProps = dispatch => {
    return {
        signOut: () => dispatch(signOut())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
