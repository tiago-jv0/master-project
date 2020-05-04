import React from 'react';

import Spinner from '../Spinner/Spinner';

const WithSpinner = (WrappedComponent) => {
  return ({ isLoading, ...otherProps }) => {
    return isLoading ? <Spinner></Spinner> : <WrappedComponent {...otherProps}></WrappedComponent>;
  };
};

export default WithSpinner;
