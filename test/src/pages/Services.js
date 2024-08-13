import React, { Component } from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-animated-progress-bar';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';

export class Services extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    var slick_slider = {
      dots: false,
      arrow: false,
      autoplay: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 1,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 778,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="site-main">

        <Header />

        {/* PageHeader */}
        <PageHeader
          title="Services"
          breadcrumb="Services"
        />
        {/* PageHeader end */}

        {/* services-section */}
        <section className="ttm-row services-section bg-img1 bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix" style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/bg-image/row-bgimage-1.png)' }}>
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-lg-11">
                {/* section title */}
                <div className="section-title style2 mb-0">
                  <div className="title-header">
                    <h3>Exceptional <span className="text-theme-SkinColor">Services</span></h3>
                    <h2 className="title">We Anticipate Your Needs</h2>
                  </div>
                  <div className="title-desc">
                    <p>From <span className="text-theme-SkinColor">discovery</span> to delivery, we streamline the recruitment process to ensure you find the perfect fit. Our comprehensive approach covers every aspect of hiring, from identifying and attracting top talent to seamless onboarding.</p>
                  </div>
                </div>{/* section title end */}
              </div>
            </div>{/* row end */}
            {/* Slider */}
            <Slider className="row slick_slider slick-arrows-style2 pt-20 mb_10" {...slick_slider} slidesToShow={2} rows={2} arrows={true} autoplay={false} responsive={[{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 575, settings: { slidesToShow: 1, slidesToScroll: 1 } }]}>
              <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-services style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img src={"https://themetechmount.com/react/hireco/images/services/services-01.jpg"} />
                  </div>{/* featured-thumbnail end */}
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Manpower Supply</a></h3>
                    </div>
                    <div className="featured-desc">
                      <p>We excel in supplying skilled personnel tailored to your project needs, ensuring the right expertise at the right time.</p>
                    </div>
                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/services_details'}>Read More!</a>
                  </div>
                </div>{/* featured-imagebox end */}
              </div>
              <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-services style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/services/services-02.jpg" alt="image" />
                  </div>{/* featured-thumbnail end */}
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Forte Acquisition</a></h3>
                    </div>
                    <div className="featured-desc">
                      <p>We drive innovation by acquiring top-tier talent for current and future challenges, helping your business stay ahead.</p>
                    </div>
                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/services_details'}>Read More!</a>
                  </div>
                </div>{/* featured-imagebox end */}
              </div>
              <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-services style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/services/services-03.jpg" alt="image" />
                  </div>{/* featured-thumbnail end */}
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Technical Services</a></h3>
                    </div>
                    <div className="featured-desc">
                      <p>Our technical services span across fabrication, design, and commissioning, offering comprehensive solutions to meet your project needs.</p>
                    </div>
                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/services_details'}>Read More!</a>
                  </div>
                </div>{/* featured-imagebox end */}
              </div>
              <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-services style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/services/services-04.jpg" alt="image" />
                  </div>{/* featured-thumbnail end */}
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Human Resources</a></h3>
                    </div>
                    <div className="featured-desc">
                      <p>We tackle the complexities of human resource management, ensuring that your department meets its goals efficiently and effectively.</p>
                    </div>
                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/services_details'}>Read More!</a>
                  </div>
                </div>{/* featured-imagebox end */}
              </div>
              <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-services style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/services/services-05.jpg" alt="image" />
                  </div>{/* featured-thumbnail end */}
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Executive Search</a></h3>
                    </div>
                    <div className="featured-desc">
                      <p>We specialize in executive search, connecting you with the leadership your organization needs to thrive.</p>
                    </div>
                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/services_details'}>Read More!</a>
                  </div>
                </div>{/* featured-imagebox end */}
              </div>
              <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-services style1">
                  {/* featured-thumbnail */}
                  <div className="featured-thumbnail">
                    <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/services/services-06.jpg" alt="image" />
                  </div>{/* featured-thumbnail end */}
                  <div className="featured-content">
                    <div className="featured-title">
                      <h3><a href={process.env.PUBLIC_URL + '/services_details'}>Retained Search</a></h3>
                    </div>
                    <div className="featured-desc">
                      <p>Our retained search services ensure you have access to the best candidates, tailored to your specific needs and goals.</p>
                    </div>
                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-darkgrey" href={process.env.PUBLIC_URL + '/services_details'}>Read More!</a>
                  </div>
                </div>{/* featured-imagebox end */}
              </div>
            </Slider>
          </div>
        </section>
        {/* services-section end */}
        <Footer />
      </div>
    );
  }
}

export default Services;
