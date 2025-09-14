import Hero from "../SingleProduct/Hero";
import Product from '../SingleProduct/Product'
import ProductTabs from "../SingleProduct/ProductTabs";
import Appointment from '../Home/Appointment'



const SingleProduct = () => {
  return (
    <div>
        <Hero />
        <Product/>
        <ProductTabs />
        <Appointment />
    </div>
  )
}

export default SingleProduct