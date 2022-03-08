import React from 'react';
import { Link } from 'react-router-dom';

class Drawer extends React.Component {
    constructor(props) {
        super(props);

        this.drawerRef = React.createRef();
    }

    componentDidMount() {
        this.drawerRef.current.addEventListener('transitionstart', this.onTransitionStart);
        this.drawerRef.current.addEventListener('transitionend', this.onTransitionEnd);
    }

    componentWillUnmount() {
        this.drawerRef.current.removeEventListener('transitionstart', this.onTransitionStart);
        this.drawerRef.current.removeEventListener('transitionend', this.onTransitionEnd);
    }

    onTransitionStart = () => {
        this.props.updateDrawer({ drawerTransitioning: true });
    }

    onTransitionEnd = () => {
        this.props.updateDrawer({ drawerTransitioning: false });
    }

    render() {
        const transitioningClass = this.props.drawerTransitioning ? ' is-transitioning' : '';
        const drawerStatusClass = this.props.drawerOpen ? ' is-open' : '';

        const drawerClass = `drawer${transitioningClass}${drawerStatusClass}`;

        return (
            <div ref={this.drawerRef} className={drawerClass}>
                <nav>
                    {this.props.nav.map((item, index) => {
                        return (
                            <Link 
                                onClick={() => this.props.updateDrawer({ drawerOpen: false })} 
                                key={index} 
                                to={item.linkPath}
                            >
                                {item.linkTitle}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        )
    }
}

export default Drawer;