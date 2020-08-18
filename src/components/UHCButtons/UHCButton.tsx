import React, { useEffect, useState } from "react";
import { GestureResponderEvent, View, Text } from "react-native";
import {
  getButtonBackground,
  Button,
  ButtonGradient,
  ButtonText
} from "./style";
import { useFonts } from "expo-font";

interface IProps {
  text: string;
  buttonType?: "primary" | "secondary" | "danger";
  size?: "big" | "small";
  disabled?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

interface TextIProps {
  text: string;
}

const UHCButtonTextBold:React.FunctionComponent<TextIProps> = ({ text }) => {
  const [loaded] = useFonts({
    "TitilliumWeb-Bold": require("../../../assets/fonts/TitilliumWeb-Bold.ttf")
  });

  return <ButtonText>{text}</ButtonText>;
};

const UHCButton: React.FunctionComponent<IProps> = ({
  text,
  buttonType,
  size,
  disabled,
  onPress
}) => {
  const [loaded] = useFonts({
    "TitilliumWeb-Bold": require("../../../assets/fonts/TitilliumWeb-Bold.ttf")
  });

  const UHCButtonText:React.FunctionComponent<TextIProps> = ({ text }) => {
    return <ButtonText>{text}</ButtonText>;
  };

  return (
    <Button activeOpacity={0.9} onPress={onPress} disabled={disabled}>
      <ButtonGradient
        colors={[...getButtonBackground(disabled, buttonType)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <UHCButtonText text={text} />
      </ButtonGradient>
    </Button>
  );
};

UHCButton.defaultProps = {
  buttonType: "primary",
  size: "big",
  disabled: false
};

export default UHCButton;
