import React from 'react';
import './Banner.css'
import BannerItem from './BannerItem/BannerItem';

const bannerItems = [
    {
        id: 1,
        next: 2,
        prev: 3,
        img: "https://i.ibb.co/PwhNwYg/Toronto-Skyline-Summer-2020.jpg"
    },
    {
        id: 2,
        next: 3,
        prev: 1,
        img: "https://i.ibb.co/0rMSccm/Concord-Pacific-Master-Plan-Area.jpg"
    },
    {
        id: 3,
        next: 1,
        prev: 2,
        img: "https://i.ibb.co/MZqzFTz/bdb319cd80a57dd855df50fdea737ba0.jpg"
    }
]

const Banner = () => {
    return (
        <div className="carousel w-full">
            {
                bannerItems.map(bannerItem => <BannerItem
                    key={bannerItem.id}
                    bannerItem={bannerItem}
                ></BannerItem>)
            }
        </div >
    );
};

export default Banner;