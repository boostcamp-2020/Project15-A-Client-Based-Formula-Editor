import React from 'react';
import colors from '@src/utils/colors';
import DECLINEICON from '@src/utils/svg/decline-text.svg';
import ToolBarButton from '@src/components/common/toolbarbutton';

const ToolBar: React.FC = () => {
  return (
    <>
      <ToolBarButton
        color={colors.mainGreen}
        Svg={DECLINEICON}
        width="20"
        height="20"
      />
    </>
  );
};
export default ToolBar;
