import styled from "@emotion/native";
import theme from "uhc-themes";
import ModalSelector from "react-native-modal-selector";

const externalContainer = {
  width: "86%",
  marginHorizontal: "7%",
  marginVertical: 6,
  padding: 2,
  borderRadius: 17
};

export const UHCModalSelector = styled(ModalSelector)((props: any) => {
  return [
    { ...externalContainer, backgroundColor: props.error ? "red" : "gray" }
  ];
});

const internalContainer = {
  backgroundColor: "white",
  alignItems: "center",
  paddingVertical: "1%",
  borderRadius: 50
};

export const ModalInnerContainer = styled.View((props: any) => {
  return [
    {
      ...internalContainer
    }
  ];
});

const labelStyle = {
  fontFamily: "TitilliumWeb-Bold",
  textAlign: "left",
  color: theme.color.gray,
  marginHorizontal: "7%",
  fontSize: 15
};

export const SelectItemLabel = styled.Text((props: any) => {
  return [
    {
      ...labelStyle
    }
  ];
});

const textStyle = {
  fontFamily: "TitilliumWeb-SemiBold",
  textAlign: "left",
  textAlignVertical: "center",
  color: theme.color.gray,
  backgroundColor: "white",
  paddingVertical: 0,
  width: "95%",
  fontSize: 19,
  borderRadius: 50
};

export const UHCSelectorTextInput = styled.TextInput((props: any) => {
  return [{ ...textStyle }];
});
