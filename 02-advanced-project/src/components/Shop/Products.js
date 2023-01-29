import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "My first Book", description: "This is a first book" },
  { id: "p2", price: 12, title: "My second Book", description: "This is a second book" },
  { id: "p3", price: 24, title: "My thrid Book", description: "This is a thrid book" },
  { id: "p4", price: 48, title: "My fourh Book", description: "This is a  fourh book" },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              description={product.descriptionq}
              price={product.price}
              id={product.id}
            />
          )
        })}
      </ul>
    </section>
  );
};

export default Products;
