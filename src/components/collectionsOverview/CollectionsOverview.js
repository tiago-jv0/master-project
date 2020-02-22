import React from 'react';

import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

import { selectCollectionsForPreview } from '../../redux/selectors/shopSelectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionsOverviewContainer } from './ColectionsOverviewStyles';

const CollectionsOverview = ({ collections }) => {
    return (
        <CollectionsOverviewContainer>
            {collections.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>;
            })}
        </CollectionsOverviewContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
