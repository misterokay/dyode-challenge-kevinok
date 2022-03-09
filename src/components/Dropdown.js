import React from 'react';

import { SlideDown } from 'react-slidedown';
import plus from '../images/plus.svg';
import minus from '../images/minus.svg';

class Dropdown extends React.Component {
    state = {
        open: this.props.index === 0 ? true : false
    }

    componentDidMount() {
        if (window.innerWidth >= 739) this.setState({ open: true });
    }

    onClick = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const linklist = this.props.linklist;
        const renderedLinklist = linklist.links.map((link, index) => {
            return (
                <a key={index} href={link.linkUrl}>{link.linkTitle}</a>
            );
        });

        return (
            <div className="footer-linklist-wrap">
                <h1 
                    onClick={this.onClick} 
                    className="footer-linklist-title"
                >
                    {linklist.linkListTitle}
                    <img src={this.state.open ? minus : plus} />
                </h1>
                <SlideDown
                    className="footer-linklist"
                >
                    {this.state.open ? renderedLinklist : ""}
                </SlideDown>
            </div>
        )
    }
}

export default Dropdown;