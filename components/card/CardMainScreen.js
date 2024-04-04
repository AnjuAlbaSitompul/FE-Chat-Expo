import { View, StyleSheet, Text, Platform, StatusBar, SafeAreaView } from "react-native"
import { color, size } from "../../constants/appearance"
import DefaultInput from "../text-input/DefaultInput"
import { userStore } from "../../store/auth-store"
import DefaultButton from "../button/DefaultButton"

const HeaderMainScreen = () => {
    const username = userStore(state => state.user.username)
    return (
        <SafeAreaView style={[styles.root, styles.paddingHeader]}>
            <Text style={styles.text}>{username}</Text>
        </SafeAreaView>
    )
}

const FooterMainScreen = () => {
    return (
        <SafeAreaView style={[styles.root, styles.paddingFooter]}>
            <View style={styles.footerContainer}>
                <DefaultInput placeHolder={'Coba Ketik Kontol'} style={styles.chatInput}/>
                <DefaultButton icon={'paper-plane-outline'} color={color.white} style={{ padding: 5 }}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        backgroundColor: color.primary,
    },
    paddingHeader: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    },
    paddingFooter: {
        paddingBottom: Platform.OS === 'android' ? 15 : 0

    },
    text: {
        color: color.white,
        fontSize: size.normal
    },
    footerContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    chatInput:{
        padding: 2,
        marginBottom: 0,
        borderRadius: 20,
        flex: 1
    }
})

export default {
    HeaderMainScreen,
    FooterMainScreen
}