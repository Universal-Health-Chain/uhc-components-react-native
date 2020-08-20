import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import {
  InputContainer,
  InputLabel,
  UHCTextInput,
  getContainerColor,
  ContainerGradient
} from "./style";
import { useFonts } from "expo-font";

interface IProps {
  placeholder?: string;
  multiline?: boolean;
  value?: string;
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
  labelWidth: string;
}

const UHCInputWithoutForward: React.ForwardRefRenderFunction<
  unknown,
  IProps
> = (
  {
    placeholder,
    multiline,
    labelWidth,
    value,
    keyboardType,
    secureTextEntry,
    onSubmitEditing,
    setInputState,
    error,
    autoCapitalize
  },
  ref
) => {
  const [loaded] = useFonts({
    "TitilliumWeb-SemiBold": require("../../../assets/fonts/TitilliumWeb-SemiBold.ttf")
  });

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value ? value : "");

  useEffect(() => {
    if (setInputState) {
      setInputState(inputValue);
    }
  }, [inputValue]);

  return (
    <View>
      <ContainerGradient
        multiline={multiline}
        colors={[...getContainerColor(error, isFocused)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <InputContainer multiline={multiline}>
          <InputLabel multiline={multiline} labelWidth={labelWidth}>
            {placeholder}
          </InputLabel>
          <UHCTextInput
            style={[{ width: 95 - parseFloat(labelWidth) + "%" }]}
            multiline={multiline}
            ref={ref}
            maxLength={255}
            value={inputValue}
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
  multiline: false,
  keyboardType: "default",
  secureTextEntry: false,
  labelWidth: "30%",
  autoCapitalize: "sentences"
};

export default UHCInput;
