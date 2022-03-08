import React from 'react';

import { Carousel } from 'react-responsive-carousel';

let componentCount = 0;

class ImageTextCarousel extends React.Component {
    constructor(props) {
        super(props);

        this.carouselRef = React.createRef();

        this.slideData = this.props.carouselData.map((item) => {
            return {};
        });

        this.state = {
            currentImgHeight: 0,
            currentSlideHeight: 0,
            slideChangeBegan: false,
            currentIndex: 0
        }

        this.guid = 'ImageTextCarousel-' + componentCount++;

        window.addEventListener('resize', this.handleResize);
    }

    handleResize = () => {
        this.slideData.forEach((item, index) => {
            item.imgHeight = this.carouselRef.current.itemsRef[index].querySelector('img').clientHeight;
            item.slideHeight = this.carouselRef.current.itemsRef[index].querySelector('.carousel-slide').clientHeight;
        });

        this.setState({
            currentImgHeight: this.slideData[this.state.currentIndex].imgHeight,
            currentSlideHeight: this.slideData[this.state.currentIndex].slideHeight
        });
    }

    onImgLoad = (e, index) => {
        this.slideData[index].imgHeight = this.carouselRef.current.itemsRef[index].querySelector('img').clientHeight;
        this.slideData[index].slideHeight = this.carouselRef.current.itemsRef[index].querySelector('.carousel-slide').clientHeight;
        
        if (index === 0) {
            this.setState({ 
                currentImgHeight: this.slideData[0].imgHeight,
                currentSlideHeight: this.slideData[0].slideHeight
            });
        }
    }

    onSlideChange = (index, item) => {
        this.setState({
            currentIndex: index,
            currentImgHeight: this.slideData[index].imgHeight,
            currentSlideHeight: this.slideData[index].slideHeight,
            slideChangeBegan: true
        });
    }

    render() {
        const css = `
        @media only screen and (max-width: 768px) {
            #${this.guid} {
                position: relative;
                height: ${this.state.currentSlideHeight}px;
            }

            #${this.guid} .carousel .control-dots {
                margin-top: -18px;
                bottom: auto;
                top: ${this.state.currentImgHeight}px;
            }

            .ImageTextCarouselSection .slide-content-wrap h1,
            .ImageTextCarouselSection .slide-content-wrap p {
                color: #10504F;
            }

            .ImageTextCarouselSection .slide-content-wrap a {
                background: black !important;
            }
        }
        `

        const slideChangeBeganCss = `
        @media only screen and (max-width: 768px) {
            #${this.guid} {
                transition: height 0.5s;
            }

            #${this.guid} .carousel-root {
                width: 100%;
                position: absolute;
            }
        }
        `

        const singleSlideCss = `
            #${this.guid} .control-dots {
                display: none;
            }
        `

        return (
            <div className="ImageTextCarouselSection" id={this.guid}>
                <style>{css}</style>
                {this.state.slideChangeBegan ? <style>{slideChangeBeganCss}</style>:""}
                {this.props.carouselData.length === 1 ? <style>{singleSlideCss}</style> : ""}
                <Carousel
                    ref={this.carouselRef}
                    showArrows={false}
                    autoPlay={true}
                    interval={3000}
                    infiniteLoop={true}
                    showStatus={false}
                    showThumbs={false}
                    onChange={this.onSlideChange}
                >
                    {this.props.carouselData.map((item, index) => {
                        return (
                            <div key={index} className={`carousel-slide ${item.contentPosition}`}>
                                {item.mobileImgUrl ?
                                    <>
                                        <img 
                                            className="mobile-only" 
                                            src={item.mobileImgUrl} 
                                            alt={item.heading} 
                                            onLoad={(e) => this.onImgLoad(e, index)} 
                                        />
                                        <img 
                                            className="desktop-only" 
                                            src={item.imgUrl} 
                                            alt={item.heading} 
                                            onLoad={(e) => this.onImgLoad(e, index)} 
                                        />
                                    </>
                                    :
                                    <img 
                                        src={item.imgUrl} 
                                        alt={item.heading} 
                                        onLoad={(e) => this.onImgLoad(e, index)} 
                                    />
                                }
                                
                                <div className="slide-content-wrap" style={{ color: item.contentColor }}>
                                    <h1>{item.heading}</h1>
                                    <p>{item.subheading}</p>
                                    <a href={item.buttonUrl} style={{ backgroundColor: item.buttonBackgroundColor, color: item.buttonTextColor }}>{item.buttonText}</a>
                                </div>
                            </div>
                        )
                    })}
                </Carousel>
            </div>
        )
    }
}

export default ImageTextCarousel;