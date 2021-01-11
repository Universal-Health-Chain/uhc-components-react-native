import React, { useEffect, useState } from "react";
import { GestureResponderEvent, View, Text } from "react-native";
import {
  getButtonBackground,
  Button,
  ButtonGradient,
  ButtonText,
  SecondaryButtonText,
  ButtonInnerContainer,
  UHCBadge
} from "./style";
import { useFonts } from "expo-font";

interface IProps {
  text: string;
  buttonType?: "primary" | "secondary" | "danger" | "secondaryDanger";
  disabled?: boolean;
  badgeNumber?: number;
  onPress: (event: GestureResponderEvent) => void;
}

interface TextIProps {
  text: string;
  buttonType?: "primary" | "secondary" | "danger" | "secondaryDanger";
  disabled?: boolean;
}

const UHCButton: React.FunctionComponent<IProps> = ({
  text,
  buttonType,
  disabled,
  onPress,
  badgeNumber
}) => {
  const [loaded] = useFonts({
    "TitilliumWeb-Bold": require("../../../assets/fonts/TitilliumWeb-Bold.ttf")
  });

  const UHCButtonText: React.FunctionComponent<TextIProps> = ({
    text,
    buttonType,
    disabled,
  }) => {
    switch (buttonType) {
      case "secondaryDanger":
      case "secondary":
        if (!disabled) return <SecondaryButtonText>{text}</SecondaryButtonText>;
      default:
        return <ButtonText>{text}</ButtonText>;
    }
  };

  return (
    <Button
      style={{ width: "100%", height: 35 }}
      activeOpacity={0.9}
      onPress={onPress}
      disabled={disabled}
    >
      <ButtonGradient
        style={{ height: "100%" }}
        colors={[...getButtonBackground(disabled, buttonType)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <ButtonInnerContainer disabled={disabled} buttonType={buttonType}>
          <UHCButtonText text={text} buttonType={buttonType} />
          {!!badgeNumber && (
            <UHCBadge
              disabled={disabled}
              buttonType={buttonType}
              badgeNumber={badgeNumber}
            >
              {badgeNumber > 99 ? "99+" : badgeNumber}
            </UHCBadge>
          )}
        </ButtonInnerContainer>
      </ButtonGradient>
    </Button>
  );
};

UHCButton.defaultProps = {
  buttonType: "primary",
  disabled: false,
};

export default UHCButton;
