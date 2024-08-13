import React, { Component } from 'react';
import Slider from 'react-slick';
import Header from '../components/layout/Header';
import PageHeader from "../components/layout/PageHeader";
import { Footer } from '../components/layout/Footer';

export class Job_details extends Component {

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

            responsive: [{
                breakpoint: 768,
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
                {/* PageHeader */} 
                <PageHeader
                    title="Job Details"
                    breadcrumb="Job"
                />
                {/* PageHeader end */}

                <div className="ttm-row sidebar job-sidebar clearfix">
                    <div className="container">
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-4 widget-area sidebar-left job_list-widget-area">
                                <div className="job_list-widget">
                                    <aside className="widget job-widget">
                                        <h3 className="widget-title"><i className="ti ti-files"></i>Job Information</h3>
                                        <ul>
                                            <li className="d-flex"><b className="mr-5">Job Type:</b>Part Time</li>
                                            <li className="d-flex"><b className="mr-5">Location:</b>Casablanca, Morocco</li>
                                            <li className="d-flex"><b className="mr-5">Offered Salary:</b>$22k - $34k</li>
                                            <li className="d-flex"><b className="mr-5">Posted:</b>1 Week Ago</li>
                                            <li className="d-flex"><b className="mr-5">Experience:</b>3 Years</li>
                                            <li className="d-flex"><b className="mr-5">Industry:</b>Design</li>
                                            <li className="d-flex"><b className="mr-5">Qualification:</b>Associate Degree</li>
                                            <li className="d-flex"><b className="mr-5">Position:</b>2</li>
                                        </ul>
                                    </aside>
                                    <aside className="widget form-widget">
                                        <h3 className="widget-title"><i className="ti ti-email"></i>Send Us a Message</h3>
                                        <form className="wrap-form">
                                            <label>
                                                <input name="name" type="text" placeholder="Your Name" required="required" />
                                            </label>
                                            <label>
                                                <input name="email" type="text" placeholder="Your Email" required="required" />
                                            </label>
                                            <label>
                                                <textarea name="message" rows="3" placeholder="Message" required="required"></textarea>
                                            </label>
                                            <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill ttm-btn-color-skincolor w-100" type="submit">Send a Message!</button>
                                        </form>
                                    </aside>
                                    <aside className="widget location-widget p-0">
                                    <iframe 
    width="100%" 
    height="350" 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10620574.424961785!2d-11.677811262048744!3d31.67641136652274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7428c258b6bb11%3A0x4245910ad2cf1674!2sMorocco!5e0!3m2!1sen!2sma!4v1691664836156!5m2!1sen!2sma" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>

                                        <div className="p-20">
                                            <div>
                                                <span className="text-theme-SkinColor">
                                                    <i className="fa fa-map-marker-alt mr-10"></i></span>Casablanca ,Morocco
                                            </div>
                                            <div>
                                                <a href="mailto:info@example.com"><i className="fa fa-envelope mr-10"></i>info@ehc.ma</a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                            </div>
                            <div className="col-lg-8 content-area">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                        {/* featured-imagebox */}
                                        <div className="featured-imagebox featured-imagebox-job bg-theme-GreyColor m-0">
                                            <div className="featured-thumbnail">
                                                <img src="https://themetechmount.com/react/hireco/images/job/job-04.png" alt="job-thumbnail" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Chartered Accountant</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2 Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>Casablanca</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="green">Full Time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-lg-12 col-md-12">
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Job Description :</h5>
                                            </div>
                                            <div className="desc">
                                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                     labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
                                                     maecenas accumsan lacus vel facilisis.”</p>
                                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                     labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
                                                     maecenas accumsan lacus vel facilisis.”</p>
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Required Knowledge, Skills, and Abilities :</h5>
                                            </div>
                                            <div className="desc">
                                                <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
                                                    <li>
                                                        <i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You have at least 3 years’ experience working as a Product Designer.</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You have experience using Sketch and InVision or Framer X.</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You are familiar using Jira and Confluence in your workflow.</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">You have some previous experience working in an agile environment.</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Skills Required</h5>
                                            </div>
                                            <div className="desc">
                                                <ul className="ttm-list ttm-list-style-icon ttm-textcolor-darkgrey">
                                                    <li>
                                                        <i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">HTML, CSS & Scss</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">Javascript</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">PHP</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">Java</div>
                                                    </li>
                                                    <li><i className="ti ti-check-box"></i>
                                                        <div className="ttm-list-li-content">Photoshop</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Our Location :</h5>
                                            </div>
                                            <div className="desc">
                                                <p>Casablanca ,Morocco</p>
                                            </div>
                                        </div>
                                        <div className="overview-box">
                                            <div className="title">
                                                <h5>Application Process</h5>
                                            </div>
                                            <div className="desc">
                                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                     labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
                                                     maecenas accumsan lacus vel facilisis.”</p>
                                                <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                                     labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra 
                                                     maecenas accumsan lacus vel facilisis.”</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/* row end */}
                    </div>
                </div>
                
                {/* related jobs */}
                <section className="ttm-row related-job-section clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <Slider className="row slick_slider mb_15" {...slick_slider} slidesToShow={3} arrows={false}>
                                    <div className="col-md-12">
                                        <div className="featured-imagebox featured-imagebox-job">
                                            <div className="featured-thumbnail">
                                                <img src="https://themetechmount.com/react/hireco/images/job/job-03.png" alt="job-thumbnail" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Chartered Accountant</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2 Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>Casablanca</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="green">Full Time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="featured-imagebox featured-imagebox-job">
                                            <div className="featured-thumbnail">
                                                <img src="https://themetechmount.com/react/hireco/images/job/job-01.png" alt="job-thumbnail" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Chartered Accountant</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2 Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>Casablanca</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="green">Full Time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                    <div className="col-md-12">
                                        <div className="featured-imagebox featured-imagebox-job">
                                            <div className="featured-thumbnail">
                                                <img src="https://themetechmount.com/react/hireco/images/job/job-02.png" alt="job-thumbnail" />
                                            </div>
                                            <div className="featured-content">
                                                <div className="featured-title">
                                                    <h3><a href={process.env.PUBLIC_URL + '/Job_details'}>Vacancy For the Chartered Accountant</a></h3>
                                                </div>
                                                <div className="featured-desc">
                                                    <p>Published 2 Days Ago.</p>
                                                </div>
                                                <div className="featured-bottom">
                                                    <div className="job-meta">
                                                        <span><i className="fa fa-map-marker-alt"></i>Casablanca</span>
                                                        <span><i className="fa fa-filter"></i>Automotive Jobs</span>
                                                    </div>
                                                    <div className="job-time">
                                                        <span className="green">Full Time</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>{/* featured-imagebox end */}
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
                {/* related jobs end */}
                
                <Footer />
            </div>
        );
    }
}

export default Job_details;
