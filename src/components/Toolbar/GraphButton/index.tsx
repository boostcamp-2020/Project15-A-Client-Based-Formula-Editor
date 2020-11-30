import React from 'react';
import * as GraphAction from '@src/store/modules/graph';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '@src/store/modules';
import Button from './Button';

const Graph = () => {
  const { visible } = useSelector((state: rootState) => state.graphHandler);
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(GraphAction.clickButton());
  };

  return (
    <>
      <Button onClick={onClickHandler} />
    </>
  );
};

export default Graph;
