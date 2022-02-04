import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactUs from '../components/ContactUs'

const FAQ = () => {
  return (
    <>
      <Header />
      <div id="contactus">
        <section className="contactus-background">
          <div className="contactus-section">
            <h3 className='pt-4 fw-bold'>Contact Us</h3>
            <div className="tulastack-wallpapper">
              <img src="../img/5856871 1.png" alt="" />
            </div>
          </div>
        </section>
        <div className="go-paperless">
          <img src="../img/Group 5402.png" alt="" />
          <p>Go Paperless and add members <br/>from your contact or email<br/> address</p>
        </div>
      </div>
      <ContactUs />
      <Footer />
      
    </>
  )
}

export default FAQ
