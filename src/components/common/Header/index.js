import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { LanguageContext } from '../../../context/LanguageContext'
import { ThemeContext } from '../../../context/ThemeContext'
import { Appbar } from 'react-native-paper';


const Header = () => {

  const [I18n, changeLanguage] = useContext(LanguageContext)
  const [theme, setTheme] = useContext(ThemeContext)

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={() => { }} />
      <Appbar.Content title="Title" />
      <Appbar.Action icon="calendar" onPress={() => { }} />
      <Appbar.Action icon="magnify" onPress={() => { }} />
    </Appbar.Header>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBottomWidth: 1,
  }
})