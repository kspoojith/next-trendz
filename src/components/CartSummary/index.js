import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const getTotalPrice = () => {
        const prices = cartList.map(each => each.quantity * each.price)
        const sum = prices.reduce((acc, num) => acc + num, 0)
        return sum
      }
      return (
        <div className="class-summary-view">
          <div>
            <h1 className="summary-head">
              Order Total: <span>Rs {getTotalPrice()}/-</span>
            </h1>
            <p className="summary-para">
              {cartList.length} {cartList.length > 1 ? 'Items' : 'Item'} in Cart
            </p>
            <button className="Checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
