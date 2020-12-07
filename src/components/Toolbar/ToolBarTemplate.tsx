import React from 'react';
import * as StyleComponent from './ToolBarStyle';

interface Props {
  FontSizeDropDown: JSX.Element;
  FontColorDropDown: JSX.Element;
  AlignDropDown: JSX.Element;
  ItalicButton: JSX.Element;
  DrawerDropDown: JSX.Element;
  BackgroundButton: JSX.Element;
  graphButton: JSX.Element;
  optionButtons: JSX.Element;
}

const ToolBarTemplate = ({
  FontSizeDropDown,
  FontColorDropDown,
  AlignDropDown,
  ItalicButton,
  DrawerDropDown,
  BackgroundButton,
  graphButton,
  optionButtons,
}: Props) => {
  return (
    <StyleComponent.ToolBarTemplate>
      <StyleComponent.Attributes>
        {FontSizeDropDown}
        {FontColorDropDown}
        {AlignDropDown}
        {ItalicButton}
        {DrawerDropDown}
        {BackgroundButton}
        {graphButton}
      </StyleComponent.Attributes>
      <StyleComponent.Options>{optionButtons}</StyleComponent.Options>
    </StyleComponent.ToolBarTemplate>
  );
};

export default ToolBarTemplate;
