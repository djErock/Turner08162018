

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Styles
import '../styles/titleManager.css';

// Components
import TitleDetail from '../stateless/TitleDetail';

export default class BaseMarquee extends PureComponent {
    static defaultProps = {
        title: {},
    };

    static propTypes = {
        title: PropTypes.object,
    };

    render() {
        const { title } = this.props;
        const { TitleName, Awards, Genres, ReleaseYear } = title;

        return (
            <div className="title-manager-marquee">
                <TitleDetail
                    label="Selected Title"
                    detail={ TitleName } />
                { Awards && <TitleDetail
                    label="Awards"
                    detail={ ` ${Awards.length}` } />
                }
                { Genres && <TitleDetail
                    label="Genres"
                    detail={ Genres.join(', ') } />
                }
                { ReleaseYear && <TitleDetail
                    label="ReleaseYear"
                    detail={ ReleaseYear } />
                }
            </div>
        );
    }
}
