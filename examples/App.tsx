/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {
  UHCButton,
  UHCDateInput,
  UHCIconButton,
  UHCInput,
  UHCRadioButton,
  UHCSelectItem,
} from 'uhc-components-react-native';

import {TouchableOpacity} from 'react-native';
import moment from 'moment';
import ModalSelector from 'react-native-modal-selector';
import theme from 'uhc-themes';

const App = () => {
  const [error, setError] = useState('');
  const [selected, setSelected] = useState(false);
  const pwdRef = useRef(null);

  const testDateInput = () => {
    return (
      <View style={{height: 200, justifyContent: 'space-around'}}>
        <UHCDateInput
          minDate={moment().subtract('1', 'years').toISOString()}
          label="Fecha de nacimiento"
          setInputState={setError}
        />
        <UHCDateInput label="Time" mode="time" setInputState={setError} />
      </View>
    );
  };

  const testRadioButton = () => {
    return (
      <View
        style={{
          height: 200,
          width: '60%',
          alignSelf: 'center',
          justifyContent: 'space-around',
          paddingVertical: '5%',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text>SELECTED</Text>
          <TouchableOpacity
            onPress={() => {
              setSelected(false);
            }}>
            <UHCRadioButton isSelected={!selected} />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <Text>NOT SELECTED</Text>
          <TouchableOpacity
            onPress={() => {
              setSelected(true);
            }}>
            <UHCRadioButton isSelected={selected} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const testSelectItem = (data: any) => {
    return (
      <View
        style={{
          height: 200,
          justifyContent: 'space-around',
        }}>
        <UHCSelectItem
          label={'HOLA'}
          data={data}
          value={value}
          onChange={(option: any) => {
            const newState = {value: option.value, label: option.label};

            setValue(newState);
          }}
          error={value.value}
        />
      </View>
    );
  };

  useEffect(() => {
    console.log('USE EF');
    console.log(error);
  }, [error]);

  let index = 0;
  const data = [
    {key: index++, label: 'LA nulaza', value: null},
    {key: index++, label: 'Fruits', value: 'frts'},
    {key: index++, label: 'Red Apples', value: 'red'},
    {key: index++, label: 'Cherries', value: 'cherrs'},
    {
      key: index++,
      label: 'Cranberries',
      value: 'crans',
    },
    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    {key: index++, label: 'Vegetable', value: 'veg'},
  ];
  const [value, setValue] = useState({value: null, label: '-'});

  const testInput = () => {
    return (
      <View style={{width: '100%', justifyContent: 'space-around'}}>
        <UHCInput value={'Bruno'} label="Nombre" error={error} />
        <UHCInput
          value={'NOICEEE'}
          label="Fecha de nacimiento"
          onSubmitEditing={() => {
            if (!!pwdRef && !!pwdRef.current) {
              pwdRef.current.focus();
            }
          }}
          error={value.value}
        />
        <UHCInput setInputState={setError} label="multiline" multiline />
        <UHCInput
          setInputState={(val: string) => {
            console.log(val);
          }}
          secureTextEntry
          ref={pwdRef}
          label="Password"
          error={error}
        />
      </View>
    );
  };

  const testButton = () => {
    return (
      <View style={{width: '80%', justifyContent: 'space-around'}}>
        <UHCButton
          text={'Primary'}
          buttonType={'primary'}
          onPress={() => {
            console.log(error);
          }}
        />
        <UHCButton
          text={'Secondary'}
          buttonType={'secondary'}
          onPress={() => {
            console.log('nice');
          }}
        />
        <UHCButton
          text={'Secondary danger'}
          buttonType={'secondaryDanger'}
          onPress={() => {
            console.log('nice');
          }}
        />
        <UHCButton
          text={'Disabled'}
          disabled
          onPress={() => {
            console.log('nice');
          }}
        />
      </View>
    );
  };

  const testIconButton = () => {
    return (
      <View style={{height: 200, justifyContent: 'space-around'}}>
        <UHCIconButton
          iconName={'group'}
          onPress={() => {
            console.log('error');
          }}
        />
        <UHCIconButton
          text={'Camera'}
          iconName={'camera'}
          buttonType={'secondary'}
          onPress={() => {
            console.log('error');
          }}
        />
        <UHCIconButton
          text={'Add'}
          iconName={'add'}
          size={'big'}
          onPress={() => {
            console.log('error');
          }}
        />
        <UHCIconButton
          text={'Disabled'}
          iconName={'add-box'}
          disabled
          onPress={() => {
            console.log('error');
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        height: '100%',
        justifyContent: 'center',
      }}>
      {/* {testIconButton()} */}
      {/* {testButton()} */}
      {/* {testInput()} */}
      {
        //testDateInput()
      }
      {
        //testRadioButton()
      }
      {testSelectItem(data)}
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
