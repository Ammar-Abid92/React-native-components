import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';


const CustomButton = ({type, icon, onPress}) => {
  return type === "elevated" ?
    <Button icon={icon ? icon : ""} mode="elevated" onPress={onPress}>
        Let's grab
    </Button>
    : null
}

export default CustomButton

const styles = StyleSheet.create({})