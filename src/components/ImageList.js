import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImagesList = (props) => {

    const result = props.images.map((img) => {
        // return <li key={id}><img src={urls.regular} alt={alt_description} /></li>
        return <ImageCard key={img.id} image={img} />
    })
    return <div>
        <p>Search returned {props.found} images from search</p>
        <ul className="image-list">
            {result}
        </ul>
    </div >
}

export default ImagesList;