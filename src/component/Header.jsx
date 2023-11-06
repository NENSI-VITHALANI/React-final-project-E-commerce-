import { NavLink } from 'react-router-dom'
const Header = () => {
  return (

    <>
      <header>
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header-contact">
                  <ul>
                    <li>Welcome to Our store Multikart</li>
                    <li><i className="fa fa-phone" aria-hidden="true" />Call Us: 123 - 456 - 7890</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 text-end">
                <ul className="header-dropdown">
                  <li className="mobile-wishlist"><a href="#"><i className="fa fa-heart" aria-hidden="true" /></a>
                  </li>
              
                  <li class="onhover-dropdown mobile-account">
                                <i class="fa fa-user" aria-hidden="true"></i> My Account
                                <ul class="onhover-show-div">
                                    <li><NavLink to='./login'>login</NavLink></li>
                                    <li>      <NavLink to='./register'>register</NavLink></li>
                                    
                                </ul>
                            </li>

                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-menu">
                <div className="menu-left">
                  <div className="navbar">
                    <div>
                      <div className="bar-style"><i className="fa fa-bars sidebar-bar" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  <div className="brand-logo">
                    <div><img src="https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png" className="img-fluid  lazyload" alt /></div>
                  </div>
                </div>
                <div className="menu-right pull-right">
                  <div>
                    <nav>
                      <div className="toggle-nav"><i className="fa fa-bars sidebar-bar" /></div>
                      <ul className="sm pixelstrap sm-horizontal">
                        <li>
                          <div className="mobile-back text-end">Back<i className="fa fa-angle-right ps-2" aria-hidden="true" /></div>
                        </li>
                        <li>
                          <NavLink to='/'>Home</NavLink>
                        </li>
                        <li>
                          <NavLink to='/product' >Product<div className="lable-nav">new</div></NavLink>
                        </li>
                        <li>
                          <NavLink >Product Details</NavLink>
                        </li>
                        <li>
                        <NavLink to={`/cart`} >Cart</NavLink>
                        </li>
                        <li>
                          <NavLink to={`/contact`}>Contact</NavLink>
                        </li>
                
                

                      </ul>
                    </nav>
                  </div>
                  <div>
                    <div className="icon-nav d-none d-sm-block">
                      <ul>
                        <li className="onhover-div mobile-search">
                          <div><img src="https://themes.pixelstrap.com/multikart/assets/images/icon/search.png" className="img-fluid  lazyload" alt /> <i className="ti-search" /></div>
                        </li>
                        <li className="onhover-div mobile-setting">
                          <div><NavLink to='./userdata'><img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" height={32} width={32} className="img-fluid lazyload" alt /></NavLink> </div>
                        
                        </li>
                        <li className="onhover-div mobile-cart">
                          <div><img src="https://themes.pixelstrap.com/multikart/assets/images/icon/cart.png" className="img-fluid  lazyload" alt /> <i className="ti-shopping-cart" /></div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>



    </>


  )
}

export default Header;