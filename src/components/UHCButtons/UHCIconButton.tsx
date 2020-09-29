import React from "react";
import { GestureResponderEvent, View, Text } from "react-native";
import {
  getButtonBackground,
  Button,
  ButtonGradient,
  ButtonText,
  SecondaryButtonText,
  getButtonSize,
  getIconColor,
  ButtonInnerContainer,
  RoundButtonInnerContainer,
} from "./style";
import { IconNames } from "./IconNames";
import { useFonts } from "expo-font";
import { Icon } from "react-native-elements";

interface IProps {
  text: string;
  iconName: IconNames;
  iconSize?: number;
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

const UHCIconButton: React.FunctionComponent<IProps> = ({
  text,
  iconName,
  iconSize,
  buttonType,
  size,
  disabled,
  onPress,
}) => {
  const [loaded] = useFonts({
    "TitilliumWeb-Bold": require("../../../assets/fonts/TitilliumWeb-Bold.ttf"),
  });

  const UHCButtonText: React.FunctionComponent<TextIProps> = ({
    text,
    buttonType,
    disabled,
  }) => {
    switch (buttonType) {
      case "secondary":
        if (!disabled) return <SecondaryButtonText>{text}</SecondaryButtonText>;
      default:
        return <ButtonText>{text}</ButtonText>;
    }
  };

  if (!!text) {
    return (
      <Button
        style={{ width: "100%", height: 35 }}
        activeOpacity={0.9}
        onPress={onPress}
        disabled={disabled}
      >
        <ButtonGradient
          colors={[...getButtonBackground(disabled, buttonType)]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <ButtonInnerContainer disabled={disabled} buttonType={buttonType}>
            <Icon
              name={iconName}
              size={iconSize}
              color={getIconColor(disabled, buttonType)}
              containerStyle={{
                paddingHorizontal: 0,
              }}
            />
            <UHCButtonText text={text} buttonType={buttonType} />
          </ButtonInnerContainer>
        </ButtonGradient>
      </Button>
    );
  } else {
    return (
      <Button
        style={{
          width: 100,
          height: 100,
          borderRadius: 5000,
        }}
        activeOpacity={0.9}
        onPress={onPress}
        disabled={disabled}
      >
        <ButtonGradient
          style={{
            width: 100,
            height: 100,
            borderRadius: 5000,
            maxHeight: 1000,
          }}
          colors={[...getButtonBackground(disabled, buttonType)]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        >
          <RoundButtonInnerContainer
            disabled={disabled}
            buttonType={buttonType}
          >
            <Icon
              name={iconName}
              size={iconSize}
              color={getIconColor(disabled, buttonType)}
              containerStyle={{
                paddingHorizontal: 0,
              }}
            />
          </RoundButtonInnerContainer>
        </ButtonGradient>
      </Button>
    );
  }
};

UHCIconButton.defaultProps = {
  buttonType: "primary",
  size: "small",
  disabled: false,
  iconSize: 28,
};

export default UHCIconButton;
