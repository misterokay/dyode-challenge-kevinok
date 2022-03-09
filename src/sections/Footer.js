import React from 'react';

import { footerData } from '../data';
import Dropdown from '../components/Dropdown';

class Footer extends React.Component {
    render() {
        return (
            <div className="FooterSection">
                <div className="footer-linklists-wrap">
                    {footerData.linkLists.map((linklist, index) => {
                        return <Dropdown key={index} linklist={linklist} index={index} />
                    })}
                </div>
                <div className="footer-social-wrap">
                    <h1 className="footer-linklist-title">{footerData.socialLinks.socialLinksTitle}</h1>
                    <div className="footer-social-linklist">
                        {footerData.socialLinks.socialLinks.map((item, index) => {
                            return (
                                <a href={item.linkUrl} key={index}>
                                    <img src={item.linkIcon} />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;