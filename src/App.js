import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import Products from './components/Products'
import ProductItemDetails from './components/ProductItemDetails'
import Cart from './components/Cart'
import CartContext from './context/CartContext'

import './App.css'

class App extends Component {
  state = {
    cartList: [],
  }

  removeAllCartItems = () => {
    this.setState({cartList: []})
  }

  removeCartItem = id => {
    const {cartList} = this.state
    const updatedCartList = cartList.filter(
      eachCartItem => eachCartItem.id !== id,
    )
    this.setState({cartList: updatedCartList})
  }

  addCartItem = product => {
    const {cartList} = this.state
    const updatedCartList = [...cartList, product]
    this.setState({cartList: updatedCartList})
  }

  render() {
    const {cartList} = this.state

    return (
      <CartContext.Provider
        value={{
          cartList,
          addCartItem: this.addCartItem,
          removeCartItem: this.removeCartItem,
          removeAllCartItems: this.removeAllCartItems,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductItemDetails} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
