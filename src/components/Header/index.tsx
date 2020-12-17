import React from 'react';
import SVGIcon from '@src/utils/svg/header/logo.svg';
import Button from '@src/components/Common/Button';
import SaveModeButton from '@src/components/Common/SaveModeButton';
import colors from '@src/utils/colors';
import { RootState } from '@src/store/modules';
import { useSelector, useDispatch } from 'react-redux';
import saveAsFile from '@src/utils/savefile';
import { clickSaveButton, exitCropModal } from '@src/store/modules/saveMode';
import HeaderTitle from './HeaderTitle';
import SaveButtons from './SaveButtons';
import * as StyleComponent from './style';

const Header = () => {
  const dispatch = useDispatch();
  const { saveButtonActive } = useSelector(
    (state: RootState) => state.saveModeReducer
  );
  const { mathQuiiFunc } = useSelector(
    (state: RootState) => state.mathQuillReducer
  );
  const { cropModal } = useSelector(
    (state: RootState) => state.saveModeReducer
  );
  const onClickSaveHandler = () => {
    dispatch(clickSaveButton(!saveButtonActive));
    if (cropModal) {
      dispatch(exitCropModal());
    }
  };

  const onClickExportHandler = () => {
    saveAsFile(mathQuiiFunc.html(), 'html.txt');
  };

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
        <SaveButtons saveButtonActive={saveButtonActive} />
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
