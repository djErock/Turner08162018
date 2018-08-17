import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Styles
import '../styles/titleManager.css';

export default class BaseListItem extends PureComponent {
    static defaultProps = {
        title: [],
        index: 0,
        setSelectedItem: () => Promise.resolve(),
    };

    static propTypes = {
        title: PropTypes.object,
        index: PropTypes.number,
        isSelected: PropTypes.bool,
        setSelectedItem: PropTypes.func,
    };

    render() {
        const { title, isSelected, index } = this.props;
        const { ReleaseYear, TitleName, TitleId } = title;

        return (
            <div
                key={ `${index}-${TitleId}` }
                role="presentation"
                className={ `base-list-item ${isSelected ? 'selectedListItem' : ''}` }
                onClick={ this.handleOnClick }>
                <span>{ ReleaseYear } - { TitleName }</span>
            </div>
        );
    }

    handleOnClick = () => {
        const { title, setSelectedItem } = this.props;
        const { TitleId } = title;
        setSelectedItem(TitleId);
    }
}
