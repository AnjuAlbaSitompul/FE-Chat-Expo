import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { color, size } from '../../constants/appearance'

const DefaultButton = ({ icon, text, color, onPress, style, textStyle }) => {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed ? [styles.root, { opacity: 0.5 }, style] : [styles.root, style]}>
            {icon &&
                <Ionicons name={icon} size={size.veryLarge} color={color} />
            }
            {text &&
                <Text style={[styles.text, textStyle]}>{text}</Text>
            }
        </Pressable>
    )
}

export default DefaultButton

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: size.normal,
        marginLeft: 10,
        color: color.white
    }
})