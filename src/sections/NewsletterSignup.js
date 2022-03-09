import React from 'react';
import newsletterSvg from '../images/newsletter.svg';

class NewsletterSignup extends React.Component {
    state = { 
        email: '',
        formSubmitted: false
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        // insert formSubmit function

        this.setState({ formSubmitted: true });
    }

    render() {
        return (
            <div className="NewsletterSignupSection">
                <div className="newsletter-wrap">
                    <div className="newsletter-heading"><img src={newsletterSvg} />Sign Up &amp; Stay Connected</div>
                    <form onSubmit={this.onFormSubmit} className="">
                        <div className="form-content">
                            <p>
                                Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
                            </p>
                            {this.state.formSubmitted ?
                                <div className="form-post-submit">
                                    Thanks for signing up!
                                </div>
                                :
                                <div className="form-pre-submit">
                                    <input
                                        placeholder="Enter Your Email Address"
                                        className="email-field"
                                        type="email"
                                        value={this.state.email}
                                        onChange={(e) => this.setState({ email: e.target.value })}
                                    />
                                    <input className="submit-button" type="submit" value="SUBSCRIBE" />
                                </div>
                            }
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default NewsletterSignup;