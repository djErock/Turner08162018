import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Styles
import '../styles/titleManager.css';

export default class BaseListFilter extends PureComponent {
    static defaultProps = {
        placeHolder: 'Filter List...',
        queryList: () => Promise.resolve(),
    };

    static propTypes = {
        placeHolder: PropTypes.string,
        queryList: PropTypes.func,
    };

    render() {
        const { placeHolder } = this.props;

        return (
            <div className="title-manager-filter">
                <input
                    className="title-manager-filter-input"
                    onChange={ this.handleOnChange }
                    type="search"
                    placeholder={ placeHolder } />
            </div>
        );
    }

    handleOnChange = (evt) => {
        const { queryList } = this.props;
        queryList(evt.target.value);
    }
}
