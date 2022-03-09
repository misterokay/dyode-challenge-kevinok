import heroCarousel1 from './images/hero-carousel-1.png';
import heroCarouselMobile1 from './images/hero-carousel-mobile-1.png';
import heroCarousel2 from './images/hero-carousel-2.png';
import heroCarousel3 from './images/hero-carousel-3.png';
import womensImg from './images/womens-img.png';
import mensImg from './images/mens-img.png';
import accessoriesImg from './images/accessories-img.png';
import accessoriesImgMobile from './images/accessories-img-mobile.png';
import productImage from './images/product-image.png';
import ourFavoriteTees from './images/our-favorite-tees.png';
import facebookIcon from './images/facebook-icon.svg';
import twitterIcon from './images/twitter-icon.svg';
import instagramIcon from './images/instagram-icon.svg';

export const mainNav = [
    {
        linkTitle: "Men's",
        linkPath: "collections/mens",
        subLinks: []
    },
    {
        linkTitle: "Women's",
        linkPath: "collections/womens",
        subLinks: []
    },
    {
        linkTitle: "Accessories",
        linkPath: "collections/accessories",
        subLinks: []
    },
    {
        linkTitle: "Sale",
        linkPath: "collections/sale",
        subLinks: []
    }
]

export const heroCarousel = [
    {
        imgUrl: heroCarousel1,
        mobileImgUrl: heroCarouselMobile1,
        heading: "Shop New Arrivals",
        subheading: "Our coolest new items are waiting for you!",
        contentColor: "#10504F",
        buttonText: "SHOP NOW",
        buttonUrl: "#",
        buttonBackgroundColor: "black",
        buttonTextColor: "white",
        contentPosition: "middle-left"
    },
    {
        imgUrl: heroCarousel2,
        heading: "Our Fave Tees",
        subheading: "Shop all of our favorites.",
        contentColor: "#10504F",
        buttonText: "SHOP NOW",
        buttonUrl: "#",
        buttonBackgroundColor: "black",
        buttonTextColor: "white",
        contentPosition: "middle-left"
    },
    {
        imgUrl: heroCarousel3,
        heading: "Men’s Tees",
        subheading: "Find the perfect shirt.",
        contentColor: "#10504F",
        buttonText: "SHOP NOW",
        buttonUrl: "#",
        buttonBackgroundColor: "black",
        buttonTextColor: "white",
        contentPosition: "middle-left"
    }
]

export const announcementBar = {
    msg: "FREE SHIPPING ON ALL ORDERS OVER $75",
    mobileMsg: "FREE SHIPPING ON ALL ORDERS",
    backgroundColor: "#000000",
    textColor: "#FFFFFF",
    link: "#"
}

export const featuredCollections = [
    {
        imgUrl: womensImg,
        title: "Women's",
        linkPath: "collections/womens"
    },
    {
        imgUrl: mensImg,
        title: "Men's",
        linkPath: "collections/mens"
    },
    {
        imgUrl: accessoriesImg,
        mobileImgUrl: accessoriesImgMobile,
        title: "Accessories",
        linkPath: "collections/accessories"
    }
]

export const productsCarousel = {
    sectionHeading: "New Arrivals",
    sectionHeadingMobile: "Shop New Arrivals",
    carouselItems: [
        {
            imgUrl: productImage,
            title: "Product Title",
            subheading: "WOMEN’S T-SHIRT",
            price: 19.99
        },
        {
            imgUrl: productImage,
            title: "Product Title",
            subheading: "WOMEN’S T-SHIRT",
            price: 19.99
        },
        {
            imgUrl: productImage,
            title: "Product Title",
            subheading: "WOMEN’S T-SHIRT",
            price: 19.99
        },
        {
            imgUrl: productImage,
            title: "Product Title",
            subheading: "WOMEN’S T-SHIRT",
            price: 19.99
        },
        {
            imgUrl: productImage,
            title: "Product Title",
            subheading: "WOMEN’S T-SHIRT",
            price: 19.99
        },
        {
            imgUrl: productImage,
            title: "Product Title",
            subheading: "WOMEN’S T-SHIRT",
            price: 19.99
        },
        {
            imgUrl: productImage,
            title: "Product Title",
            subheading: "WOMEN’S T-SHIRT",
            price: 19.99
        },
        {
            imgUrl: productImage,
            title: "Product Title",
            subheading: "WOMEN’S T-SHIRT",
            price: 19.99
        }
    ]
}

export const favoriteTeesCarousel = [
    {
        imgUrl: ourFavoriteTees,
        heading: "Our Favorite Tees",
        subheading: "Everyday tees you need.",
        contentColor: "white",
        buttonText: "SHOP NOW",
        buttonUrl: "#",
        buttonBackgroundColor: "#10504F",
        buttonTextColor: "white",
        contentPosition: "top-right"
    }
]

export const footerData = {
    linkLists: [
        {
            linkListTitle: "Customer Service",
            links: [
                {
                    linkTitle: "Accessibility",
                    linkUrl: "#"
                },
                {
                    linkTitle: "Contact Us",
                    linkUrl: "#"
                },
                {
                    linkTitle: "Return Policy",
                    linkUrl: "#"
                },
                {
                    linkTitle: "FAQ",
                    linkUrl: "#"
                },
                {
                    linkTitle: "Gift Certificates",
                    linkUrl: "#"
                },
                {
                    linkTitle: "Wishlist",
                    linkUrl: "#"
                }
            ]
        },
        {
            linkListTitle: "Company",
            links: [
                {
                    linkTitle: "About Us",
                    linkUrl: "#"
                },
                {
                    linkTitle: "Careers",
                    linkUrl: "#"
                },
                {
                    linkTitle: "Press",
                    linkUrl: "#"
                },
                {
                    linkTitle: "Affiliates",
                    linkUrl: "#"
                }
            ]
        }
    ],
    socialLinks: {
        socialLinksTitle: "Follow Us",
        socialLinks: [
            {
                linkIcon: facebookIcon,
                linkUrl: "#"
            },
            {
                linkIcon: instagramIcon,
                linkUrl: "#"
            },
            {
                linkIcon: twitterIcon,
                linkUrl: "#"
            }
        ]
    }
}