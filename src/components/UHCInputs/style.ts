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
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: "1%"
};

export const InputContainer = styled.View((props: any) => {
  return [
    {
      ...inputContainerStyle,
      borderRadius: props.multiline ? 15 : 17,
      height: props.multilineHeight,
      backgroundColor: props.disabled ? "lightgray" : "white"
    }
  ];
});

const labelStyle = {
  fontFamily: "TitilliumWeb-Bold",
  textAlign: "left",
  color: theme.color.gray,
  marginHorizontal: 8,
  ...Platform.select({
    ios: { fontSize: 15 },
    android: { fontSize: 15 }
  })
};

export const InputLabel = styled.Text((props: any) => {
  return [
    props.style ? props.style : {},
    {
      ...labelStyle,
      borderRadius: props.multiline ? 15 : 17
    }
  ];
});

const textStyle = {
  fontFamily: "TitilliumWeb-SemiBold",
  textAlign: "left",
  textAlignVertical: "center",
  color: theme.color.gray,
  justifyContent: "center",
  borderRadius: 17,
  paddingVertical: 0,
  paddingLeft: 8,
  width: "98%",
  ...Platform.select({
    ios: { fontSize: 20 },
    android: { fontSize: 19 }
  })
};

export const UHCTextInput = styled.TextInput((props: any) => {
  return [
    {
      ...textStyle,
      borderRadius: props.multiline ? 15 : 17,
      height: props.multilineHeight,
      backgroundColor: props.disabled ? "lightgray" : "white"
    }
  ];
});

export const ContainerGradient = styled(LinearGradient)((props: any) => {
  return {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 6,
    padding: 2,
    borderRadius: props.multiline ? 15 : 17,
    height: props.multilineHeight
  };
});

export const UHCDateInputText = styled.Text((props: any) => {
  return [
    {
      fontFamily: "TitilliumWeb-Bold",
      textAlign: "left",
      fontSize: 18,
      paddingVertical: 0,
      marginVertical: 0,
      color: "#999999",
      paddingLeft: 10
    }
  ];
});
