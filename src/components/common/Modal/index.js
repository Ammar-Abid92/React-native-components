import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Modal from "react-native-modal";
import { themeStyleSheet } from '../../../constants';
import { LanguageContext } from '../../../context/LanguageContext';
import spacing from '../../../constants/spacing';
import { ThemeContext } from '../../../context/ThemeContext';
import { color } from 'native-base/lib/typescript/theme/styled-system';


const { height, width, fontScale } = Dimensions.get('window');


const CustomModal = ({
    type,
    toggle,
    setToggle,
    language,
    chooseLanguage,
    chooseTheme,

}) => {

    const [I18n, changeLanguage] = useContext(LanguageContext)
    const [theme, setTheme] = useContext(ThemeContext)


    if (type == "languageModal") {
        return (
            <Modal
                isVisible={toggle}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                style={{ margin: 0 }}
                useNativeDriver
                onBackdropPress={() => setToggle(false)}
            >
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View
                        style={{
                            backgroundColor: "white",
                            width: width,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}>
                        <View
                            style={{
                                height: height * 0.1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderColor: theme.jacketColor,
                            }}>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontSize: 16, color: theme.dark }}>
                                    {I18n.select_your_language}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={{
                                    marginRight: 15,
                                    height: '100%',
                                    width: '10%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => setToggle(false)}>
                                <Text> X </Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                height: height * 0.25,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 10
                            }}>
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                    testID="english_button"
                                    style={
                                        language === 'en'
                                            ? { ...styles.btnLanguageSelect, backgroundColor: theme.highlight }
                                            : { ...styles.btnLanguage, backgroundColor: theme.highlight }
                                    }
                                    onPress={() => chooseLanguage('en')}>

                                    <Text
                                        style={
                                            language === 'en'
                                                ? { ...styles.btnText, color: theme.text }
                                                : { ...styles.btnSubText, color: theme.text }
                                        }>
                                        ENGLISH
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                    testID="roman_button"
                                    style={
                                        language === 'roman'
                                            ? { ...styles.btnLanguageSelect, backgroundColor: theme.highlight }
                                            : { ...styles.btnLanguage, backgroundColor: theme.highlight }
                                    }
                                    onPress={() => chooseLanguage('roman')}>

                                    <Text
                                        style={
                                            language === 'roman'
                                                ? { ...styles.btnText, color: theme.text }
                                                : { ...styles.btnSubText, color: theme.text }
                                        }>
                                        ROMAN
                                    </Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>
                </View>
            </Modal>
        )
    } else if (type === "themeModal") {
        return (
            <Modal
                isVisible={toggle}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                style={{ margin: 0 }}
                useNativeDriver
                onBackdropPress={() => setToggle(false)}
            >
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View
                        style={{
                            backgroundColor: "white",
                            width: width,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}>
                        <View
                            style={{
                                height: height * 0.1,
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                borderBottomWidth: 2,
                                borderColor:  theme.jacketColor,
                            }}>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontSize: 16, color: themeStyleSheet.mainColor }}>
                                    {I18n.select_theme}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={{
                                    marginRight: 15,
                                    height: '100%',
                                    width: '10%',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                                onPress={() => setToggle(false)}>
                                <Text> X </Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                height: height * 0.25,
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginTop: 10
                            }}>
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                    
                                    style={
                                        language === 'en'
                                            ? { ...styles.btnLanguageSelect, backgroundColor: theme.highlight }
                                            : { ...styles.btnLanguage, backgroundColor: theme.highlight }
                                    }
                                    onPress={() => chooseTheme("orangeTheme")}>

                                    <Text
                                        style={
                                            language === 'en'
                                                ? styles.btnText
                                                : styles.btnSubText
                                        }>
                                        ORANGE
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    width: '100%',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <TouchableOpacity
                                    testID="roman_button"
                                    style={
                                        language === 'roman'
                                            ? { ...styles.btnLanguageSelect, backgroundColor: theme.highlight }
                                            : { ...styles.btnLanguage, backgroundColor: theme.highlight }
                                    }
                                    onPress={() => chooseTheme('pinkTheme')}>

                                    <Text
                                        style={
                                            language === 'roman'
                                                ? { ...styles.btnText, color: theme.text }
                                                : { ...styles.btnSubText, color: theme.text }
                                        }>
                                        PINK
                                    </Text>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}

export default CustomModal

const styles = StyleSheet.create({

    btnLanguage: {
        borderWidth: 1,
        width: width * 0.4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 5,
        height: spacing.huge,
    },
    btnLanguageSelect: {

        width: width * 0.4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 5,
        height: spacing.huge,
    },

    btnText: {
        fontWeight: "bold",
        fontSize: 16
    },

    btnSubText: {
        fontSize: 12
    },
})