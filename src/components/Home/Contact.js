import React from 'react'
import TItle from '../Globals/TItle';

export default function Contact() {
    return (
        <section className="contact py-5">
            <TItle title="contact us" />
            <div className="row">
                <div className="col-10 col-sm-7 col-md-6 mx-auto">
                    <form action="https://formspree.io/faisalaqdas@gmail.com" method="POST">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="faisal aqdas" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="email@email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" name="description" id="description" rows="5" placeholder="your description here..." />
                        </div>
                        <button type="submit" className="btn btn-yellow btn-block text-capitaize mt-5">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
