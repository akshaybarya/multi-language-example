import { useState, useEffect } from 'react';

import Image from 'next/image';

import logo1 from '../public/slide-img.png';
import logo2 from '../public/logo.png';

import { getContent, setLanguage as setConstantLanguage, getLanguage } from '../utils/helper';
import { TITLE1, TITLE2, DESCRIPTION, CONTACT_US, SHOP_NOW, HOME, CHANGE_LANGAUGE, FRUITS } from '../utils/content';
import { LANGUAGE } from '../utils/constant';

const Home = () => {
  const [language, setLanguage] = useState(getLanguage());

  useEffect(() => {
    setConstantLanguage(language);
  }, [language])

  const changeLanguage = () => {
    switch(language) {
      case LANGUAGE.ENGLISH: 
        setLanguage(LANGUAGE.HINDI);
        break;

      case LANGUAGE.HINDI:
        setLanguage(LANGUAGE.ENGLISH);
        break;

      default:
        return;
    }
  }

  return (
  <div className="hero_area">
    <header className="header_section">
      <div className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
          <a className="navbar-brand" href="#">
            <Image alt='' src={logo2} className="" /><span>
              Tropiko
            </span>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
              <ul className="navbar-nav  ">
                <li className="nav-item active">
                  <a className="nav-link" href="#">{getContent(HOME)} <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{getContent(FRUITS)} </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">{getContent(CONTACT_US)}</a>
                </li>
              </ul>
              <form className="form-inline my-2 my-lg-0 ml-0 ml-lg-4 mb-3 mb-lg-0">
                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit"></button>
              </form>
            </div>
            <div className="quote_btn-container ml-0 ml-lg-4 d-flex justify-content-center" onClick={changeLanguage}>
              <a href="#">
                {getContent(CHANGE_LANGAUGE)}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
    
    <section className=" slider_section position-relative">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider_item-box">
              <div className="slider_item-container">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="slider_item-detail">
                        <div>
                          <h1>
                            {getContent(TITLE1)}<br />
                            {getContent(TITLE2)}
                          </h1>
                          <p>
                            {getContent(DESCRIPTION)}
                          </p>
                          <div className="d-flex">
                            <a href="#" className="text-uppercase custom_orange-btn mr-3">
                              {getContent(SHOP_NOW)}
                            </a>
                            <a href="#" className="text-uppercase custom_dark-btn">
                              {getContent(CONTACT_US)}
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider_img-box">
                        <div>
                          <Image
                            alt=''
                            src={logo1}
                            className=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home;