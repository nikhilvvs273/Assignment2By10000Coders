import CartContext from '../../context/CartContext'
import Header from '../Header'
import ProductCard from '../ProductCard'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const onClickRemoveAllBtn = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            <div className="cart-content-container">
              <h1 className="cart-heading">My Cart</h1>
              <button
                type="button"
                className="button"
                onClick={onClickRemoveAllBtn}
              >
                Remove All
              </button>
              <ul className="cart-list">
                {cartList.map(eachCartItem => (
                  <ProductCard
                    key={eachCartItem.id}
                    productData={eachCartItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
