import React  from 'react';
import * as StyleComponent from './style';

interface Props{
    onClick?: (color:string)=> void;
}
const colorList = ['black','red','blue','green','yellow','white'];
const DropdownContent = ({onClick}:Props) => {

    return (
        <StyleComponent.DropdownContainer>
            <StyleComponent.RowContainer>글자 색상</StyleComponent.RowContainer>
            <StyleComponent.RowContainer>
                {colorList.map((color) => {
                    return <StyleComponent.ColorBox key={`colorbox-${color}`} color={color} onClick={()=>onClick(color)}></StyleComponent.ColorBox>
                })
            }
            </StyleComponent.RowContainer>
        </StyleComponent.DropdownContainer>
    );
}

export default DropdownContent;