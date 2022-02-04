import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import FAQ from './FAQ';
import ContactUsPage from '../pages/ContactUsPage';
import Signin from './Signin';


export default function Index() {
  return (
    <>
      <div>
        <Header />
        <section id='header-top'>
          <div id='header-mask'>
            <div className='left'>
                <p>Go Paperless</p>
                <h1>Start controlling your finances in a seamless way</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Dolor, <br/>tellus arcu at ut arcu et amet. Amet, non nisl odio
                  lectus nunc, <br/>etiam nisl,{' '}
                </p>
              <div>
                <button>Get Started</button>
              </div>
            </div>
            <div className='right'>
              <div className='image-4'></div>
              <div className='image-3'></div>
              <div className='image-2'></div>
              <div className='image-1'></div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="whychooseus">Why Choose Us?</h3>

          <div className="whychooseus-section">
            <div className="whychooseus-text">
              <h3>We oberve that Nigeria in growing<br/> in the informal section.</h3>
              <p>Amet minim mollit non deserunt ullamco est sit <br/>aliqua dolor do amet sint. 
                Velit officia consequat <br/>duis enim velit mollit. Exercitation veniam <br/>consequat sunt nostrud amet.</p>
              <button>Get Started</button>
            </div>
            <div className="whychooseus-image">
              <img src="../img/Group 5400.jpg" alt="" />
            </div>
          </div>
          <img className="weird-image-1" src="../img/Transparency.png" alt="" />
          <img className="weird-image-2" src="../img/Transparency.png" alt="" />
        </section>

        <section>
          <div className="whychooseus-section-2">
            <div className="whychooseus-image-2">
              <img src="../img/Group 5401.png" alt="" />
            </div>
            <div className="whychooseus-text-2">
              <h3>We have developed a platform <br /> where all these sections can have <br /> access to digital transaction</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua <br /> dolor do amet sint. Velit officia consequat duis enim <br /> velit mollit. Exercitation veniam consequat sunt <br /> nostrud amet.</p>
              <button>Get Started</button>
            </div>
          </div>
          <img className="weird-image-3" src="../img/Transparency.png" alt="" />
          <img className="weird-image-4" src="../img/Transparency.png" alt="" />
        </section>


        
        <section className="tula-logo">
          <div className="tula-logo-section">
            <div className="tula-logo-text">
              <p>Be accountable </p>
              <h3>Be accountable and save up your <br/> invoice to be eligible for loans </h3>
              <button>Check FAQ</button>
            </div>
            <div className="tula-logo-image">
              <img src="../img/Group 5403.png" alt="" />
            </div>
          </div>
        </section>

        <section className="trusted">
          <span>Trusted by </span><span className="orange-text">thousands of businesses</span><br/><span>owners in many countries</span>
        </section>

        <section>
          <div className="world"></div>
        </section>


        <ContactUs />
        <Footer />
        {/* <FAQ />
        <ContactUsPage />
        <Signin /> */}
      </div>
    </>
  );
}
