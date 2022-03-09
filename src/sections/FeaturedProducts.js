import React from 'react';

import LeftArrow from '../components/LeftArrow';
import RightArrow from '../components/RightArrow';
import Carousel from 'react-multi-carousel';
import Currency from 'react-currency-formatter';

class FeaturedProducts extends React.Component {
    render() {
        const responsive = {
            desktop: {
                breakpoint: { max: 1500, min: 769 },
                items: 4
            },
            mobile: {
                breakpoint: { max: 768, min: 0 },
                items: 2
            }
        };

        return (
            <div className="FeaturedProductsSection">
                {this.props.productsCarousel.sectionHeadingMobile ?
                    <>
                        <h1 className="section-header mobile-only">{this.props.productsCarousel.sectionHeadingMobile}</h1>
                        <h1 className="section-header desktop-only">{this.props.productsCarousel.sectionHeading}</h1>
                    </>
                    :
                    <h1 className="section-header">{this.props.productsCarousel.sectionHeading}</h1>
                }
                <Carousel
                    customLeftArrow={<LeftArrow />}
                    customRightArrow={<RightArrow />}
                    responsive={responsive}
                    autoPlay={false}
                    shouldResetAutoplay={false}
                >
                    {this.props.productsCarousel.carouselItems.map((item, index) => {
                        return (
                            <a href={item.productUrl} key={index} className="carousel-slide">
                                <img
                                    src={item.imgUrl}
                                    alt={item.title}
                                />
                                <div className="slide-content-wrap">
                                    <h3>{item.title}</h3>
                                    <p>{item.subheading}</p>
                                    <div className="product-price">
                                        <Currency
                                            quantity={item.price}
                                            currency="USD"
                                        />
                                    </div>
                                </div>
                            </a>
                        );
                    })}
                </Carousel>
            </div>
        );
    }
}

export default FeaturedProducts;