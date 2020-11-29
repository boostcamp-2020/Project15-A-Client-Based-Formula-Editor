import React from 'react';
import SVGIcon from '@src/utils/svg/logo.svg';
import Button from '@src/components/common/Button';
import colors from '@src/utils/colors';
import HeaderTitle from './HeaderTitle';
import * as StyleComponent from './style';

const Header = () => {
  return (
    <StyleComponent.HeaderContainer>
      <SVGIcon />
      <HeaderTitle />
      <StyleComponent.ButtonContainer>
        <Button color={colors.lightGrey} value="이미지 저장" />
        <Button color={colors.lightGrey} value="Export" />
      </StyleComponent.ButtonContainer>
    </StyleComponent.HeaderContainer>
  );
};

export default Header;
