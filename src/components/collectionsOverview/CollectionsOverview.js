import React from 'react';

import './CollectionsOverview.scss';

import CollectionPreview from '../../components/collectionPreview/CollectionPreview';

import { selectCollectionsForPreview } from '../../redux/selectors/shopSelectors';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const CollectionsOverview = ({ collections }) => {
    return (

<div className="collections-overview">
            {collections.map(({ id, ...otherCollectionProps }) => {
                return <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>;
            })}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
