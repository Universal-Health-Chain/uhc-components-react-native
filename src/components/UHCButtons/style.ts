import styled from "@emotion/native";
import theme from "../theme";
import LinearGradient from "react-native-linear-gradient";
import { Platform } from "react-native";

type IButtonType = "primary" | "secondary" | "danger" | undefined;
type ISize = "big" | "small" | undefined;


export const getButtonBackground = (
  disabled: boolean | undefined,
  buttonType: IButtonType
) => {
  if (disabled) {
    return ["gray", "gray"];
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

export const Button = styled.TouchableOpacity({
  alignSelf: "center",
  borderRadius: 50,
  height: "8%",
  width: 230,
  justifyContent: "center",
  alignItems: "center",
  ...Platform.select({
    ios: { minHeight: 45, maxHeight: 50 },
    android: { minHeight: 38, maxHeight: 43 }
  })
});

export const ButtonText = styled.Text({
  fontFamily: "TitilliumWeb-Bold",
  color: "white",
  ...Platform.select({
    ios: { fontSize: 20 },
    android: { fontSize: 18 }
  })
});

export const ButtonGradient = styled(LinearGradient)({
  height: "100%",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 50,
  ...Platform.select({
    ios: { minHeight: 45, maxHeight: 50 },
    android: { minHeight: 38, maxHeight: 43 }
  })
});