import React, { useEffect, useState } from 'react'
import axios from 'axios';
const Contact = () => {

  const[email,setEmail] = useState("");
  const[name,setName] = useState("");
  const[message,setMessage] = useState("");
  const[phone,setPhone]= useState("");
  const[lastname,setLastName] = useState("");
  const handleSubmit = () => {

    let contactRecord = axios.post(`http://localhost:8000/contacts`, {
        name: name,
        email: email,
        lastname:lastname,
        message:message,
        phone:phone
    });

    if (contactRecord) {
         alert("your detail succesfully Added..");
        setName("");
        setEmail("");
        setLastName("");
        setPhone("");
        setMessage("");

    } else {
        alert("some error occured");
        return false;
    }
}

  return (
    <div>
      <div className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="page-title">
                <h2>contact</h2>
              </div>
            </div>
            <div className="col-sm-6">
              <nav aria-label="breadcrumb" className="theme-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                  <li className="breadcrumb-item active">contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-page section-b-space" style={{ fontSize: '18px' }}>
        <div className="container">
          <div className="row section-b-space">
            <div className="col-lg-7 map">
              <iframe src="maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321" allowFullScreen />
            </div>
            <div className="col-lg-5">
              <div className="contact-right">
                <ul>
                  <li>
                    <div className="contact-icon"><img src="https://themes.pixelstrap.com/multikart/assets/images/icon/phone.png" alt="Generic placeholder image" />
                      <h6>Contact Us</h6>
                    </div>
                    <div className="media-body">
                      <p>+91 123 - 456 - 7890</p>
                      <p>+86 163 - 451 - 7894</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon"><i className="fa fa-map-marker" aria-hidden="true" />
                      <h6>Address</h6>
                    </div>
                    <div className="media-body">
                      <p>ABC Complex,Near xyz, New York</p>
                      <p>USA 123456</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon"><img src="https://themes.pixelstrap.com/multikart/assets/images/icon/email.png" alt="Generic placeholder image" />
                      <h6>Address</h6>
                    </div>
                    <div className="media-body">
                      <p>Support@Shopcart.com</p>
                      <p>info@shopcart.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="contact-icon"><i className="fa fa-fax" aria-hidden="true" />
                      <h6>Fax</h6>
                    </div>
                    <div className="media-body">
                      <p>Support@Shopcart.com</p>
                      <p>info@shopcart.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <form className="theme-form">
                <div className="form-row row">
                  <div className="col-md-6">
                    <label htmlFor="name">First Name</label>
                    <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Enter Your name" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Last Name</label>
                    <input type="text" value={lastname} name="lastname" onChange={(e) => setLastName(e.target.value)} className="form-control" placeholder="Email" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="review">Phone number</label>
                    <input type="text" value={phone} name="phone" onChange={(e) => setPhone(e.target.value)} className="form-control" placeholder="Enter your number" required />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="email">Email</label>
                    <input type="text"   value={email} name="email" onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder="Email" required />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="review">Write Your Message</label>
                    <textarea style={{ fontSize: '18px' }} value={message} name="message" onChange={(e) => setMessage(e.target.value)} className="form-control" placeholder="Write Your Message" rows={6} defaultValue={""} />
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-solid" onClick={() =>  handleSubmit()} type="button">Send Your Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact;
