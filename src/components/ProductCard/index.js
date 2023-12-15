import {Link} from 'react-router-dom'

import './index.css'

const ProductCard = props => {
  const {productData} = props
  const {image, title, id} = productData

  return (
    <li className="product-item">
      <img src={image} alt="product" className="thumbnail" />
      <h1 className="title">{title}</h1>
      <Link to={`/products/${id}`}>
        <button type="button" className="button">
          See More
        </button>
      </Link>
    </li>
  )
}

export default ProductCard
