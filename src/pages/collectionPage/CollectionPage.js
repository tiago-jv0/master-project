import React from 'react';

import { CollectionPageContainer, CollectionTitle, CollectionItemsContainer } from './CollectionPageStyles';

import { connect } from 'react-redux';

import { selectCollection } from '../../redux/selectors/shopSelectors';
import CollectionItem from '../../components/collectionItem/CollectionItem';

const CollectionPage = ({ collection }) => {
    const { title, items } = collection;

    return (
        <CollectionPageContainer>
            <CollectionTitle> {title.toUpperCase()}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map((item) => {
                    return <CollectionItem key={item.id} item={item}></CollectionItem>;
                })}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
