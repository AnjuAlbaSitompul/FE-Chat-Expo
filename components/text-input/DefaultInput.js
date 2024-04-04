import { StyleSheet, Text, View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { color, size } from '../../constants/appearance'
import { useState } from 'react'
import DefaultButton from '../button/DefaultButton'

const DefaultInput = ({ icon, placeHolder, keyboard, type, style }) => {

  const [isFocus, setIsFocus] = useState(false)
  const [showPassword, setShowPassword] = useState(true)

  const pressShow = () => {
    setShowPassword(!showPassword)
  }

  return (
    <View style={[styles.root, { borderColor: isFocus ? color.secondary : color.light }, style]}>
      <Ionicons
        name={icon}
        size={size.veryLarge}
        color={isFocus ? color.secondary : color.light}
      />
      <TextInput
        keyboardType={keyboard ? keyboard : null}
        secureTextEntry={type === 'password' ? showPassword : false}
        placeholder={placeHolder}
        style={styles.textInput}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        placeholderTextColor={color.light}
      />
      {
        type === 'password' && (
          <DefaultButton icon={showPassword ? 'eye-off-outline' : 'eye-outline'} color={isFocus ? color.secondary : color.light} onPress={pressShow} />
        )
      }
    </View>
  )
}

export default DefaultInput

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: color.white
  },
  textInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: size.normal,
    color: color.secondary,
  }
})