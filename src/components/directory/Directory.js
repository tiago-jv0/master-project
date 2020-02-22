import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/selectors/directorySelectors';

import {DirectoryMenuContainer} from './DirectoryStyles'

import MenuItem from '../menu-item/MenuItem';

import React from 'react';

const Directory = ({ sections }) => {
    return (
        <DirectoryMenuContainer>
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps}></MenuItem>
            ))}
        </DirectoryMenuContainer>
    );
};

const mapStateToProps = createStructuredSelector({ sections: selectDirectorySections });

export default connect(mapStateToProps)(Directory);
