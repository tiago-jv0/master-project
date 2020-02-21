import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';

import './directory.scss';

import MenuItem from '../menu-item/MenuItem';

import React from 'react';

const Directory = ({ sections }) => {
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps}></MenuItem>
            ))}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({ sections: selectDirectorySections });

export default connect(mapStateToProps)(Directory);
