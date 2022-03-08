import React from 'react';
import { mainNav } from '../data';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import { announcementBar } from '../data';
import search from '../images/search.svg';
import account from '../images/account.svg';
import cart from '../images/cart.svg';
import hamburger from '../images/hamburger.svg';
import Drawer from './Drawer';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            headerClass: 'site-header'
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            this.throttle(this.handleScroll, 300)
        });
    }

    throttle = (callback, time) => {
        if (this.throttleTimer) return;
        this.throttleTimer = true;
        // this.lastPos = document.documentElement.scrollTop;
        setTimeout(() => {
            callback(this.currentPos);
            this.throttleTimer = false;
        }, time);
    }

    handleScroll = () => {
        let currentPos = document.documentElement.scrollTop;

        if (document.body.scrollTop > 0 || currentPos > 0) {
            this.setState({ headerClass: 'site-header shrink-header' });
        } else {
            this.setState({ headerClass: 'site-header' });
        }
        // if (currentPos - this.lastPos > 30 || currentPos - this.lastPos < -30) {
            
        // }
    }

    render() {
        return (
            <>
                <Drawer 
                    updateDrawer={this.props.updateDrawer} 
                    drawerTransitioning={this.props.drawerTransitioning} 
                    drawerOpen={this.props.drawerOpen} 
                    nav={mainNav} 
                />
                <div className={this.state.headerClass}>

                    <AnnouncementBar
                        msg={announcementBar.msg}
                        mobileMsg={announcementBar.mobileMsg}
                        backgroundColor={announcementBar.backgroundColor}
                        textColor={announcementBar.textColor}
                        link={announcementBar.link}
                    />
                    <header className="header-wrap">
                        <button
                            className="hamburger-menu-button"
                            onClick={() => {
                                this.props.updateDrawer({
                                    drawerTransitioning: true,
                                    drawerOpen: true
                                });
                            }}
                        >
                            <img src={hamburger} />
                        </button>
                        <div className="logo-wrap">
                            <Link to="/">
                                <img src={logo} alt="logo" />
                            </Link>
                        </div>
                        <nav className="main-nav">
                            {mainNav.map((item, index) => {
                                return <Link key={index} to={item.linkPath}>{item.linkTitle}</Link>
                            })}
                        </nav>
                        <div className="secondary-nav">
                            <a className="secondary-nav-link" href="#">
                                <img src={search} />
                            </a>
                            <a className="secondary-nav-link" href="#">
                                <img src={account} />
                            </a>
                            <a className="secondary-nav-link" href="#">
                                <img src={cart} />
                            </a>
                        </div>
                    </header>
                </div>
            </>
        );
    }
}

export default Header;