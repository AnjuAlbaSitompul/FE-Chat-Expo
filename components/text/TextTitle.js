import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { color, size } from '../../constants/appearance'

const TextTitle = ({title, subTitle}) => {
  return (
    <View style={styles.root}>
      <Text style={[styles.title, styles.bold]}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
    </View>
  )
}

export default TextTitle

const styles = StyleSheet.create({
    root:{
        width: '100%',
        marginBottom: 10
    },
    title:{
        fontSize: size.veryLarge
    },
    subTitle:{
        fontSize: size.large,
        color: color.secondary
    },
    bold:{
        fontWeight: 'bold',
        color: color.secondary
    }
})