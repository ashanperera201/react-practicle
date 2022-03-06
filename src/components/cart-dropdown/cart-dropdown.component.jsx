import React from 'react';
import { createStructuredSelector } from 'reselect';
import './cart-dropdown.component.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    (cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                    :
                    <span className="empty-message">Your cart is empty</span>
            }
        </div>
        {
            cartItems.length ?
                (<CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()) }}>GO TO CHECKOUT</CustomButton>)
                :
                null
        }

    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));