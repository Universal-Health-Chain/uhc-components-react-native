import styled from "@emotion/native";
import theme from "uhc-themes";
import { Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";

export const getContainerColor = (
  error: string | undefined,
  isFocused: boolean
) => {
  if (error) {
    return ["red", "red"];
  }

  if (isFocused) {
    return [theme.color.primary, theme.color.secondary];
  } else {
    return [theme.color.gray, theme.color.gray];
  }
};

const inputContainerStyle = {
  width: "100%",
  flexDirection: "row",
  alignItems: "stretch",
  alignContent: "stretch",
  justifyContent: "space-between",
  backgroundColor: "white"
};

export const InputContainer = styled.View((props: any) => {
  return [{ ...inputContainerStyle, borderRadius: props.multiline ? 15 : 17 }];
});

const labelStyle = {
  fontFamily: "TitilliumWeb-Bold",
  textAlign: "left",
  textAlignVertical: "center",
  height: "100%",
  color: theme.color.gray,
  marginLeft: 5,
  paddingVertical: 5,
  lineHeight: 25,
  ...Platform.select({
    ios: { fontSize: 20 },
    android: { fontSize: 19 }
  })
};

export const InputLabel = styled.Text((props: any) => {
  return [
    {
      ...labelStyle,
      width: props.labelWidth,
      borderRadius: props.multiline ? 15 : 17
    }
  ];
});

const textStyle = {
  fontFamily: "TitilliumWeb-SemiBold",
  textAlign: "left",
  paddingLeft: "2%",
  paddingVertical: 0,
  color: theme.color.gray,
  backgroundColor: "white",
  marginRight: 5,
  borderRadius: 17,
  lineHeight: 25,
  ...Platform.select({
    ios: { fontSize: 20 },
    android: { fontSize: 19 }
  })
};

export const UHCTextInput = styled.TextInput((props: any) => {
  return [{ ...textStyle, borderRadius: props.multiline ? 15 : 17 }];
});

export const ContainerGradient = styled(LinearGradient)((props: any) => {
  return {
    width: "86%",
    marginHorizontal: "7%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    padding: 2,
    borderRadius: props.multiline ? 15 : 17
  };
});
