import React from 'react';
import * as GraphAction from '@src/store/modules/graph';
import { useDispatch } from 'react-redux';
import Button from './Button';

const Graph = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(GraphAction.clickGraphButton());
  };

  return <Button onClick={onClickHandler} />;
};

export default Graph;
