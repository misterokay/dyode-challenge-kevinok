import React from 'react';

class NewsletterSignup extends React.Component {
    state = { email: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        // this.props.onSubmit(this.state.email);
    }

    render() {
        return (
            <div className="NewsletterSignupSection">
                <div className="newsletter-wrap">
                    <div className="newsletter-heading">Sign Up & Stay Connected</div>
                    <form onSubmit={this.onFormSubmit} className="">
                        <div className="">
                            <label htmlFor=""></label>
                            <input
                                type="email"
                                value={this.state.email}
                                onChange={(e) => this.setState({ email: e.target.value })}
                            />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewsletterSignup;