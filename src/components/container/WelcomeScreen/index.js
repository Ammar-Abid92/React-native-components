import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext'
import CustomModal from '../../common/Modal'
import en from '../../../languageConfig/en'
import roman from '../../../languageConfig/roman'
import { ThemeContext } from '../../../context/ThemeContext'
import { orangeTheme, pinkTheme } from '../../../constants/theme'

const WelcomeScreen = () => {

    const [I18n, changeLanguage] = useContext(LanguageContext)
    const [theme, setTheme] = useContext(ThemeContext)

    console.log("THEMEEEE---->", theme)

    const [languageModal, setLanguageModal] = useState(false);
    const [themeModal, setThemeModal] = useState(false)
    const [language, setLanguage] = useState('en');

    const handleSelectedLanguage = (lang) => {
        if (lang === "en") {
            changeLanguage(en)
        } else if (lang === "roman") {
            changeLanguage(roman)
        }
        setLanguage(lang)
        setLanguageModal(false)
    }

    const handleSelectedTheme = (theme) => {

        console.log("XXX---->", theme)
        if (theme === "orangeTheme") {

            setTheme(orangeTheme)
        } else if (theme === "pinkTheme") {
            setTheme(pinkTheme)

        }
        setThemeModal(false)
    }

    return (
        <>

            <CustomModal
                type="languageModal"
                toggle={languageModal}
                setToggle={setLanguageModal}
                language={language}
                chooseLanguage={handleSelectedLanguage}
            />

            <CustomModal
                type="themeModal"
                toggle={themeModal}
                setToggle={setThemeModal}
                chooseTheme={handleSelectedTheme}
            />

            {language && (
                <View style={{ margin: 20 }} >
                    <Text>
                        Your Language is {language}
                    </Text>
                </View>
            )}
            <View style={{ margin: 20 }}>

                <TouchableOpacity
                    onPress={() => setLanguageModal(true)}>
                    <Text>
                        Change Language ? Click here
                    </Text>
                </TouchableOpacity>

            </View>

            <View style={{ margin: 20 }}>

                <TouchableOpacity
                    onPress={() => setThemeModal(true)}>
                    <Text>
                        Change Theme ? Click here
                    </Text>
                </TouchableOpacity>

            </View>
        </>


    )
}

export default WelcomeScreen