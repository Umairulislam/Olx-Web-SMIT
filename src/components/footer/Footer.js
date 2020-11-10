import React from 'react';

class Footer extends React.Component {
    render() {
        return (

            <footer className="page-footer font-small stylish-color-dark pt-4">
                {/* Footer Links */}
                <div className="container text-center text-md-left">
                    {/* Grid row */}
                    <div className="row">
                        <hr className="clearfix w-100 d-md-none" />
                        <div className="col-md-2 mx-auto">
                            {/* Links */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">POPULAR CATEGORIES</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Cars</a>
                                </li>
                                <li>
                                    <a href="#!">Flats for rent</a>
                                </li>
                                <li>
                                    <a href="#!">Jobs</a>
                                </li>
                                <li>
                                    <a href="#!">Mobile Phones</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        <div className="col-md-2 mx-auto">
                            {/* Links */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">TRENDING SEARCHES</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Bikes</a>
                                </li>
                                <li>
                                    <a href="#!">Waches</a>
                                </li>
                                <li>
                                    <a href="#!">Books</a>
                                </li>
                                <li>
                                    <a href="#!">Dogs</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        <hr className="clearfix w-100 d-md-none" />
                        {/* Grid column */}
                        <div className="col-md-2 mx-auto">
                            {/* Links */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">ABOUT US</h5>
                            <br />
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">About OLX Group</a>
                                </li>
                                <li>
                                    <a href="#!">OLX Blog</a>
                                </li>
                                <li>
                                    <a href="#!">Contact Us</a>
                                </li>
                                <li>
                                    <a href="#!">OLX for Businesses</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        <hr className="clearfix w-100 d-md-none" />
                        {/* Grid column */}
                        <div className="col-md-2 mx-auto">
                            {/* Links */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">OLX</h5>
                            <br />
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Help</a>
                                </li>
                                <li>
                                    <a href="#!">Sitemap</a>
                                </li>
                                <li>
                                    <a href="#!">Legal & Privacy information</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
                {/* Footer Links */}
                <hr />
                {/* Call to action */}
                <ul className="list-unstyled list-inline text-center py-2">
                    <li className="list-inline-item">
                        <h5 className="mb-1">Follow Us</h5>
                    </li>
                </ul>
                {/* Call to action */}
                <hr />
                {/* Social buttons */}
                <ul className="list-unstyled list-inline text-center">
                    <li className="list-inline-item">
                        <a className="btn-floating btn-fb mx-1" href="https://www.facebook.com/olxpakistan">
                            <i className="fab fa-facebook-f"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-tw mx-1" href="https://twitter.com/OLX_Pakistan">
                            <i className="fab fa-twitter"> </i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-gplus mx-1" href="https://www.youtube.com/channel/UCARDDjJnW7IRBpo_AP7WTHQ?sub_confirmation=1">
                            <i class="fab fa-youtube"></i>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a className="btn-floating btn-dribbble mx-1" href="https://www.instagram.com/olx.pakistan/">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                {/* Social buttons */}
                {/* Copyright */}
                <div className="footer-copyright text-center py-3">Other Countries India - South Africa - Indonesia

                    <a href="https://www.olx.com.pk/"> Free Classifieds in Pakistan. © 2006-2020 OLX</a>
                </div>
                {/* Copyright */}
            </footer>

        )
    }
}

export default Footer;