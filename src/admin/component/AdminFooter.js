import React from 'react'

const AdminFooter = () => {
  return (
    <footer className="footer py-4 bg-secondary-subtle">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 footer-copyright text-start">
            <p className="mb-0 h6 " style ={{color:"#777"}}>Copyright 2019 © Multikart All rights reserved.</p>
          </div>
          <div className="col-md-6 pull-right text-end">
            <p className=" mb-0 h6" style ={{color:"#777"}}>Hand crafted &amp; made with<i className="fa fa-heart" /></p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AdminFooter