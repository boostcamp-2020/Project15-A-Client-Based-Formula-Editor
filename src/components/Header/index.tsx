import React, { useState } from 'react';
import SVGIcon from '@src/utils/svg/header/logo.svg';
import Button from '@src/components/Common/Button';
import SaveModeButton from '@src/components/Common/SaveModeButton';
import colors from '@src/utils/colors';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import saveAsFile from '@src/utils/savefile';
import {
  setSaveContainer,
  setCropContainer,
  deleteCropContainer,
} from '@src/store/modules/getMathQuill';
import HeaderTitle from './HeaderTitle';
import SaveButtons from './SaveButtons';
import * as StyleComponent from './style';

const Header = () => {
  const dispatch = useDispatch();
  const { saveClick } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );
  const { click } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const onClickSaveHandler = () => {
    dispatch(setSaveContainer(!saveClick));
    if (click) {
      dispatch(deleteCropContainer());
    }
  };

  const onClickExportHandler = () => {
    const style = window.getComputedStyle(
      document.querySelector('.mq-root-block')
    ) as any;
    saveAsFile(mathQuiiFunc.html(), 'html.txt');
    saveAsFile(JSON.stringify(style), 'css.txt');
  };
  const onClickMainHandler = () => {};
  return (
    <StyleComponent.HeaderContainer>
      <SVGIcon />
      <HeaderTitle />
      <StyleComponent.ButtonContainer>
        <SaveModeButton
          color={colors.lightGrey}
          value="저장 모드"
          onClick={onClickSaveHandler}
        />
        <SaveButtons saveClick={saveClick} />
        <Button
          color={colors.lightGrey}
          value="Export"
          onClick={onClickExportHandler}
        />
      </StyleComponent.ButtonContainer>
    </StyleComponent.HeaderContainer>
  );
};

export default Header;
