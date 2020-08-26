import styled from "@emotion/native";
import theme from "uhc-themes";

export const getContainerColor = (
  isSelected: boolean,
  containerColorSelected: string | undefined,
  containerColorUnselected: string | undefined
): string => {
  if (isSelected) {
    return !!containerColorSelected
      ? containerColorSelected
      : theme.color.tertiary;
  } else {
    return !!containerColorUnselected
      ? containerColorUnselected
      : theme.color.gray;
  }
};

const radioButtonContainer = {
  height: 24,
  width: 24,
  borderRadius: 12,
  borderWidth: 2,
  alignItems: "center",
  justifyContent: "center"
};

export const RadioButtonContainer = styled.View((props: any) => {
  return { ...radioButtonContainer, borderColor: props.containerColor };
});

const radioButtonSelected = {
  height: 12,
  width: 12,
  borderRadius: 6
};

export const RadioButtonSelected = styled.View((props: any) => {
  return {
    ...radioButtonSelected,
    backgroundColor: props.selectedColor
  };
});
