import React, { useState } from 'react';
import SVGIcon from '@src/utils/svg/header/logo.svg';
import Button from '@src/components/Common/Button';
import colors from '@src/utils/colors';
import html2canvas from 'html2canvas';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import saveAsFile from '@src/utils/savefile';
import { setCropContainer } from '@src/store/modules/getMathQuill';
import HeaderTitle from './HeaderTitle';
import * as StyleComponent from './style';

const Header = () => {
  const { mathQuillContainer, click } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );
  const dispatch = useDispatch();
  const onClickImageSaveHandler = async () => {
    const mathquillSection = mathQuillContainer.current;
    const canvas = await html2canvas(mathquillSection);
    dispatch(setCropContainer(true));
  };

  const onClickExportHandler = () => {
    const style = window.getComputedStyle(
      document.querySelector('.mq-root-block')
    ) as any;
    saveAsFile(mathQuiiFunc.html(), 'html.txt');
    saveAsFile(JSON.stringify(style), 'css.txt');
  };
  return (
    <StyleComponent.HeaderContainer>
      <SVGIcon />
      <HeaderTitle />
      <StyleComponent.ButtonContainer>
        <Button
          color={colors.lightGrey}
          value="이미지 저장"
          onClick={onClickImageSaveHandler}
        />
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
