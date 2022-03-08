import React from 'react';
import { featuredCollections } from '../data';

class FeaturedCollections extends React.Component {
    render() {
        return (
            <div className="FeaturedCollectionsSection">
                <div className="collections-container">
                    {featuredCollections.map((item, index) => {
                        return (
                            <div 
                                key={index} 
                                className={index === 2 ? 'collection-card mobile-full-width' : 'collection-card'}
                            >
                                {item.mobileImgUrl ?
                                    <>
                                        <img className="collection-image desktop-only" src={item.imgUrl} />
                                        <img className="collection-image mobile-only" src={item.mobileImgUrl} />
                                    </>
                                    :
                                    <img className="collection-image" src={item.imgUrl} />
                                }
                                <a href={item.linkPath} className="collection-link">{item.title}</a>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default FeaturedCollections;