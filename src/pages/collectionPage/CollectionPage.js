import React from 'react';

import './CollectionPage.scss';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/selectors/shopSelectors';
import CollectionItem from '../../components/collectionItem/CollectionItem';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <div className="collection-page">
            <h2 className="title"> {title.toUpperCase()}</h2>
            <div className="items">
                {items.map((item) => {
                    return <CollectionItem key={item.id} item={item}></CollectionItem>;
                })}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
