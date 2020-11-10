import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div>
      
        <nav className="navbar navbar-expand-lg navbar-dark primary-color">
          {/* Navbar brand */}
          <i class="fas fa-layer-group"></i><a className="navbar-brand" href="#">Categories</a>
          {/* Collapse button */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapsible content */}
          <div className="collapse navbar-collapse" id="basicExampleNav">
            {/* Links */}
            <ul className="navbar-nav mr-auto">

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vehicles</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Tractors & Trailers</a>
                  <a className="dropdown-item" href="#">Boats</a>
                  <a className="dropdown-item" href="#">Rickshaw & Chingchi</a>
                  <a className="dropdown-item" href="#">Buses, Vans & Trucks</a>
                  <a className="dropdown-item" href="#">Cars on Installments</a>
                  <a className="dropdown-item" href="#">Cars</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Mobiles</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Mobile Phones</a>
                  <a className="dropdown-item" href="#">Accessories</a>
                  <a className="dropdown-item" href="#">Tablets</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Electronics & Home Appliances</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Washing Machines & Dryers</a>
                  <a className="dropdown-item" href="#">Fridges & Freezers</a>
                  <a className="dropdown-item" href="#">AC & Coolers</a>
                  <a className="dropdown-item" href="#">Kitchen Appliances</a>
                  <a className="dropdown-item" href="#">Generators, UPS & Power Solutions</a>
                  <a className="dropdown-item" href="#">Cameras & Accessories</a>
                  <a className="dropdown-item" href="#">Cameras & Accessories</a>
                  <a className="dropdown-item" href="#">Games & Entertainment</a>
                  <a className="dropdown-item" href="#">Computers & Accessories</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Property for Sale</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Portions & Floors</a>
                  <a className="dropdown-item" href="#">Shops - Offices - Commercial Space</a>
                  <a className="dropdown-item" href="#">Apartments & Flats</a>
                  <a className="dropdown-item" href="#">Houses</a>
                  <a className="dropdown-item" href="#">Land & Plots</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Animals</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Pet Food & Accessories</a>
                  <a className="dropdown-item" href="#">Horses</a>
                  <a className="dropdown-item" href="#">Livestock</a>
                  <a className="dropdown-item" href="#">Dogs</a>
                  <a className="dropdown-item" href="#">Cats</a>
                  <a className="dropdown-item" href="#">Hens & Aseel</a>
                  <a className="dropdown-item" href="#">Birds</a>
                  <a className="dropdown-item" href="#">Fish & Aquariums</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Furniture & Home Decor</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Office Furniture</a>
                  <a className="dropdown-item" href="#">Curtains & Blinds</a>
                  <a className="dropdown-item" href="#">Rugs & Carpets</a>
                  <a className="dropdown-item" href="#">Painting & Mirrors</a>
                  <a className="dropdown-item" href="#">Garden & Outdoor</a>
                  <a className="dropdown-item" href="#">Tables & Dining</a>
                  <a className="dropdown-item" href="#">Home Decoration</a>
                  <a className="dropdown-item" href="#">Beds & Wardrobes</a>
                  <a className="dropdown-item" href="#">Sofa & Chairs</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Business, Industrial & Agriculture</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Medical & Pharma</a>
                  <a className="dropdown-item" href="#">Agriculture</a>
                  <a className="dropdown-item" href="#">Construction & Heavy Machinery</a>
                  <a className="dropdown-item" href="#">Trade & Industrial</a>
                  <a className="dropdown-item" href="#">Food & Restaurants</a>
                  <a className="dropdown-item" href="#">Business for Sale</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Bikes</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Scooters</a>
                  <a className="dropdown-item" href="#">ATV & Quads</a>
                  <a className="dropdown-item" href="#">Bicycles</a>
                  <a className="dropdown-item" href="#">Spare Parts</a>
                  <a className="dropdown-item" href="#">Motorcycles</a>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Fashion & Beauty</a>
                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Couture</a>
                  <a className="dropdown-item" href="#">Lawn & Pret</a>
                  <a className="dropdown-item" href="#">Wedding</a>
                  <a className="dropdown-item" href="#">Watches</a>
                  <a className="dropdown-item" href="#">Skin & Hair</a>
                  <a className="dropdown-item" href="#">Make Up</a>
                  <a className="dropdown-item" href="#">Jewellery</a>
                  <a className="dropdown-item" href="#">Footwear</a>
                  <a className="dropdown-item" href="#">Clothes</a>
                  <a className="dropdown-item" href="#">Accessories</a>
                </div>
              </li>

            </ul>

          </div>

          {/* Collapsible content */}
        </nav>
        <br/>
        <br/>


        <div>
        <img src="https://statics.olx.com.pk/external/base/img/hero_bg_pk.jpg" width="100%" height="100%" />
        </div>



      </div>




    )
  }
}

export default Navbar;