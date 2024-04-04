import { View, StyleSheet, Text } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { color, size } from "../../constants/appearance"

const toastConfig = {
    costumeToast: ({ text1, props }) => (
        <View style={[styles.rootToast, {backgroundColor: props.status === 'success' ? color.success : color.danger}]}>
            <Ionicons
                name={props.status === 'success' ? 'checkmark-circle' : 'close-circle'}
                color={color.white}
                size={size.normal}
            />
            <Text style={styles.toastText}>{text1}</Text>
        </View>
    )
}

export {
    toastConfig
}

const styles = StyleSheet.create({
    rootToast: {
        zIndex: 100,
        elvation: 2,
        width: '90%',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    toastText: {
        color: color.white,
        marginLeft: 10,
        fontSize: size.small,
        flex: 1
    }
})