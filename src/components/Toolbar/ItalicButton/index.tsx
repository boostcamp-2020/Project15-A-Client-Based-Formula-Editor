import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { changeDecline } from '@src/store/modules/fontDecline';
import { RoundButton } from '@src/components/Common/RoundButton/style';

const ItalicButton = () => {
  const { fontDecline } = useSelector(
    (state: RootState) => state.fontDeclineReducer
  );

  const dispatch = useDispatch();

  const onClickDeclineHandler = () => {
    dispatch(changeDecline({ fontDecline: !fontDecline }));
  };

  return (
    <RoundButton onClick={onClickDeclineHandler}>
      <div className="italic">I</div>
    </RoundButton>
  );
};

export default ItalicButton;
