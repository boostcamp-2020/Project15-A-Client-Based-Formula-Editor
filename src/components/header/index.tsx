import React from 'react';
import SVGIcon from '@src/utils/svg/logo.svg';
import Button from '@src/components/common/Button';
import colors from '@src/utils/colors';
import { HeaderContainer, ButtonContainer } from './style';

const Header = () => {
  return (
    <HeaderContainer>
      <SVGIcon />
      <ButtonContainer>
        <Button color={colors.imageSave} value="이미지 저장" />
        <Button color={colors.exportSave} value="export" />
      </ButtonContainer>
    </HeaderContainer>
  );
};

export default Header;
