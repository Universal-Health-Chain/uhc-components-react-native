import React, { useEffect, useState } from "react";
import { View, Text, ViewStyle, StyleProp, TextStyle } from "react-native";
import {
  InputContainer,
  InputLabel,
  UHCTextInput,
  getContainerColor,
  ContainerGradient
} from "./style";
import { useFonts } from "expo-font";

interface IProps {
  label?: string;
  multiline?: boolean;
  value?: string;
  disabled?: boolean;
  keyboardType?:
    | "default"
    | "numeric"
    | "email-address"
    | "ascii-capable"
    | "numbers-and-punctuation"
    | "url"
    | "number-pad"
    | "phone-pad"
    | "name-phone-pad"
    | "decimal-pad"
    | "twitter"
    | "web-search"
    | "visible-password";
  secureTextEntry?: boolean;
  onSubmitEditing?: (event: any) => void;
  setInputState: React.Dispatch<any>;
  error?: string;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  labelWidth?: string;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const UHCInputWithoutForward: React.ForwardRefRenderFunction<
  unknown,
  IProps
> = (
  {
    label,
    multiline,
    labelWidth,
    value,
    disabled,
    keyboardType,
    secureTextEntry,
    onSubmitEditing,
    setInputState,
    error,
    autoCapitalize,
    containerStyle,
    textStyle
  },
  ref
) => {
  const [loaded] = useFonts({
    "TitilliumWeb-SemiBold": require("../assets/fonts/TitilliumWeb-SemiBold.ttf"),
    "TitilliumWeb-Bold": require("../assets/fonts/TitilliumWeb-Bold.ttf")
  });

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value ? value : "");
  const [multilineHeight, setMultilineHeight] = useState(20);

  useEffect(() => {
    if (setInputState) {
      setInputState(inputValue);
    }
  }, [inputValue, value]);

  return (
    <View
      style={[
        {
          width: "100%",
          height: multiline ? multilineHeight + 50 : 70
        },
        containerStyle ? containerStyle : {}
      ]}
    >
      <InputLabel>{label}</InputLabel>
      <ContainerGradient
        multilineHeight={multiline ? multilineHeight + 21 : 38}
        multiline={multiline}
        colors={[...getContainerColor(error, isFocused)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <InputContainer
          multiline={multiline}
          multilineHeight={multiline ? multilineHeight + 18 : 35}
          disabled={disabled}
        >
          <UHCTextInput
            multilineHeight={multiline ? multilineHeight + 18 : 35}
            multiline={multiline}
            editable={!disabled}
            disabled={disabled}
            ref={ref}
            maxLength={255}
            value={inputValue ? inputValue : value}
            onChangeText={(text: string) => {
              setInputValue(text);
            }}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            blurOnSubmit
            secureTextEntry={secureTextEntry}
            onSubmitEditing={onSubmitEditing}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onContentSizeChange={(event: any) => {
              setMultilineHeight(event.nativeEvent.contentSize.height);
            }}
            style={textStyle ? textStyle : null}
          />
        </InputContainer>
      </ContainerGradient>
      {error && !!error.trim() ? (
        <Text style={{ color: "red", marginLeft: "14%" }}>{error}</Text>
      ) : null}
    </View>
  );
};
export const UHCInput = React.forwardRef(UHCInputWithoutForward);

UHCInput.defaultProps = {
  value: "",
  disabled: false,
  multiline: false,
  keyboardType: "default",
  secureTextEntry: false,
  labelWidth: "30%",
  autoCapitalize: "sentences"
};

export default UHCInput;
