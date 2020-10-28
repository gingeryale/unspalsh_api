import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
        this.state = { spans: 0 }
    }
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);
        this.setState({ spans })
    }

    render(props) {
        const { alt_description, urls } = this.props.image;
        return (
            <li style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef}
                    alt={alt_description}
                    src={urls.regular} />
            </li>
        )
    }
}

export default ImageCard;