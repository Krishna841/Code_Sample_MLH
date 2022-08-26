import React from 'react';
import Lottie from 'lottie-react';
import cellarLoadingAnimation from './cellar_loading.json';

const Loading = () => (
  <Lottie animationData={cellarLoadingAnimation} loop={true} />
);

export default Loading;
