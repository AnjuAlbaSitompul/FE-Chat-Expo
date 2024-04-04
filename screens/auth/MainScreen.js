import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native'
import React from 'react'
import CardMainScreen from '../../components/card/CardMainScreen'

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
        <CardMainScreen.HeaderMainScreen />
        <View style={styles.contentContainer}>
            <Text>Content</Text>
        </View>
        <CardMainScreen.FooterMainScreen/>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    root:{
        flex: 1,
    },
    contentContainer:{ 
        flex: 1,
        paddingHorizontal: 10
    }
})