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
import * as StyledComponent from './style';

interface ButtonProps {
  color: string;
  value: string;
  onClick: () => void;
  saveClick: boolean;
}

const SaveButtons = ({ color, value, onClick, saveClick }: ButtonProps) => {
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
