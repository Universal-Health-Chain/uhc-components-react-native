import styled from "@emotion/native";
import theme from "uhc-themes";
import LinearGradient from "react-native-linear-gradient";
import { Platform } from "react-native";

type IButtonType =
  | "primary"
  | "secondary"
  | "danger"
  | "secondaryDanger"
  | undefined;
type ISize = "big" | "small" | undefined;

export const getIconColor = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) return theme.color.white;

  switch (buttonType) {
    case "secondary":
      return theme.color.gray;
    case "danger":
      return theme.color.dangerPrimary;
    case "secondaryDanger":
      return theme.color.gray;
    default:
      return theme.color.white;
  }
};

export const getButtonBackground = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return [theme.color.gray, theme.color.gray];
  }

  switch (buttonType) {
    case "primary":
      return [theme.color.primary, theme.color.secondary];
    case "secondary":
      return [theme.color.primary, theme.color.secondary];
    case "danger":
      return [theme.color.dangerPrimary, theme.color.dangerSecondary];
    case "secondaryDanger":
      return [theme.color.dangerPrimary, theme.color.dangerSecondary];
    default:
      return [theme.color.primary, theme.color.secondary];
  }
};

const buttonStyle = {
  alignSelf: "center",
  borderRadius: 50,
  height: 40,
  //width: 230,
  justifyContent: "center",
  alignItems: "center",
};

export const Button = styled.TouchableOpacity(buttonStyle);

const textStyle = {
  fontFamily: "TitilliumWeb-Bold",
  textAlign: "center",
  textAlignVertical: "center",
  ...Platform.select({
    ios: { fontSize: 20 },
    android: { fontSize: 18 },
  }),
};

export const ButtonText = styled.Text({ ...textStyle, color: "white" });
export const SecondaryButtonText = styled.Text({
  ...textStyle,
  color: "#999999",
});

const gradientStyle = {
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  padding: 2,
  borderRadius: 50,
  ...Platform.select({
    ios: { minHeight: 45, maxHeight: 50 },
    android: { minHeight: 38, maxHeight: 43 },
  }),
};

export const ButtonGradient = styled(LinearGradient)(gradientStyle);

const iconButtonContainer = {
  height: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  alignSelf: "stretch",
  borderRadius: 50,
};

const roundIconButtonContainer = {
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 5000,
};

const getInnerBackgroundColor = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return "transparent";
  }

  switch (buttonType) {
    case "primary":
      return "transparent";
    case "secondary":
      return "white";
    case "danger":
      return "transparent";
    case "secondaryDanger":
      return "white";
    default:
      return "transparent";
  }
};
export const ButtonInnerContainer = styled.View((props: any) => {
  return {
    ...iconButtonContainer,
    backgroundColor: getInnerBackgroundColor(props.disabled, props.buttonType),
  };
});

export const RoundButtonInnerContainer = styled.View((props: any) => {
  return {
    ...roundIconButtonContainer,
    backgroundColor: getInnerBackgroundColor(props.disabled, props.buttonType),
  };
});
