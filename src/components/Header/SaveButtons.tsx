import React from 'react';
import {
  setSaveContainer,
  setCropContainer,
  deleteCropContainer,
  showCompleteContainer,
  deleteCompleteContainer,
} from '@src/store/modules/getMathQuill';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@src/store/modules';
import html2canvas from 'html2canvas';
import saveAsFile from '@src/utils/savefile';
import { changeAlertMode } from '@src/store/modules/alert';
import * as StyledComponent from './style';

interface ButtonProps {
  saveClick: boolean;
}

const SaveButtons = ({ saveClick }: ButtonProps) => {
  const dispatch = useDispatch();
  const { completeShow } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const { mathQuillContainer } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const { click } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const { cropUrl } = useSelector(
    (state: RootState) => state.getMathQuillReducer
  );
  const onClickImageSeveralSaveHandler = () => {
    if (!click) {
      dispatch(setCropContainer());
      dispatch(showCompleteContainer());
    } else if (click) {
      dispatch(deleteCropContainer());
      dispatch(deleteCompleteContainer());
    }
  };
  const onClickSaveAllHandler = async () => {
    dispatch(changeAlertMode(2));
    if (!click) {
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
    if (!completeShow) {
      dispatch(setSaveContainer(!saveClick));
    }
    dispatch(deleteCropContainer());
    dispatch(deleteCompleteContainer());
  };
  return (
    <StyledComponent.SaveButtonContainer saveClick={saveClick}>
      <StyledComponent.MiniButton onClick={onClickSaveAllHandler}>
        <div className="text1">Save all</div>
      </StyledComponent.MiniButton>
      <StyledComponent.MiniButton onClick={onClickImageSeveralSaveHandler}>
        <div className="text1">Save the part</div>
      </StyledComponent.MiniButton>
      {completeShow ? (
        <StyledComponent.MiniButton onClick={onClickCompleteSaveHandler}>
          <div className="text1">Complete</div>
        </StyledComponent.MiniButton>
      ) : null}
      <StyledComponent.MiniButton onClick={onClickCancelHandler}>
        <div className="text1">Cancel</div>
      </StyledComponent.MiniButton>
    </StyledComponent.SaveButtonContainer>
  );
};

export default SaveButtons;
