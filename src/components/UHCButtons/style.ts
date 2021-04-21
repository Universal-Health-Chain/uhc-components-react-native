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

export const getFontColor = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return "white";
  }

  switch (buttonType) {
    case "secondary":
    case "secondaryDanger":
      return "#999999";
    default:
      return "white";
  }
};

export const UHCButtonText = styled.Text((props: any) => {
  return {
    ...textStyle,
    color: getFontColor(props.disabled, props.buttonType)
  };
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
  justifyContent: "center",
  alignSelf: "stretch",
  borderRadius: 50
};

const UHCBadgeTextStyle = {
  fontFamily: "TitilliumWeb-Bold",
  textAlign: "center",
  textAlignVertical: "center"
};

const UHCBadgeContainerStyle = {
  justifyContent: "center",
  alignItems: "center",
  height: 27,
  minWidth: 27,
  marginLeft: 10,
  borderRadius: 50
};

const roundIconButtonContainer = {
  height: "100%",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 5000
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
const getBadgeBackgroundColor = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return "white";
  }

  switch (buttonType) {
    case "primary":
      return "white";
    case "secondary":
      return theme.color.tertiary;
    case "danger":
      return "white";
    case "secondaryDanger":
      return theme.color.dangerPrimary;
    default:
      return "transparent";
  }
};
const getBadgeTextColor = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return "#999999";
  }

  switch (buttonType) {
    case "primary":
      return "#999999";
    case "secondary":
      return "white";
    case "danger":
      return "#999999";
    case "secondaryDanger":
      return "white";
    default:
      return "transparent";
  }
};

export const UHCBadgeNumber = styled.Text((props: any) => {
  const badgeFontSize =
    props.badgeNumber > 99 ? 14 : props.badgeNumber === 0 ? 0 : 16;

  return {
    ...UHCBadgeTextStyle,
    color: getBadgeTextColor(props.disabled, props.buttonType),
    fontSize: badgeFontSize
  };
});
export const UHCBadgeContainer = styled.View((props: any) => {
  return {
    ...UHCBadgeContainerStyle,
    backgroundColor: getBadgeBackgroundColor(props.disabled, props.buttonType)
  };
});

export const ButtonInnerContainer = styled.View((props: any) => {
  return {
    ...iconButtonContainer,
    backgroundColor: getInnerBackgroundColor(props.disabled, props.buttonType)
  };
});
export const IconButtonInnerContainer = styled.View((props: any) => {
  return {
    ...iconButtonContainer,
    justifyContent: "space-evenly",
    backgroundColor: getInnerBackgroundColor(props.disabled, props.buttonType)
  };
});

export const RoundButtonInnerContainer = styled.View((props: any) => {
  return {
    ...roundIconButtonContainer,
    backgroundColor: getInnerBackgroundColor(props.disabled, props.buttonType)
  };
});
