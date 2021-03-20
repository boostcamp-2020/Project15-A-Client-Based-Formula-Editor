import React from 'react';
import FontSizeDropDown from '@src/components/Toolbar/FontSizeDropdown';
import FontColorDropDown from '@src/components/Toolbar/FontColorDropdown';
import ItalicButton from '@src/components/Toolbar/ItalicButton';
import DrawerDropDown from '@src/components/Toolbar/PaintDropdown';
import BackgroundDropDown from '@src/components/Toolbar/BackgroundDropdown';
import AlignDropDown from '@src/components/Toolbar/AlignDropdown';
import GraphButton from '@src/components/Toolbar/GraphButton';
import OptionButtons from '@src/components/Toolbar/HistoryButtons';
import ToolBarTemplate from './ToolBarTemplate';

const ToolBar = () => {
  return (
    <ToolBarTemplate
      FontSizeDropDown={<FontSizeDropDown />}
      FontColorDropDown={<FontColorDropDown />}
      AlignDropDown={<AlignDropDown />}
      ItalicButton={<ItalicButton />}
      DrawerDropDown={<DrawerDropDown />}
      BackgroundButton={<BackgroundDropDown />}
      graphButton={<GraphButton />}
      optionButtons={<OptionButtons />}
    />
  );
};

export default React.memo(ToolBar);
