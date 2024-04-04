import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { tokenStore } from '../../store/auth-store'
import { useEffect } from 'react'
import { toastShow } from '../../utils/toast/show-toast'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserLogin from '../../screens/authentication/UserLogin'
import MainScreen from '../../screens/auth/MainScreen'
import { defaultScreenOptions } from '../../constants/screen-option'

const Stack = createNativeStackNavigator()
const Navigation = () => {
    const token = tokenStore((state) => state.token)
    const setToken = tokenStore((state) => state.setToken)

    useEffect(() => {
        (async () => {
            const token = await AsyncStorage.getItem("token")
            if (token) {
                setToken(token)
            } else {
                toastShow("Token not found", "danger")
            }
        })()
    }, [])

    const Auth = () => {
        return(
            <Stack.Navigator screenOptions={defaultScreenOptions}>
                <Stack.Screen name='main' component={MainScreen} />
            </Stack.Navigator>
        )
    }

    const Authentication = () => {
        return(
            <Stack.Navigator screenOptions={defaultScreenOptions}>
                <Stack.Screen name='login' component={UserLogin} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer >
            {!token ? <Authentication/> : <Auth/>}
        </NavigationContainer>
    )
}

export default Navigation