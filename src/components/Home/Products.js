import React from 'react'
import Product from './Product';
import { StaticQuery, graphql } from "gatsby";
import TItle from '../Globals/TItle';


const query = graphql`
{
  products: allContentfulCoffeeProducts {
    edges {
      node {
        id
        title
        price
        image{
          fluid(maxHeight:426){
            src
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
}
`;

export default function Products() {
  return (
    <div>
      <StaticQuery query={query} render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <TItle title="Our Products" />
              <div className="row">
                {
                  data.products.edges.map(({ node: product }) => {
                    return <Product key={product.id} product={product} />
                  })
                }
              </div>
            </div>
          </section>
        )
      }} />
    </div>
  )
}
