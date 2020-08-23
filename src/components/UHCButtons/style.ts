import styled from "@emotion/native";
import theme from "uhc-themes";
import LinearGradient from "react-native-linear-gradient";
import { Platform } from "react-native";

type IButtonType = "primary" | "secondary" | "danger" | undefined;
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
    default:
      return theme.color.white;
  }
};

export const getButtonSize = (size: ISize) => {
  switch (size) {
    case "small":
      return { width: "50%" };
    case "big":
      return { width: "80%" };
    default:
      return { width: "50%" };
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
    case "secondary":
      return [theme.color.primary, theme.color.secondary];
    case "danger":
      return [theme.color.dangerPrimary, theme.color.dangerSecondary];
    default:
      return [theme.color.primary, theme.color.secondary];
  }
};

const buttonStyle = {
  alignSelf: "center",
  borderRadius: 50,
  height: 43,
  //width: 230,
  justifyContent: "center",
  alignItems: "center"
};

export const Button = styled.TouchableOpacity(buttonStyle);

const textStyle = {
  fontFamily: "TitilliumWeb-Bold",
  textAlign: "center",
  textAlignVertical: "center",
  ...Platform.select({
    ios: { fontSize: 20 },
    android: { fontSize: 18 }
  })
};

export const ButtonText = styled.Text({ ...textStyle, color: "white" });
export const SecondaryButtonText = styled.Text({
  ...textStyle,
  color: "#999999"
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
    android: { minHeight: 38, maxHeight: 43 }
  })
};

export const ButtonGradient = styled(LinearGradient)(gradientStyle);

const iconButtonContainer = {
  height: "100%",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  alignSelf: "stretch",
  borderRadius: 50
};

export const ButtonInnerContainer = styled.View((props: any) => {
  return {
    ...iconButtonContainer,
    backgroundColor:
      props.buttonType === "secondary" && !props.disabled
        ? "white"
        : "transparent"
  };
});
