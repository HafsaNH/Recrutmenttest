import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

export class Menu extends Component {
    state = {
            show: false,
    }
    render() {
        return (
            <Router>
                <nav className="main-menu">         
                    <ul className="menu">
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/'} className="mega-menu-link">Home</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/'}>Job Seeker</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/home2'}>Job Consultancy</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/home3'}>Human Resource</a></li>
                            </ul>
                        </li>
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/about_us'} className="mega-menu-link">Pages</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/about_us'}>About Us</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/services'}>Services</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/carrer_01'}>Carrer</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/login'}>Login</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/register'}>Register</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/contact_01'}>Contact us</a></li>
                            </ul>
                        </li>
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/job_list'} className="mega-menu-link">Jobs</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/job_list'}>Job List</a></li>
                               
                            </ul>
                        </li>
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/employers_list'} className="mega-menu-link">Employers</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/employers_list'}>Employers List</a></li>
                               
                            </ul>
                        </li>
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/candidate_list'} className="mega-menu-link">Candidates</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/candidate_list'}>Candidate List</a></li>
                               
                            </ul>
                        </li>                    
                        <li className="mega-menu-item">
                            <a href={process.env.PUBLIC_URL + '/blog_classic'} className="mega-menu-link">Blog</a>
                            <ul className="mega-submenu">
                                <li><a href={process.env.PUBLIC_URL + '/blog_classic'}>Blog Classic</a></li>
                                <li><a href={process.env.PUBLIC_URL + '/blog_grid'}>Blog Grid</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </Router>
        )
        
    }
}

export default Menu;