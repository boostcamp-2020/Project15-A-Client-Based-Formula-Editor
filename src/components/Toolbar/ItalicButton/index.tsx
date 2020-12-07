import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import { decline } from '@src/store/modules/fontDecline';
import { RoundButton } from '@src/components/Common/RoundButton/style';

const ItalicButton = () => {
  const { isDecline } = useSelector((state: RootState) => state.declineHandler);

  const dispatch = useDispatch();

  const onClickDeclineHandler = () => {
    dispatch(decline({ isDecline: !isDecline, fontDecline: 'normal' }));
  };

  return (
    <RoundButton onClick={onClickDeclineHandler}>
      <div className="italic">I</div>
    </RoundButton>
  );
};

export default ItalicButton;
