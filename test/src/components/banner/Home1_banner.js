import React, { Component } from "react";
import Slider from 'react-slick';

export class Banner extends Component {
    state = {
        show: false,
    }
    render() {
        var slick_slider = {
            dots: false,
            arrow: false,
            autoplay: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            rows: 1,

            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
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
            <Slider className="slick_slider banner_slider banner_slider_1" {...slick_slider} slidesToShow={1} autoplay={false} >
                <div className="slide">
                    <div className="slide_img" style={{ backgroundImage: 'url(https://themetechmount.com/react/hireco/images/slides/slider-mainbg-001.jpg)' }}></div>
                    <div className="slide__content">

                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slide__content--headings ttm-textcolor-white text-center">
                                        <h3 data-animation="animate__animated animate__bounce animate__delay-2s">Empower Your Future, Discover New Horizons.</h3>
                                        <div className="d-flex align-items-center justify-content-center">
                                            <h2 data-animation="animate__fadeInDown">Your Trusted Recruitment & Staffing Partner</h2>
                                        </div>
                                        <div className="mt-30">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <p data-animation="animate__fadeInDown" className="mb-30 mb-md-0">
                                                        <form id="b_search_Form" className="b_search_Form wrap-form d-block" method="post" action="#" data-mailchimp="true">
                                                            <div className="row row-equal-height">
                                                                <div className="col-lg-3">
                                                                    <label>
                                                                        <i className="ti ti-search"></i>
                                                                        <input type="text" id="filter" placeholder="Job Title or Keywords" />
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <label>
                                                                        <i className="ti ti-location-pin"></i>
                                                                        <select name="locations" aria-hidden="true" placeholder="Locations">
                                                                            <option value="">Locations</option>
                                                                            <option value="Casablanca">Casablanca</option>
                                                                            <option value="Rabat">Rabat</option>
                                                                            <option value="Marrakech">Marrakech</option>
                                                                            <option value="Tangier">Tangier</option>
                                                                            <option value="Agadir">Agadir</option>
                                                                            <option value="Fes">Fes</option>
                                                                        </select>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <label>
                                                                        <i className="ti ti-list"></i>
                                                                        <select name="categories" aria-hidden="true" placeholder="Categories">
                                                                            <option value="">Categories</option>
                                                                            <option value="IT">Information Technology</option>
                                                                            <option value="HR">Human Resources</option>
                                                                            <option value="Finance">Finance</option>
                                                                            <option value="Marketing">Marketing</option>
                                                                            <option value="Engineering">Engineering</option>
                                                                            <option value="Healthcare">Healthcare</option>
                                                                        </select>
                                                                    </label>
                                                                </div>
                                                                <div className="col-lg-3">
                                                                    <label>
                                                                        <button className="submit ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-fill 
                                                                            ttm-btn-color-skincolor" type="submit">Find Jobs</button>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </p>
                                                    <p data-animation="animate__fadeInDown" className="d-none d-md-block">
                                                        <span className="text-theme-WhiteColor">Popular Searches:  </span>Developer,  Project Manager,  Data Analyst,  Designer,  Software Engineer,  Sales
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Slider>
        )
    }
}

export default Banner;
