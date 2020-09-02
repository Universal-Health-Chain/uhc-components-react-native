import React, { useEffect, useState } from "react";
import { View, Text, Platform, TouchableOpacity } from "react-native";
import {
  InputContainer,
  InputLabel,
  getContainerColor,
  ContainerGradient
} from "./style";
import { useFonts } from "expo-font";
import DateTimePicker from "@react-native-community/datetimepicker";
import moment from "moment";
import DateTimePickerModal from "react-native-modal-datetime-picker";

interface IProps {
  label: string;
  date?: string;
  minDate?: string;
  maxDate?: string;
  mode?: "date" | "time";
  language?: "es" | "en" | "fr";
  disabled?: boolean;
  onSubmitEditing?: (event: any) => void;
  onDateChange?: any;
  setInputState: React.Dispatch<any>;
  error?: string;
  labelWidth?: string;
  showDate?: React.Dispatch<any>;
}

const UHCDateInput: React.FunctionComponent<IProps> = (
  {
    label,
    mode,
    minDate,
    maxDate,
    labelWidth,
    date,
    language,
    disabled,
    onSubmitEditing,
    onDateChange,
    setInputState,
    error,
    showDate
  },
  ref
) => {
  const [loaded] = useFonts({
    "TitilliumWeb-SemiBold": require("../../../assets/fonts/TitilliumWeb-SemiBold.ttf"),
    "TitilliumWeb-Bold": require("../../../assets/fonts/TitilliumWeb-Bold.ttf")
  });

  const [show, setShow] = useState(false);

  const [inputDate, setInputDate] = useState(date);

  useEffect(() => {
    setInputState ? setInputState(inputDate) : null;
  }, [inputDate]);

  return (
    <View>
      <InputLabel>
            {label}
          </InputLabel>
      <ContainerGradient
        colors={[...getContainerColor(error, false)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <InputContainer multiline={false}>
          
          <TouchableOpacity
          style={{width: "100%"}}
            activeOpacity={1}
            onPress={() => {
              if (!disabled) {
                setShow(true);
              }
            }}
          >
            <Text
              style={[
                {
                  fontFamily: "TitilliumWeb-Bold",
                  textAlign: "left",
                  fontSize: 18,
                  paddingVertical: 0,
                  marginVertical: 0,
                  color: "#999999"
                }
              ]}
            >
                    
              {inputDate &&
                (() => {
                  if (mode === "date") {
                    return language === "es"
                      ? moment(inputDate).format("DD/MM/YYYY")
                      : moment(inputDate).format("MM/DD/YYYY");
                  } else {
                    return moment(inputDate).format("HH:mm");
                  }
                })()}
                    
            </Text>
            {Platform.OS === "android" ? (
              show && (
                <DateTimePicker
                  value={(() => {
                    if (mode === "time") {
                      return new Date(
                        moment()
                          .add(1, "minute")
                          .format("MM/DD/YYYY HH:mm")
                      );
                    } else {
                      return date
                        ? new Date(date)
                        : new Date(moment().format("MM/DD/YYYY"));
                    }
                  })()}
                  mode={mode}
                  is24Hour={true}
                  display="spinner"
                  locale={language}
                  onChange={(event, date) => {
                    setShow(false);
                    if (date) {
                      setInputDate(moment(date).toISOString());
                    }
                  }}
                  minimumDate={
                    minDate ? new Date(minDate) : new Date("01/02/1900")
                  }
                  maximumDate={
                    maxDate ? new Date(maxDate) : new Date("01/02/2100")
                  }
                />
              )
            ) : (
              <DateTimePickerModal
                isVisible={show}
                date={(() => {
                  if (mode === "time") {
                    return new Date(
                      moment()
                        .add(1, "minute")
                        .format("MM/DD/YYYY HH:mm")
                    );
                  } else {
                    return date
                      ? new Date(date)
                      : new Date(moment().format("MM/DD/YYYY"));
                  }
                })()}
                onConfirm={date => {
                  setShow(false);
                  if (date) {
                    setInputDate(moment(date).toISOString());
                  }
                }}
                onCancel={() => setShow(false)}
                mode={mode}
                is24Hour={true}
                display="spinner"
                locale={language}
                minimumDate={
                  minDate ? new Date(minDate) : new Date("01/02/1900")
                }
                maximumDate={
                  maxDate ? new Date(maxDate) : new Date("01/02/2100")
                }
              />
            )}
          </TouchableOpacity>
        </InputContainer>
      </ContainerGradient>
      {error && !!error.trim() ? (
        <Text style={{ color: "red", marginLeft: "14%" }}>{error}</Text>
      ) : null}
    </View>
  );
};

UHCDateInput.defaultProps = {
  mode: "date",
  labelWidth: "30%",
  disabled: false,
  language: "es"
};

export default UHCDateInput;
