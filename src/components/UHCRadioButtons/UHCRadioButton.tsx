import React from "react";
import { RadioButtonContainer, RadioButtonSelected } from "./style";
import theme from "uhc-themes";
import { getContainerColor } from "./style";

interface IProps {
  isSelected: boolean;
  selectedColor?: string;
  containerColorSelected?: string;
  containerColorUnselected?: string;
}

const UHCRadioButton: React.FunctionComponent<IProps> = ({
  isSelected,
  selectedColor,
  containerColorSelected,
  containerColorUnselected
}) => {
  return (
    <RadioButtonContainer
      containerColor={getContainerColor(
        isSelected,
        containerColorSelected,
        containerColorUnselected
      )}
    >
      {isSelected ? (
        <RadioButtonSelected selectedColor={selectedColor} />
      ) : null}
    </RadioButtonContainer>
  );
};

UHCRadioButton.defaultProps = {
  isSelected: false,
  selectedColor: theme.color.tertiary,
  containerColorUnselected: theme.color.gray,
  containerColorSelected: theme.color.tertiary
};

export default UHCRadioButton;
