import React from 'react';
import ImageTextCarousel from '../sections/ImageTextCarousel';
import FeaturedProducts from '../sections/FeaturedProducts';
import FeaturedCollections from '../sections/FeaturedCollections';
import NewsletterSignup from '../sections/NewsletterSignup';
import { heroCarousel, productsCarousel, favoriteTeesCarousel } from '../data';

class Home extends React.Component {
    render() {
        return (
            <div className="page-width">
                <ImageTextCarousel carouselData={heroCarousel} />
                <FeaturedCollections />
                <FeaturedProducts productsCarousel={productsCarousel} />
                <ImageTextCarousel carouselData={favoriteTeesCarousel} />
                <NewsletterSignup />
            </div>
        );
    }
}

export default Home;