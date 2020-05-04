import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/actions/shopActions';
import Spinner from '../../components/Spinner/Spinner';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collectionsOverview/CollectionsOverviewContainer')
);
const CollectionPageContainer = lazy(() => import('../collectionPage/CollectionPageContainer'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner></Spinner>}>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />

        <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
