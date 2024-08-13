import React, { Component } from 'react';

export class Footer extends Component {
    render() {
        const footerLogoStyles = {
            container: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                position: 'relative',
                padding: '10px',
            },
            logoText: {
                fontSize: '25px',
                fontWeight: 'bold',
                color: '#ffffff', // White color for dark background
                letterSpacing: '2px',
                marginBottom: '0px',
                lineHeight: '1',

            },
            highlight: {
                color: '#66b3ba', // Teal color for the 'E'
            },
            subtitle: {
                fontSize: '10px',
                color: '#ffffff', // White color for dark background
                fontWeight: '300',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                position: 'absolute',
                bottom: '-5px',
                right: '0',
                textAlign: 'right',
                whiteSpace: 'nowrap',
                lineHeight: '1', // Minimized line height to reduce space
            },
            footerLogoContainer: {
                padding: '10px',
                borderRadius: '5px',
                display: 'inline-block',
            }
        };

        return (
            <footer className="footer widget-footer bg-theme-DarkColor text-theme-WhiteColor clearfix">
                <div className="second-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 widget-area">
                                <div className="widget widget_text clearfix">
                                    <div style={footerLogoStyles.footerLogoContainer}>
                                        <div style={footerLogoStyles.container}>
                                            <div style={footerLogoStyles.logoText}>
                                                LE RECRUT<span style={footerLogoStyles.highlight}>E</span>UR
                                            </div>
                                            <br/>
                                            <div style={footerLogoStyles.subtitle}>
                                                L’ART DE RECRUTER<br />BY EHC GROUPE
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <br/>
                                    <p>RECRUTE is a multi award-winning executive search, management recruiter, and employer branding organization. 
                                        Our customized recruiting process delivers fast & accurate results.</p>
                                    <div className="d-flex align-items-center pt-15 pb-25">
                                        <h6 className="fw-normal">Social Share: </h6>
                                        <div className="social-icons">
                                            <ul className="social-icons list-inline">
                                                <li><a href="#facebook" rel="noopener" aria-label="facebook">
                                                    <i className="ti ti-facebook"></i></a>
                                                </li>
                                                <li><a href="#twitter" rel="noopener" aria-label="twitter">
                                                    <i className="ti ti-twitter-alt"></i></a>
                                                </li>
                                                <li><a href="#instagram" rel="noopener" aria-label="instagram">
                                                    <i className="ti ti-instagram"></i></a>
                                                </li>
                                                <li><a href="#pinterest" rel="noopener" aria-label="pinterest">
                                                    <i className="ti ti-pinterest"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a className="ttm-btn ttm-btn-size-md ttm-btn-shape-rounded ttm-btn-style-border ttm-btn-color-white" 
                                    href={process.env.PUBLIC_URL + '/contact_01'}>Request A Free Quote</a>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                                <div className="widget widget-recent-post clearfix">
                                    <h3 className="widget-title">Recent Posts</h3>
                                    <ul className="widget-post ttm-recent-post-list">
                                        <li>
                                            <div className="post-detail">
                                                <div className="cat-link"><a href={process.env.PUBLIC_URL + '/blog_details'}>business</a></div>
                                                <a href={process.env.PUBLIC_URL + '/blog_details'}>Are meetings falling too flat? Try these 10 tips</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-detail">
                                                <div className="cat-link"><a href={process.env.PUBLIC_URL + '/blog_details'}>business</a></div>
                                                <a href={process.env.PUBLIC_URL + '/blog_details'}>Are You Moving Businesses To Another State?</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="post-detail">
                                                <div className="cat-link"><a href={process.env.PUBLIC_URL + '/blog_details'}>business</a></div>
                                                <a href={process.env.PUBLIC_URL + '/blog_details'}>Shame: Does It Fit In The Workplace?</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4 widget-area">
                                <div className="widget widget-contact clearfix">
                                    <h3 className="widget-title">Quick Contact!</h3>
                                    <ul className="widget_contact_wrapper">
                                        <li>
                                            <i className="ttm-textcolor-skincolor flaticon-phone-call"></i>
                                            <h3>Call Us On:</h3>+212619282261</li>
                                        <li>
                                            <i className="ttm-textcolor-skincolor flaticon-placeholder"></i>
                                            <h3>Address:</h3>Casablanca, Morocco</li>
                                        <li>
                                            <i className="ttm-textcolor-skincolor flaticon-email"></i>
                                            <h3>Email:</h3><a href="mailto:info@example.com">info@expertshumancapital.ma</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer-text">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <span className="copyright">Copyright © 2021 <a href={process.env.PUBLIC_URL + '/'}>Recrute</a>. All rights reserved.
                                </span>
                                <ul className="footer-nav-menu">
                                    <li><a href={process.env.PUBLIC_URL + '/'}>Privacy & Policy</a></li>
                                    <li><a href={process.env.PUBLIC_URL + '/'}>Terms & Conditions</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 d-lg-flex align-items-center justify-content-between">
                                <form id="subscribe-form" className="subscribe-form">
                                    <div className="mailchimp-inputbox clearfix" id="subscribe-content"> 
                                        <input type="email" name="EMAIL" id="txtemail" placeholder="Enter Your Email Address..." required="" />
                                        <button className="submit ttm-btn btn-inline ttm-btn-size-md ttm-btn-color-skincolor" type="submit">
                                            <i className="fa fa-paper-plane" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
