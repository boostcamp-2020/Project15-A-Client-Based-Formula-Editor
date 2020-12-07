import React from 'react';
import { useDispatch } from 'react-redux';
import BACK from '@src/utils/svg/toolbar/back.svg';
import FORWORD from '@src/utils/svg/toolbar/forward.svg';
import CLEAR from '@src/utils/svg/toolbar/clear.svg';
import ToolBarButton from '@src/components/Common/ToolbarButton';
import { clear } from '@src/store/modules/mathQuill';
import colors from '@src/utils/colors';

const OptionButtons = () => {
  const dispatch = useDispatch();

  const onClickClearHandler = () => {
    dispatch(clear());
  };
  const onClickBackHandler = () => {
    console.log('back');
  };
  const onClickForwardHandler = () => {
    console.log('forward');
  };

  const options = [
    { Svg: BACK, onClick: onClickBackHandler, id: 1 },
    { Svg: FORWORD, onClick: onClickForwardHandler, id: 2 },
    { Svg: CLEAR, onClick: onClickClearHandler, id: 3 },
  ];

  return (
    <>
      {options.map((value) => {
        return (
          <ToolBarButton
            key={value.id}
            color={colors.mainGreen}
            Svg={value.Svg}
            onClick={value.onClick}
          />
        );
      })}
    </>
  );
};

export default OptionButtons;
