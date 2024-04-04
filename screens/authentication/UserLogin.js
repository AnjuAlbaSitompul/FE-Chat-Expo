import { StyleSheet, SafeAreaView, Platform, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import React from 'react'
import FormLogin from '../../components/form/FormLogin'
import TextTitle from '../../components/text/TextTitle'
import { color } from '../../constants/appearance'
import { tokenStore, userStore } from '../../store/auth-store'

const UserLogin = () => {

  // const loginHandler = () => {
  //   tokenStore((state) => state.setToken('token'))
  //   userStore((state) => state.setUser({ username: 'username' }))
  // }

  return (
    <SafeAreaView style={styles.root}>
      <TextTitle title={'Sign In'} subTitle={'Please login to continue'} />
      <FormLogin />
    </SafeAreaView>
  )
}

export default UserLogin

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingHorizontal: 10,
    backgroundColor: color.white
  }
})