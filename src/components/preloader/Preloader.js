import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Styles
import './preloader.css';

export default class Preloader extends PureComponent {
    static defaultProps = {
        imageALT: 'Preloader',
        imageURL: 'http://richbar.org/wp-content/uploads/2015/11/preloaders.gif',
    };

    static propTypes = {
        imageALT: PropTypes.string,
        imageURL: PropTypes.string,
    };

    render() {
        const { imageURL, imageALT } = this.props;

        return (
            <div className="preloader">
                <img
                    className="preloader-img"
                    src={ imageURL }
                    alt={ imageALT } />
            </div>
        );
    }

    function = () => {
        console.log('function');
    }
}
