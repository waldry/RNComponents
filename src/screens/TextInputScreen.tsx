import React from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';
import {useForm} from '../hooks/useForm';
import {CustomSwitch} from '../components/CustomSwitch';

export const TextInputScreen = () => {
  const {handleChange, form, isSuscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSuscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Inputs" />

          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => handleChange(value, 'name')}
          />
          <TextInput
            style={stylesScreen.inputStyle}
            autoCorrect={false}
            placeholder="Ingrese su email"
            autoCapitalize="none"
            onChangeText={value => handleChange(value, 'email')}
            keyboardType="email-address"
          />

          <View style={stylesScreen.switchRow}>
            <Text style={stylesScreen.switchText}>IsActive</Text>
            <CustomSwitch
              isOn={isSuscribed}
              onChange={value => handleChange(value, 'isSuscribed')}
            />
          </View>

          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
          <TextInput
            style={stylesScreen.inputStyle}
            placeholder="Ingrese su teléfono"
            onChangeText={value => handleChange(value, 'phone')}
            keyboardType="phone-pad"
          />
        </View>
        <View style={{height: 100}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: 'rgba(0,0,0,0.3)',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
