import React from 'react';
import SVGIcon from '@src/utils/svg/logo.svg';
import Button from '@src/components/common/Button';
import colors from '@src/utils/colors';

const Header: React.FC = () => {
  return (
    <>
      <SVGIcon />
      <Button color={colors.imageSave} value="이미지 저장" />
      <Button color={colors.exportSave} value="export" />
    </>
  );
};

export default Header;
