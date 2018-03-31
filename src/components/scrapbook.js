import React from 'react';
import './scrapbook.css';
import imageData from './image_data';
import ScraptBookImage from './scrapbook_images';


export default props => {

    const images = imageData.map((image, index) => {
        return(
            <ScraptBookImage key = { index } about = { image }/>
        )
    });

    return(
        <div className="scrapbook-container">
            { images }
        </div>
    )
}