import React from 'react';
import SVGIcon from '@src/utils/svg/logo.svg';
import Button from '@src/components/common/Button';

const Header: React.FC = () => {
  return (
    <>
      <SVGIcon />
      <Button color="#fbfbfb" value="이미지 저장" />
      <Button color="#B4F6E0" value="export" />
    </>
  );
};

export default Header;
