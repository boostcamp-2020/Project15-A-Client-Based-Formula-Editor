import React from 'react';
import * as GraphAction from '@src/store/modules/graph';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '@src/store/modules';
import Button from './Button';

const AlignButton = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    console.log('?');
  };

  return <Button onClick={onClickHandler} />;
};

export default AlignButton;
