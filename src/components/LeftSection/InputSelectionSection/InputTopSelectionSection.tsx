import React from 'react';
import { InputLatexTopContent } from '@src/constants/InputSection';
import LatexContent from '@src/components/Common/LatexContent';
import { useDispatch } from 'react-redux';
import { changeFomula } from '@src/store/modules/leftSection';
import { changeAlertMode } from '@src/store/modules/alert';

import * as StyledComponent from './style';

const InputTopSelectionSection = () => {
  const dispatch = useDispatch();
  const onClickHandler = (name: string, isPossible: boolean) => {
    if (isPossible) dispatch(changeFomula(name));
    else {
      dispatch(changeAlertMode(1));
    }
  };
  return (
    <>
      <StyledComponent.InputTopSelectionSectionContainer>
        {InputLatexTopContent.map((value, index) => (
          <LatexContent
            // eslint-disable-next-line react/no-array-index-key
            key={`dab${index}`}
            svg={value.svg}
            latex={value.latex}
            name={value.name}
            width="65"
            height="68"
            onClick={() => onClickHandler(value.name, value.isPossible)}
            isPossible={value.isPossible}
          />
        ))}
      </StyledComponent.InputTopSelectionSectionContainer>
    </>
  );
};

export default InputTopSelectionSection;
