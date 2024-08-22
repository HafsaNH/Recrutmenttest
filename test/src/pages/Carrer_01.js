import React, { Component } from 'react';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';

export class Carrer_01 extends Component {
    render() {
        
        return (
            <div className="site-main">
                <Header />

                {/* PageHeader */} 
                <PageHeader           
                    title="Carrer" 
                    breadcrumb="Carrer" 
                />
                {/* PageHeader end */}


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
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/services/finance-hover.png)' }}></div>
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
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/services/technology-hover.png)' }}></div>
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
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/services/agriculture-hover.png)' }}></div>
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
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/services/construction-hover.png)' }}></div>
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
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/services/manufacturing-hover.png)' }}></div>
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
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/services/production-hover.png)' }}></div>
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
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/services/transport-hover.png)' }}></div>
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
                                        <div className="ttm-col-wrapper-bg-layer ttm-bg-layer"  style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/services/insurance-hover.png)' }}></div>
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

                {/* Call to action */}
                <section className="ttm-row call-to-action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="call-to-action ttm-textcolor-white">
                                    <div className="call-to-action-content">
                                        <h2>Ready to Find Your Dream Job in Morocco?</h2>
                                        <p>Explore thousands of job opportunities in cities like Casablanca, Rabat, Marrakech, Agadir, and Tangier.</p>
                                    </div>
                                    <div className="call-to-action-btn">
                                        <a className="ttm-btn btn-inline ttm-btn-size-lg ttm-btn-color-dark" 
                                           href={process.env.PUBLIC_URL + '/job_list'}>Browse Jobs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Call to action end */}

                {/* Portfolio section */}
                <section className="ttm-row portfolio-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title title-style-center_text">
                                    <div className="title-header">
                                        <h3>Discover Our Offices <span className="text-theme-SkinColor">Across Morocco</span></h3>
                                        <h2 className="title">Our Head Offices</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {['Casablanca', 'Rabat', 'Marrakech', 'Agadir', 'Tangier'].map((city, index) => (
                                <div className="col-lg-4 col-md-6 col-sm-6" key={index}>
                                    <div className="featured-imagebox featured-imagebox-portfolio style1">
                                        <div className="ttm-box-view-overlay ttm-portfolio-box-view-overlay">
                                            <div className="featured-thumbnail">
                                                <img className="img-fluid" src={`https://via.placeholder.com/680x440?text=Office+in+${city}`} alt={`Image of office in ${city}`} />
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={process.env.PUBLIC_URL + '/'}>{city}</a></h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>Our office is here to assist you!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="col-lg-12">
                                <div className="pt-30 m-auto text-center">
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor" 
                                       href={process.env.PUBLIC_URL + '/job_list'}>Explore More Jobs by Region</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Portfolio section end */}

                {/* Job positions section */}
                <section className="ttm-row job_pos-section bg-theme-GreyColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title title-style-center_text">
                                    <div className="title-header">
                                        <h3>Find the <span className="text-theme-SkinColor">Perfect Job!</span></h3>
                                        <h2 className="title">Available Positions</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="search_Form" className="search_Form style2 wrap-form mt-15">
                                    <div className="row row-equal-height ttm-boxes-spacing-30px">
                                        <div className="col-lg-3">
                                            <label>
                                                <select>
                                                    <option value="" disabled="" selected="">All Categories</option>
                                                    <option value="accounting">Accounting</option>
                                                    <option value="business">Business</option>
                                                    <option value="social-media">Social Media</option>
                                                    <option value="content-creation">Content Creation</option>
                                                </select>
                                            </label>
                                        </div>
                                        <div className="col-lg-6">
                                            <label>
                                                <input type="text" placeholder="Job Title"/>
                                            </label>
                                        </div>
                                        <div className="col-lg-3">
                                            <label>
                                                <button className="w-100 submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor ttm-icon-btn-right" type="submit">Search<i className="fa fa-search"></i></button>
                                            </label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row mb_10">
                            {[
                                { title: 'Chartered Accountant', location: 'Casablanca', image: 'job-01.png' },
                                { title: 'Business Analyst', location: 'Rabat', image: 'job-02.png' },
                                { title: 'Social Media Manager', location: 'Marrakech', image: 'job-03.png' },
                                { title: 'Content Creator', location: 'Agadir', image: 'job-04.png' },
                                { title: 'Bank Manager', location: 'Tangier', image: 'job-05.png' }
                            ].map((job, index) => (
                                <div className="col-lg-12" key={index}>
                                    <div className="featured-imagebox featured-imagebox-job style2">
                                        <div className="featured-thumbnail">
                                            <img src={`https://via.placeholder.com/210x204?text=${job.image}`} alt={`Image for ${job.title}`} />
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>{job.title}</a></h3>
                                            </div>
                                            <div className="featured-bottom">
                                                <div className="job-meta">
                                                    <span>Job Category</span>
                                                    <span><i className="fa fa-map-marker-alt"></i>{job.location}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="apply-block">
                                            <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-dark"
                                               href={process.env.PUBLIC_URL + '/login'}></a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                {/* Job positions section end */}

                {/* Action section */}
                <section className="ttm-row action-section bg-theme-SkinColor text-theme-WhiteColor clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-md-flex align-items-center justify-content-between">
                                    <div className="featured-icon-box icon-align-before-content style2">
                                        <div className="featured-icon">
                                            <div className="ttm-icon ttm-icon_element-onlytxt ttm-icon_element-color-white ttm-icon_element-size-xl">
                                                <i className="flaticon flaticon-recruitment-5"></i>
                                            </div>
                                        </div>
                                        <div className="featured-content">
                                            <div className="featured-title">
                                                <h3>Your Premier Recruitment Partner in Morocco</h3>
                                            </div>
                                            <div className="featured-desc">
                                                <p>With over 30 years of expertise, we are dedicated to connecting you with the best job opportunities.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" 
                                       href={process.env.PUBLIC_URL + '/'}>Join Us Today!</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Action section end */}

                <Footer/>
            </div>
        )
    }
}

export default Carrer_01;
