import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles/titleManager.css';

// Components
import BaseMarquee from './pure/BaseMarquee';
import BaseListFilter from './pure/BaseListFilter';
import BaseListItem from './pure/BaseListItem';

export default class TitleManager extends PureComponent {
    static defaultProps = {
        titles: [],
        MarqueeComponent: BaseMarquee,
        ListFilterComponent: BaseListFilter,
        ListItemComponent: BaseListItem,
    };

    static propTypes = {
        titles: PropTypes.array,
        MarqueeComponent: PropTypes.func,
        ListFilterComponent: PropTypes.func,
        ListItemComponent: PropTypes.func,
    };

    constructor(props) {
        super(props);
        this.state.titles = this.props.titles; // eslint-disable-line
        // I ran out of time to implement a store or provider in context ...
        // which is where I would usually handle this and why I have a lint rule dissuading this technique
    }

    state = {
        selectedTitle: {},
    };

    render() {
        const { MarqueeComponent, ListFilterComponent, ListItemComponent } = this.props;
        const { selectedTitle, titles } = this.state;
        console.log('render TitleManager', titles);

        return (
            <div className="title-manager">
                <div className="title-manager-left-banner" />
                <div className="title-manager-container">
                    <MarqueeComponent title={ selectedTitle } />
                    <div className="title-manager-redbox">
                        <ListFilterComponent queryList={ this.handleListQuery } />
                        <div className="title-manager-list">
                            {
                                titles.map((title, i) => {
                                    return (
                                        <ListItemComponent
                                            key={ title.TitleId }
                                            index={ i }
                                            title={ title }
                                            isSelected={ title.TitleId === selectedTitle.TitleId }
                                            setSelectedItem={ this.handleItemSelect } />
                                    );
                                })
                            }
                        </div>
                    </div>
                    <div className="title-manager-status">Status: </div>
                </div>
                <div className="title-manager-right-banner" />
            </div>
        );
    }

    handleItemSelect = (id) => {
        const { titles } = this.props;
        const selectedItem = titles.find(title => title.TitleId === id);
        this.setState({ selectedTitle: selectedItem });
    }

    handleListQuery = (query) => {
        const { titles: propsTitles } = this.props;
        const { titles } = this.state;
        const filteredTitles = titles.filter(title => title.TitleName.includes(query));

        if (query === '') {
            this.setState({ titles: propsTitles });
        } else {
            this.setState({ titles: filteredTitles });
        }
    }
}
