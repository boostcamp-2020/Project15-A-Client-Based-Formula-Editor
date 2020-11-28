import React from 'react';
import SVGIcon from '@src/utils/svg/logo.svg';
import Button from '@src/components/Common/Button';
import colors from '@src/utils/colors';
import * as StyleComponent from './style';

const Header = () => {
  return (
    <StyleComponent.HeaderContainer>
      <SVGIcon />
      <StyleComponent.ButtonContainer>
        <Button color={colors.imageSave} value="이미지 저장" />
        <Button color={colors.exportSave} value="Export" />
      </StyleComponent.ButtonContainer>
    </StyleComponent.HeaderContainer>
  );
};

export default Header;
