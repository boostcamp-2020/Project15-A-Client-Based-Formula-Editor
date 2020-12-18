import React from 'react';
import {
  clickSaveButton,
  exitCropModal,
  hiddenMoreButton,
  showCropModal,
  showMoreButton,
} from '@src/store/modules/saveMode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import html2canvas from 'html2canvas';
import saveAsFile from '@src/utils/savefile';
import { changeAlertMode } from '@src/store/modules/alert';
import CLOUD from '@src/utils/svg/header/cloud.svg';
import * as StyledComponent from './style';

interface ButtonProps {
  saveButtonActive: boolean;
}

const SaveButtons = ({ saveButtonActive }: ButtonProps) => {
  const dispatch = useDispatch();
  const { moreButtonActive } = useSelector(
    (state: RootState) => state.saveModeReducer
  );
  const { mathQuillContainer } = useSelector(
    (state: RootState) => state.saveModeReducer
  );
  const { cropModal } = useSelector(
    (state: RootState) => state.saveModeReducer
  );
  const { cropUrl } = useSelector((state: RootState) => state.saveModeReducer);
  const onClickImageSeveralSaveHandler = () => {
    if (!cropModal) {
      dispatch(showCropModal());
      dispatch(showMoreButton());
    } else if (cropModal) {
      dispatch(exitCropModal());
      dispatch(hiddenMoreButton());
    }
  };
  const onClickSaveAllHandler = async () => {
    dispatch(changeAlertMode(2));
    if (!cropModal) {
      const mathquillSection = mathQuillContainer.current;
      const canvas = await html2canvas(mathquillSection);
      const imageUrl = canvas.toDataURL('data:image/gif;base64');
      const aTag = document.createElement('a');
      aTag.download = '수식 저장.gif';
      aTag.href = imageUrl;
      aTag.click();
    }
  };
  const onClickCompleteSaveHandler = () => {
    dispatch(changeAlertMode(2));
    saveAsFile(cropUrl, '수식 저장.gif');
  };
  const onClickCancelHandler = () => {
    if (!moreButtonActive) {
      dispatch(clickSaveButton(!saveButtonActive));
    }
    dispatch(exitCropModal());
    dispatch(hiddenMoreButton());
  };
  return (
    <StyledComponent.SaveButtonContainer saveButtonActive={saveButtonActive}>
      <StyledComponent.MiniButton onClick={onClickSaveAllHandler}>
        <div className="text1">Save all</div>
      </StyledComponent.MiniButton>
      <StyledComponent.MiniButton onClick={onClickImageSeveralSaveHandler}>
        <div className="text1">Save the part</div>
      </StyledComponent.MiniButton>
      {moreButtonActive ? (
        <StyledComponent.MiniButton onClick={onClickCompleteSaveHandler}>
          <div className="text1">Complete</div>
        </StyledComponent.MiniButton>
      ) : null}
      <StyledComponent.MiniButton onClick={onClickCancelHandler}>
        <div className="text1">Cancel</div>
      </StyledComponent.MiniButton>
      <CLOUD />
    </StyledComponent.SaveButtonContainer>
  );
};

export default SaveButtons;
