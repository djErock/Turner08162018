import React from 'react';
import PropTypes from 'prop-types';

const TitleDetail = (props) => {
    const { label, detail } = props;

    return (
        <p>{ label }: { detail }</p>
    );
};

TitleDetail.defaultProps = {
    label: 'Title',
    detail: 'No Title Selected',
};

TitleDetail.propTypes = {
    label: PropTypes.string,
    detail: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
};

export default TitleDetail;
