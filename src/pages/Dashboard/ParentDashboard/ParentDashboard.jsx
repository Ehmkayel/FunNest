import React from 'react';
import Loader from '../../../components/Loader/Loader';
import ExploreEvents from './Explore/Explore';


const ParentDashboard = () => {
  return (
    <>
     <Loader/>
     <ExploreEvents/>
    </>
  );
};

export default ParentDashboard;
