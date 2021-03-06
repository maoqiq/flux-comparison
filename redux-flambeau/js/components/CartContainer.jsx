import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTotal, getCartProducts } from '../reducers';
import Cart from '../../../common/components/Cart.jsx';

class CartContainer extends Component {
    render() {
        const { products, total, connectedActionSets: { Cart: CartActions } } = this.props;
        return (
            <Cart
                products={products}
                total={total}
                onCheckoutClicked={() => CartActions.checkout({ products })}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        products: getCartProducts(state),
        total: getTotal(state)
    };
}

export default connect(
    mapStateToProps
)(CartContainer);
