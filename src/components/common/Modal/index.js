import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import Modal from "react-native-modal";
import { themeStyleSheet } from '../../../constants';
import { LanguageContext } from '../../../context/LanguageContext';
import spacing from '../../../constants/spacing';


const { height, width, fontScale } = Dimensions.get('window');


const CustomModal = ({
    type,
    toggle,
    setToggle,
    language,
    chooseLanguage

}) => {

    const [I18n, changeLanguage] = useContext(LanguageContext)
    
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
                            backgroundColor: themeStyleSheet.white,
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
                                borderColor: themeStyleSheet.extraLightGray,
                            }}>
                            <View style={{ marginLeft: 15 }}>
                                <Text style={{ fontSize: 16, color: themeStyleSheet.mainColor }}>
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
                                            ? styles.btnLanguageSelect
                                            : styles.btnLanguage
                                    }
                                    onPress={() => chooseLanguage('en')}>
                                    
                                    <Text
                                        style={
                                            language === 'en'
                                                ? styles.btnText
                                                : styles.btnSubText
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
                                            ? styles.btnLanguageSelect
                                            : styles.btnLanguage
                                    }
                                    onPress={() => chooseLanguage('roman')}>
                                    
                                    <Text
                                        style={
                                            language === 'roman'
                                                ? styles.btnText
                                                : styles.btnSubText
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
    }
}

export default CustomModal

const styles = StyleSheet.create({

    btnLanguage: {
        borderWidth: 1,
        borderColor: themeStyleSheet.darkOrange,
        width: width * 0.4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 5,
        height: spacing.huge,
    },
    btnLanguageSelect: {
        backgroundColor: themeStyleSheet.brightOrange,
        width: width * 0.4,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 5,
        height: spacing.huge,
    },

    btnText: {
        color: themeStyleSheet.white,
        fontWeight: "bold",
        fontSize: 16
    },

    btnSubText: {
        color: themeStyleSheet.mainColor,
        fontSize: 12
    },
})