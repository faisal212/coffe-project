import React, { Component } from 'react'
import Title from "../Globals/TItle";
import Img from "gatsby-image";

const getCategories = items => {
    let tempItems = items.map(items => items.node.category)
    let categories = Array.from(new Set(tempItems));
    categories = ["all", ...categories];
    return categories;
}
export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items.edges,
            coffeItems: props.items.edges,
            categories: getCategories(props.items.edges)
        }
    }

    handleItem = (category) => {
        let tempItems = [...this.state.items];
        if (category === "all") {
            this.setState({ coffeItems: tempItems })
        } else {
            let items = tempItems.filter(({ node }) => node.category === category);
            this.setState({
                coffeItems: items
            });
        }
    }
    render() {
        console.log(this.state.categories);
        const { items, coffeItems } = this.state;

        if (items.length > 0) {
            return (
                <section className="container">
                    <Title title="best of our menu"></Title>
                    {/* categories */}
                    <div className="row mb-5">
                        <div className="col-10 mx-auto text-center">
                            {this.state.categories.map((category, index) => {
                                return (<button type="button" key={index} className="btn btn-yellow text-capitalize m-3" onClick={() => this.handleItem(category)}>{category}</button>)
                            })}
                        </div>
                    </div>
                    {/* item */}
                    <div className="row">
                        {coffeItems.map(({ node }) => (
                            <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                <div>
                                    <Img fixed={node.image.fixed}></Img>
                                </div>
                                <div className="d-flex-grow-1 px-3">
                                    <div className="d-flex justify-content-between">
                                        <h6 className="mb-0"><small>{node.title}</small></h6>
                                        <h6 className="mb-0 text-yellow">$<small>{node.price}</small></h6>
                                    </div>
                                    <p className="text-muted">
                                        <small>{node.description.description}</small>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </section>
            )
        } else {
            return (
                <section className="container">
                    <Title title="best of our menu"></Title>
                    <div className="row">
                        <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                            <h1>there are no items to display</h1>
                        </div>
                    </div>
                </section>
            )
        }
    }
}
