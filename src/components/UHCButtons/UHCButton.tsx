import React, { useEffect, useState } from "react";
import { GestureResponderEvent, View, Text } from "react-native";
import {
  getButtonBackground,
  Button,
  ButtonGradient,
  ButtonText,
  SecondaryButtonText,
  SecondaryButton
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
  buttonType?: "primary" | "secondary" | "danger";
  disabled?: boolean;
}

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

  const UHCButtonText: React.FunctionComponent<TextIProps> = ({
    text,
    buttonType,
    disabled
  }) => {
    switch (buttonType) {
      case "secondary":
        if (!disabled) return <SecondaryButtonText>{text}</SecondaryButtonText>;
      default:
        return <ButtonText>{text}</ButtonText>;
    }
  };

  switch (buttonType) {
    case "secondary":
        return (
          <SecondaryButton activeOpacity={0.9} onPress={onPress} disabled={disabled}>
            <ButtonGradient
              colors={[...getButtonBackground(disabled, buttonType)]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <UHCButtonText text={text} buttonType={buttonType} />
            </ButtonGradient>
          </SecondaryButton>
        );
    default:
        return (
          <Button activeOpacity={0.9} onPress={onPress} disabled={disabled}>
            <ButtonGradient
              colors={[...getButtonBackground(disabled, buttonType)]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
            >
              <UHCButtonText text={text} buttonType={buttonType} />
            </ButtonGradient>
          </Button>
        );
  }
  
};

UHCButton.defaultProps = {
  buttonType: "primary",
  size: "big",
  disabled: false
};

export default UHCButton;
