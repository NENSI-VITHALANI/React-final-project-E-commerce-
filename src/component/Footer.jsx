const Footer = () => {
  return (
    <>
      <footer className="footer-light" >
        <div className="light-layout">
          <div className="container">
            <section className="small-section border-section border-top-0">
              <div className="row">
                <div className="col-lg-6">
                  <div className="subscribe">
                    <div>
                      <h4>KNOW IT ALL FIRST!</h4>
                      <p>Never Miss Anything From Multikart By Signing Up To Our Newsletter.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form action="https://pixelstrap.us19.list-manage.com/subscribe/post?u=5a128856334b598b395f1fc9b&id=082f74cbda" className="form-inline subscribe-form auth-form needs-validation" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank">
                    <div className="form-group mx-sm-3">
                      <input type="text" className="form-control" name="EMAIL" id="mce-EMAIL" placeholder="Enter your email" required="required" />
                    </div>
                    <button type="submit" className="btn btn-solid" id="mc-submit">subscribe</button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
        <section className="section-b-space light-layout">
          <div className="container">
            <div className="row footer-theme partition-f">
              <div className="col-lg-4 col-md-6">
                <div className="footer-title footer-mobile-title">
                  <h4>about</h4>
                </div>
                <div className="footer-contant">
                  <div className="footer-logo"><img src="https://themes.pixelstrap.com/multikart/assets/images/icon/logo.png" alt /></div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                  <div className="footer-social">
                    <ul>
                      <li><a href="#"><i className="fa fa-facebook-f" /></a></li>
                      <li><a href="#"><i className="fa fa-google-plus" /></a></li>
                      <li><a href="#"><i className="fa fa-twitter" /></a></li>
                      <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      <li><a href="#"><i className="fa fa-rss" aria-hidden="true" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col offset-xl-1">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>my account</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li><a href="#">mens</a></li>
                      <li><a href="#">womens</a></li>
                      <li><a href="#">clothing</a></li>
                      <li><a href="#">accessories</a></li>
                      <li><a href="#">featured</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>why we choose</h4>
                  </div>
                  <div className="footer-contant">
                    <ul>
                      <li><a href="#">shipping &amp; return</a></li>
                      <li><a href="#">secure shopping</a></li>
                      <li><a href="#">gallary</a></li>
                      <li><a href="#">affiliates</a></li>
                      <li><a href="#">contacts</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="sub-title">
                  <div className="footer-title">
                    <h4>store information</h4>
                  </div>
                  <div className="footer-contant">
                    <ul className="contact-list">
                      <li><i className="fa fa-map-marker" />Multikart Demo Store, Demo store India
                        345-659</li>
                      <li><i className="fa fa-phone" />Call Us: 123-456-7898</li>
                      <li><i className="fa fa-envelope" />Email Us: <a href="#">Support@Multikart.com</a>
                      </li>
                      <li><i className="fa fa-fax" />Fax: 123456</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </footer>

    </>
  )
}

export default Footer;