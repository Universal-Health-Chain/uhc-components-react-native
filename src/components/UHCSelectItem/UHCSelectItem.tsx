import React from "react";
import {
  SelectItemLabel,
  UHCSelectorTextInput,
  UHCModalSelector,
  ModalInnerContainer
} from "./style";
import { View, Text } from "react-native";

interface SelectData {
  key?: number;
  label: string;
  value: string | null;
}

interface IProps {
  label: string;
  value: SelectData,
  initialValue?: SelectData;
  data: SelectData[];
  disabled?: boolean;
  error?: string;
  onChange?: ((option: SelectData) => void) | undefined;
}

const UHCSelectItem: React.FunctionComponent<IProps> = ({
  label,
  value,
  initialValue,
  data,
  onChange,
  error
}) => {
  return (
    <View>
      <SelectItemLabel>{label}</SelectItemLabel>
      <UHCModalSelector
        data={data}
        initValue={initialValue ? initialValue.label : "-"}
        keyExtractor={(item: SelectData) => item.label}
        onChange={onChange}
        error={error}
      >
        <ModalInnerContainer>
          <UHCSelectorTextInput
            editable={false}
            placeholder={initialValue ? initialValue.label : "-"}
            value={value ? value.label : "-"}
          />
        </ModalInnerContainer>
      </UHCModalSelector>
      {error && !!error.trim() ? (
        <Text style={{ color: "red", marginLeft: "14%" }}>{error}</Text>
      ) : null}
    </View>
  );
};

UHCSelectItem.defaultProps = {
  initialValue: { value: null, label: "-" },
  disabled: false
};

export default UHCSelectItem;
