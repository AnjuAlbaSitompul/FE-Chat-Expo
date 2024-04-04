import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import DefaultInput from '../text-input/DefaultInput'
import DefaultButton from '../button/DefaultButton'
import { color } from '../../constants/appearance'

const FormLogin = ({loginPress}) => {
    return (
        <KeyboardAvoidingView behavior='padding'>
            <DefaultInput icon={'person-outline'} placeHolder={'Username'} />
            <DefaultInput icon={'shield-half-outline'} placeHolder={'Password'} type={'password'} />
            <DefaultButton text={'Login'} color={color.white} icon={'log-in-outline'} style={styles.loginButton} onPress={loginPress}/>
        </KeyboardAvoidingView>
    )
}

export default FormLogin

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: color.primary,
        padding: 10,
        borderRadius: 5
    }
})