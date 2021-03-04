import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import SpecificCategoryProduct from '../specificCategory/SpecificCategoryProduct'
import StarIcon from '@material-ui/icons/Star'
import './cart.css'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { getFirestore } from 'redux-firestore'
import { CircularProgress } from '@material-ui/core'

const useStyle = makeStyles({
    checkoutButtonStyle: {
        backgroundColor: '#F0C14B',
        fontSize: 10,
        marginTop: 10,
        '&:hover': {
            backgroundColor: '#F0D04B'
        }
    },
})

function Cart(props) {
    const classes = useStyle();
    const auth = props.auth;
    const [loading, setLoading] = useState(true);
    const [cart, setCart] = useState([]);
    const [itemCount, setItemCount] = useState(0);
    const [subtotal, setSubtotal] = useState(0.00);

    useEffect(() => {
        if (auth.uid) {
            let itemsFromDb = [];
            const db = getFirestore();
            const cartsDb = db.collection('carts').doc(`${auth.uid}`).collection('carts');

            return cartsDb.onSnapshot(snapshot => {
                snapshot.forEach(doc => {
                    const data = doc.data();
                    data.id = doc.id;
                    itemsFromDb.push(data);
                });

                setCart(itemsFromDb);
                setItemCount(itemsFromDb.length);
                setSubtotal(itemsFromDb.reduce((total, item) => total + parseFloat(item.price), 0));

                if (loading){
                    setLoading(false);
                    itemsFromDb = [];
                }
            });
        }
    }, [])

    if (!auth.uid)
        return <Redirect to='/signin' />

    if (loading)
        return <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress /></div>

    return (
        <div className="cart-container">
            <div className="cart-list">
                {
                    cart.length === 0 ?
                        (
                            <div className="cart-empty-text">Your cart is empty</div>
                        ) : (
                            <div className="cart-text">Your cart</div>
                        )
                }
                {
                    cart.length >= 1 && cart.map((item, index) =>
                        <React.Fragment key={index}>
                            <SpecificCategoryProduct
                                itemId={item.id}
                                imgSrc={item.imgSrc}
                                title={item.title}
                                producer={item.producer}
                                shipDestination={item.shipDestination}
                                price={item.price}
                                inCart="true"
                            >
                                <StarIcon />
                            </SpecificCategoryProduct>
                            <hr />
                        </React.Fragment>
                    )
                }
            </div>
            <div className="cart-summary">
                <div className="cart-subtotal">
                    Subtotal({itemCount} {itemCount > 1 ? 'items' : 'item'}): <span>${subtotal}</span>
                </div>
                <div className="cart-gift-checkbox">
                    <input type="checkbox" id="gift" name="gift" />
                    <label htmlFor="gift">This order contains a gift</label>
                </div>
                <Button fullWidth className={classes.checkoutButtonStyle}>
                    Proceed to Checkout
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps, null)(Cart)
