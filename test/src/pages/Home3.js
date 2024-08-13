import React, { Component } from 'react';
import Slider from 'react-slick';
import ProgressBar from 'react-animated-progress-bar';
import Header from '../components/layout/Header2';
import { Banner } from '../components/banner/Home3_banner';
import { Footer } from '../components/layout/Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CountUp from 'react-countup';


export class Home3 extends Component {
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

        responsive: [ {

            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },{
    
          breakpoint: 991,
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
      }]
      };
        
        return (       
          <div className="site-main">

            <Header/>
            
            {/* Banner */} 
            <Banner/>
            {/* Banner end */} 


            {/* form */}
            <div className="form-section clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bg-theme-GreyColor ttm-col-bgcolor-yes ttm-bg rounded p-30 p-lg-20 mt_60 mt-xl-50">
                                <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"></div>
                                <div className="layer-content">
                                    <form id="search_Form" className="search_Form wrap-form m-1 border rounded rounded-3 overflow-hidden" method="post" action="#" data-mailchimp="true">
                                        <label>
                                            <i className="ti ti-search"></i>
                                            <input type="text" id="filter" placeholder="Job Title or Keywords"/>
                                        </label>
                                        <label>
                                            <i className="ti ti-location-pin"></i>
                                            <input type="email" name="EMAIL" id="txtemail" placeholder="location" />
                                        </label>
                                        <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-square ttm-btn-style-fill ttm-btn-color-skincolor h-auto" type="submit">Find Jobs</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* form end */} 

            
            {/* features-section */}
            <section className="ttm-row features-section clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-12">
                            {/* section title */}
                            <div className="section-title title-style-center_text">
                                <div className="title-header">
                                    <h3>Get <span className="text-theme-SkinColor">Appropriate</span></h3>
                                    <h2 className="title">Search Job By Industry</h2>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* row */}
                    <div className="row row-equal-height mb_10">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* finance-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/finance-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* finance-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/cat-icon1.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Finance</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>85 Jobs<br></br>Financial Branch Manager</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* technology-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/technology-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* technology-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/cat-icon2.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Technology</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>110 Jobs<br></br>Software, Hardware, SEO</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1 active">
                                <div className="ttm-box-view-overlay">
                                    {/* agriculture-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/agriculture-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* agriculture-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/cat-icon3.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Agriculture</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>100 Jobs<br></br>Agricultural Food Scientist</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* construction-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/construction-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* construction-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/cat-icon4.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Construction</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>120 Jobs<br></br>The Marketing Coordinator</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* manufacturing-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/manufacturing-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* manufacturing-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/cat-icon5.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Manufacturing</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>100 Jobs<br></br>Quality Control Inspector</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* production-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/production-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* production-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/cat-icon6.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Production</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>90 Jobs<br></br>Assistant Plant Manager</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* transport-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/transport-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* transport-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/cat-icon7.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Transport</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>125 Jobs<br></br>Cargo and Freight Agents</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-top-content style1">
                                <div className="ttm-box-view-overlay">
                                    {/* insurance-hover */}
                                    <div className="ttm-col-bgimage-yes ttm-bg h-100">
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/insurance-hover.png)' }}></div>
                                        <div className="layer-content"></div>
                                    </div>{/* insurance-hover end */}
                                </div>
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-fill ttm-icon_element-style-round ttm-icon_element-color-grey ttm-icon_element-size-lg">
                                        <img className="img-fluid" src="https://themetechmount.com/react/hireco/images/cat-icon8.png" />
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Insurance</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>110 Jobs<br></br>Corporate Finance Officer</p>
                                    </div>
                                    <a className="ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-dark" 
                                    href={process.env.PUBLIC_URL + '/job_list'}>Apply Jobs!</a>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                    </div>{/* row end */}
                </div>
            </section>
            {/* features-section end */}

{/* services-section */}
<section className="ttm-row services-section bg-img1 bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix" style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/bg-image/row-bgimage-1.png)' }}>
    <div className="container">
        {/* row */}
        <div className="row">
            <div className="col-lg-11">
                {/* section title */}
                <div className="section-title style2 mb-0">
                    <div className="title-header">
                        <h3>We Serve <span className="text-theme-SkinColor">Morocco</span></h3>
                        <h2 className="title">Our Expertise in Moroccan Cities</h2>
                    </div>
                    <div className="title-desc">
                        <p>We specialize in recruiting talent across Morocco. Our local presence ensures we understand and meet the unique needs of employers and job seekers in each city.</p>
                    </div>
                </div>{/* section title end */}
            </div>
        </div>{/* row end */}
        {/* Slider */}
        <Slider className="row slick_slider slick-arrows-style1" {...slick_slider} slidesToShow={3} arrows={true}
         responsive={[{ breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 650, settings: { slidesToShow: 1, slidesToScroll: 1 } }]}>
            <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-country">
                    {/* featured-content */}
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3><a href={process.env.PUBLIC_URL + '/casablanca'}>Casablanca</a></h3>
                        </div>
                        <div className="featured-desc">
                            <p>The economic hub of Morocco, known for its vibrant job market.</p>
                        </div>
                    </div>
                </div>{/* featured-imagebox end */}
            </div>
            <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-country">
                    {/* featured-content */}
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3><a href={process.env.PUBLIC_URL + '/rabat'}>Rabat</a></h3>
                        </div>
                        <div className="featured-desc">
                            <p>Our administrative capital, offering numerous opportunities in public sector jobs.</p>
                        </div>
                    </div>
                </div>{/* featured-imagebox end */}
            </div>
            <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-country">
                    {/* featured-content */}
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3><a href={process.env.PUBLIC_URL + '/marrakech'}>Marrakech</a></h3>
                        </div>
                        <div className="featured-desc">
                            <p>Known for its rich culture and growing job opportunities in tourism and hospitality.</p>
                        </div>
                    </div>
                </div>{/* featured-imagebox end */}
            </div>
            <div className="col-md-12">
                {/* featured-imagebox */}
                <div className="featured-imagebox featured-imagebox-country">
                    {/* featured-content */}
                    <div className="featured-content">
                        <div className="featured-title">
                            <h3><a href={process.env.PUBLIC_URL + '/fes'}>Fes</a></h3>
                        </div>
                        <div className="featured-desc">
                            <p>Renowned for its historic sites and opportunities in education and traditional industries.</p>
                        </div>
                    </div>
                </div>{/* featured-imagebox end */}
            </div>
        </Slider>
        {/* Slider end */}
    </div>
</section>
{/* services-section end */}

                        
           
            {/* portfolio-section end */}


            {/* about-section */}
            <section className="ttm-row about-section bg-img5 bg-theme-DarkColor ttm-bg ttm-bgimage-yes text-theme-WhiteColor clearfix" style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/bg-image/row-bgimage-5.jpg)' }}>
                <div className="ttm-row-wrapper-bg-layer ttm-bg-layer bg-theme-DarkColor"></div>
                <div className="container">
                    {/* row */} 
                    <div className="row">
                        <div className="col-lg-6">
                            {/* section title */}
                            <div className="section-title">
                                <div className="title-header">
                                    <h2 className="title">Download & Enjoy</h2>
                                </div>
                                <div className="title-desc">
                                    <p>Search, find and apply for jobs directly on your mobile device or desktop Manage all of the jobs you have
                                         applied to from a convenience secure dashboard.</p>
                                </div>
                            </div>{/* section title end */}
                            <div className="d-sm-flex social-btns">
                                <a className="app-btn" href="http:apple.com">
                                    <i className="fab fa-apple"></i>
                                    <p>Available on the <br/> <span className="big-txt">App Store</span></p>
                                </a>

                                <a className="app-btn" href="http:google.com">
                                    <i className="fab fa-google-play"></i>
                                    <p>Get it on <br/> <span className="big-txt">Google Play</span></p>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-10 mx-auto">
                            <div className="ttm_single_image-wrapper mt_20 p-15 position-absolute mb_lg-200 d-lg-block d-none">
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
            {/* about-section end */}


            {/* job-list-section */}
            <section className="ttm-row job-list-section bg-theme-GreyColor ttm-bg z-index-1 clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-11">
                            {/* section title */}
                            <div className="section-title style2 mb-0">
                                <div className="title-header">
                                    <h3>Find The <span className="text-theme-SkinColor">Best One!</span></h3>
                                    <h2 className="title">Jobs By Positions</h2>
                                </div>
                                <div className="title-desc">
                                    <p>We have over 30 years experience of Financial ,Marketing and Busness Solutions expertise,
                                       our goal is to maxnci reputation and financial.</p>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* row */}
                    <Slider className="row slick_slider slick-arrows-style2 pt-20 mb_10" {...slick_slider} rows={2} slidesToShow={4} arrows={true}>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-sketch"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>WebDesigner</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>25 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-expert"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Education Training</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>14 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-budget"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Accounting Finance</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>58 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-house"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Construction</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>20 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-human-resources-4"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Human Resource</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>28 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>                        
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-telecommunication"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>CallCenter</h3>
                                    </div>
                                    <div className="featured-desc">
                                    <p>58 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-restaurant"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Restaurants</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>17 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-healthcare"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Health</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>02 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-sketch"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>WebDesigner</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>25 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            {/* featured-icon-box */}
                            <div className="featured-icon-box icon-align-before-content icon-ver_align-top style5">
                                <div className="featured-icon">
                                    <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-skincolor ttm-icon_element-size-lg">
                                        <i className="flaticon flaticon-expert"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Education Training</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>14 Open Positions</p>
                                    </div>
                                </div>
                            </div>{/* featured-icon-box end */}
                        </div>
                    </Slider>{/* row end */}
                </div>
            </section>
            {/* job-list end */}



            {/* job-list-section */}
            <section className="ttm-row job-list-section bg-theme-GreyColor ttm-bg ttm-bgimage-yes clearfix">
                <div className="container">
                    {/* row */}
                    <div className="row">
                        <div className="col-lg-11">
                            {/* section title */}
                            <div className="section-title style2">
                                <div className="title-header">
                                    <h3>Find The <span className="text-theme-SkinColor">Best One!</span></h3>
                                    <h2 className="title">Recent Job Listing</h2>
                                </div>
                                <div className="title-desc">
                                    <p>We have several jobs in active right now. Check out <span className="text-theme-SkinColor">recent jobs </span>
                                     according to your excelllence. Our experts will guide you accordingly. </p>
                                </div>
                            </div>{/* section title end */}
                        </div>
                    </div>{/* row end */}
                    {/* Slider */}
                    <Slider className="row slick_slider mb_10 pt-20 slick-arrows-style2" {...slick_slider} slidesToShow={2}
                    rows={3} arrows={true} responsive= { [{ breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://themetechmount.com/react/hireco/images/job/job-05.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For The Content Creator</a></a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="danger-color">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                <div className="featured-thumbnail">
                                    <img src="https://themetechmount.com/react/hireco/images/job/job-06.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Human Resource</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="blue">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor">
                                <div className="featured-thumbnail">
                                    <img src="https://themetechmount.com/react/hireco/images/job/job-02.png" />
                                    <div className="required-tag">Urgent</div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Business Analyst</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="danger-color">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://themetechmount.com/react/hireco/images/job/job-01.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Charted Account</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="green">full time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://themetechmount.com/react/hireco/images/job/job-02.png" />
                                    <div className="required-tag">Urgent</div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Human Resource</a> </h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="danger-color">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://themetechmount.com/react/hireco/images/job/job-03.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3>Marketing Expert For Charity</h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="deep-orange">full time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>                        
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://themetechmount.com/react/hireco/images/job/job-04.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For Social Media Manager</a></a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="green">full time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://themetechmount.com/react/hireco/images/job/job-05.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}><a href={process.env.PUBLIC_URL + '/Job_details'}>Opening For The Content Creator</a></a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="danger-color">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                        <div className="col-lg-6 col-md-12">
                            {/* featured-imagebox */}
                            <div className="featured-imagebox featured-imagebox-job">
                                <div className="featured-thumbnail">
                                    <img src="https://themetechmount.com/react/hireco/images/job/job-06.png" />
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">
                                        <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Job Vacancy For the Bank Manager</a></h3>
                                    </div>
                                    <div className="featured-desc">
                                        <p>Published 2Days Ago.</p>
                                    </div>
                                    <div className="featured-bottom">
                                        <div className="job-meta">
                                            <span><i className="fa fa-map-marker-alt"></i>California</span>
                                            <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                        </div>
                                        <div className="job-time">
                                            <span className="blue">part time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* featured-imagebox end */}
                        </div>
                    </Slider>{/* row end */}
                </div>
            </section>
            {/* job-list end */}


            <section className="ttm-row form-section clearfix">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="section-title title-style-center_text">
                    <div className="title-header">
                        <h3>Fill the <span className="text-theme-SkinColor">Details</span></h3>
                        <h2 className="title">Apply for Your Dream Job</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <form className="submit_Form wrap-form row row-equal-height" noValidate>
                    <div className="col-lg-6">
                        <div className="basic-details p-30 mt-15 box-shadow">
                            <div className="mb-20 text-center">
                                <h4>Personal Details</h4>
                                <p>Please provide your contact information.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label htmlFor="first_name">
                                        <input type="text" id="first_name" name="first_name" placeholder="First Name" required />
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="last_name">
                                        <input type="text" id="last_name" name="last_name" placeholder="Last Name" required />
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="email_id">
                                        <input type="email" id="email_id" name="email_id" placeholder="Email" required />
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="phone_number">
                                        <input type="tel" id="phone_number" name="phone_number" placeholder="Phone" required />
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label htmlFor="address">
                                        <input type="text" id="address" name="address" placeholder="Address" required />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="additional-details p-30 mt-15 box-shadow">
                            <div className="mb-20 text-center">
                                <h4>Qualifications</h4>
                                <p>Please provide your qualifications and additional information.</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <label htmlFor="education">
                                        <select id="education" name="education" aria-label="Education">
                                            <option value="" disabled selected>Select Education Level</option>
                                            <option value="bachelor">Bachelor's Degree</option>
                                            <option value="master">Master's Degree</option>
                                            <option value="phd">Ph.D.</option>
                                            <option value="diploma">Diploma</option>
                                            <option value="associate">Associate Degree</option>
                                            <option value="highschool">High School</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="locations">
                                        <select id="locations" name="locations" aria-label="Preferred Locations">
                                            <option value="" disabled selected>Select Preferred Location</option>
                                            <option value="casablanca">Casablanca</option>
                                            <option value="rabat">Rabat</option>
                                            <option value="tangier">Tangier</option>
                                            <option value="marrakech">Marrakech</option>
                                            <option value="agadir">Agadir</option>
                                            <option value="fes">Fes</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="experience">
                                        <select id="experience" name="experience" aria-label="Experience Level">
                                            <option value="" disabled selected>Select Experience Level</option>
                                            <option value="0-1">0-1 years</option>
                                            <option value="1-3">1-3 years</option>
                                            <option value="3-5">3-5 years</option>
                                            <option value="5-7">5-7 years</option>
                                            <option value="7-10">7-10 years</option>
                                            <option value="10+">10+ years</option>
                                        </select>
                                    </label>
                                </div>
                                <div className="col-lg-6">
                                    <label htmlFor="note">
                                        <input type="text" id="note" name="note" placeholder="Personal Qualities" />
                                    </label>
                                </div>
                                <div className="col-lg-12">
                                    <label htmlFor="chooseFile">
                                        <input type="file" id="chooseFile" name="chooseFile" aria-label="Upload Resume" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <label htmlFor="message">
                            <textarea id="message" name="message" rows="4" placeholder="Additional Information..." required></textarea>
                        </label>
                    </div>
                    <div className="col-lg-12">
                        <label className="mb-0">
                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor h-auto" type="submit">Apply for This Job</button>
                        </label>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>



            <Footer/>
                        
         </div>
       )
   }
}


export default Home3;