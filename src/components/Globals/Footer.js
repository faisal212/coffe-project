import React from 'react'

export default function Footer() {
    return (
        <footer className="footer py-3">
            <dic className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 text-yellow text-center text-capitalize">
                        <h>All rights reserved &copy; {new Date().getFullYear().toString()}</h>
                    </div>
                </div>
            </dic>
        </footer>
    )
}
