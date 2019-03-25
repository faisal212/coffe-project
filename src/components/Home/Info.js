import React from 'react'
import { Link } from 'gatsby';
import TItle from '../Globals/TItle';


export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
                <TItle title="our story" />
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">

                        <p>
                            Consectetur et culpa commodo exercitation sint qui officia laborum commodo adipisicing. Aliqua ipsum minim sint magna irure excepteur cillum est aute. Ex excepteur elit mollit laborum excepteur amet ipsum proident velit deserunt aliqua ad excepteur. Exercitation mollit duis enim deserunt laborum ipsum aliquip. Eu dolor id amet pariatur anim.
                            Ex laboris nisi aliquip elit non sunt.
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
