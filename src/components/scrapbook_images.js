import React from 'react';

export default props => {
    console.log('props:', props);
    const { src } = props.about;
    const { style } = props.about;
    return(
        <img src={ src } style = {style} className="scrapbook-image"/>
    )
}