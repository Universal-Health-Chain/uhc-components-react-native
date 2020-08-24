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

interface IProps {
  label: string;
  date?: string;
  minDate?: Date;
  maxDate?: Date;
  mode?: "date" | "time";
  language?: "es" | "en" | "fr";
  disabled: boolean;
  onSubmitEditing?: (event: any) => void;
  onDateChange?: any;
  setInputState: React.Dispatch<any>;
  error?: string;
  labelWidth: string;
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
    error
  },
  ref
) => {
  const [loaded] = useFonts({
    "TitilliumWeb-SemiBold": require("../../../assets/fonts/TitilliumWeb-SemiBold.ttf"),
    "TitilliumWeb-Bold": require("../../../assets/fonts/TitilliumWeb-Bold.ttf")
  });

  const [show, setShow] = useState(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(date ? date : "");

  const [inputDate, setInputDate] = useState(date);

  useEffect(() => {
    if (setInputState) setInputState(date);
  }, [date]);

  useEffect(() => {
    setInputState ? setInputState(inputDate) : null;
    () => setShow(Platform.OS === "ios");
  }, [inputDate]);

  useEffect(() => {
    if (setInputState) {
      setInputState(inputValue);
    }
  }, [inputValue]);

  return (
    <View>
      <ContainerGradient
        colors={[...getContainerColor(error, isFocused)]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <InputContainer multiline={false}>
          <InputLabel multiline={false} labelWidth={labelWidth}>
            {label}
          </InputLabel>
          <TouchableOpacity
            style={{
              justifyContent: "center",
              width: 90 - parseFloat(labelWidth) + "%"
            }}
            activeOpacity={1}
            onPress={() => {
              if (!disabled) {
                if (Platform.OS === "android") setShow(true);
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
              {
                //hideText ? '' : date
              }
                          
              {inputDate}            
            </Text>
            {show && (
              <DateTimePicker
                value={(() => {
                  if (mode === "time") {
                    return new Date(
                      moment()
                        .add(1, "minute")
                        .format("MM/DD/YYYY HH:mm")
                    );
                  } else {
                    return new Date(moment().format("MM/DD/YYYY"));
                  }
                })()}
                mode={mode}
                is24Hour={true}
                display="spinner"
                locale={language}
                onChange={(event, date) => {
                  setShow(false);
                  if (date) {
                    mode === "time"
                      ? setInputDate(moment(date).format("HH:mm"))
                      : language === "en"
                      ? setInputDate(moment(date).format("MM/DD/YYYY"))
                      : setInputDate(moment(date).format("DD/MM/YYYY"));
                  }
                  onDateChange ? onDateChange(false) : null;
                }}
                minimumDate={
                  minDate
                    ? language === "en"
                      ? new Date("02/01/1900")
                      : new Date("01/02/1900")
                    : new Date(1598011730000)
                }
                maximumDate={
                  maxDate && mode != "time"
                    ? language === "en"
                      ? new Date(moment().format("MM/DD/YYYY"))
                      : new Date(moment().format("DD/MM/YYYY"))
                    : new Date(1598951730000)
                }
                /* minimumDate={(() => {
                  if (!minDate) {
                    return language === "en"
                      ? new Date("02/01/1900")
                      : new Date("01/02/1900");
                  } else {
                    console.log("min")
                    console.log(minDate)
                    //return minDate;
                    return new Date(159805173000);
                  }
                })()}
                maximumDate={(() => {
                  if (!maxDate) {
                    if (mode != "time") {
                      return language === "en"
                        ? new Date(moment().format("MM/DD/YYYY"))
                        : new Date(moment().format("DD/MM/YYYY"));
                    }
                  } else {
                    console.log("max")
                    console.log(maxDate)
                    //return new Date(maxDate.toString());
                    return new Date(1598951730000);
                  }
                })()} */
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

/* 
export function UHCDateInput({
  date = '',
  mode = 'date',
  hideText = false,
  label,
  minDate = null,
  maxDate = null,
  language = 'es',
  onDateChange = null,
  setInputState = null,
  labelWidth = '35%',
  disabled = false,
  error = null,
  containerStyle = null,
}) {
  const [inputDate, setInputDate] = useState(date);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (setInputState) setInputState(date);
  }, [date]);

  useEffect(() => {
    setInputState ? setInputState(inputDate) : null;
    () => setShow(Platform.OS === 'ios');
  }, [inputDate]);

  return (
    <View style={containerStyle}>
      <View
        style={[
          styles.UHCInputContainer,
          {
            borderColor: error ? 'red' : colorPalette.gray,
            backgroundColor: disabled ? 'lightgray' : 'white',
          },
        ]}>
        <Text
          style={[
            styles.label,
            globalStyle.centeredItems,
            globalStyle.textFont,
            {width: labelWidth},
          ]}>
          {label}
        </Text>
        <TouchableOpacity
          containerStyle={{
            justifyContent: 'center',
            width: '50%',
            paddingRight: inputDate && mode != 'time' ? 0 : '20%',
          }}
          activeOpacity={1}
          onPress={() => {
            if (!disabled) {
              if (Platform.OS === 'android') setShow(true);
            }
          }}>
          <Text
            style={[
              styles.input,
              globalStyle.centeredItems,
              globalStyle.textFont,
            ]}>
            {hideText ? '' : date}            
          </Text>
          {show ? (
            <DateTimePicker
              value={(() => {
                if (mode === 'time') {
                  return new Date(
                    moment().add(1, 'minute').format('MM/DD/YYYY HH:mm'),
                  );
                } else {
                  console.log('ID: ', inputDate);
                  if (inputDate) {
                    return new Date(inputDate);
                  } else {
                    return language === 'en'
                      ? new Date(moment().format('MM/DD/YYYY'))
                      : new Date(moment().format('DD/MM/YYYY'));
                  }
                }
              })()}
              mode={mode}
              is24Hour={true}
              display="spinner"
              onChange={(event, date) => {
                setShow(false);
                if (date) {
                  mode === 'time'
                    ? setInputDate(moment(date).format('HH:mm'))
                    : language === 'en'
                    ? setInputDate(moment(date).format('MM/DD/YYYY'))
                    : setInputDate(moment(date).format('DD/MM/YYYY'));
                }
                onDateChange ? onDateChange(false) : null;
              }}
              minimumDate={(() => {
                if (!minDate) {
                  return language === 'en'
                    ? new Date('02/01/1900')
                    : new Date('01/02/1900');
                } else {
                  return minDate;
                }
              })()}
              maximumDate={(() => {
                if (!maxDate) {
                  if (mode != 'time') {
                    return language === 'en'
                      ? new Date(moment().format('MM/DD/YYYY'))
                      : new Date(moment().format('DD/MM/YYYY'));
                  }
                } else {
                  return new Date(maxDate);
                }
              })()}
            />
          ) : null}
        </TouchableOpacity>
        <Icon
          name="date-range"
          color={colorPalette.inBetweenColor}
          size={30}
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            width: '11%',
          }}
        />
      </View>
      {error && !!error.trim() ? (
        <Text style={{color: 'red', marginLeft: '14%'}}>{error}</Text>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  UHCInputContainer: {
    borderRadius: 5,
    flexDirection: 'row',
    width: '86%',
    marginHorizontal: '7%',
    marginVertical: 10,
    borderWidth: 1,
    paddingHorizontal: '2%',
    alignItems: 'stretch',
    alignContent: 'stretch',
    justifyContent: 'space-between',
    ...Platform.select({
      ios: {},
      android: {},
    }),
  },
  label: {
    fontWeight: '500',
    textAlign: 'left',
    height: '100%',
    color: colorPalette.gray,
    marginVertical: '1%',
    ...Platform.select({
      ios: {fontSize: 20},
      android: {fontSize: 19},
    }),
  },
  input: {
    textAlign: 'left',
    fontSize: 18,
    paddingVertical: 0,
    paddingLeft: '2%',
    color: colorPalette.gray,
  },
});
 */
