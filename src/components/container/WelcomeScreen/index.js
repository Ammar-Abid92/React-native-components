import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext'
import CustomModal from '../../common/Modal'
import en from '../../../languageConfig/en'
import roman from '../../../languageConfig/roman'
import { ThemeContext } from '../../../context/ThemeContext'
import { orangeTheme, pinkTheme } from '../../../constants/theme'
import { welcomeImg } from '../../../assets'
import Header from '../../common/Header'

const { height, width, fontScale } = Dimensions.get('window');


const WelcomeScreen = () => {

    const [I18n, changeLanguage] = useContext(LanguageContext)
    const [theme, setTheme] = useContext(ThemeContext)
    const [languageModal, setLanguageModal] = useState(false);
    const [themeModal, setThemeModal] = useState(false)
    const [language, setLanguage] = useState('en');
    const [welcomeModal, setWelcomeModal] = useState(false)



    useEffect(() => {
        let modalView = setTimeout(()=>{
            setWelcomeModal(true)
        }, 3000)
    
        return () => clearTimeout(modalView);
    }, []);

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

        if (theme === "orangeTheme") {

            setTheme(orangeTheme)
        } else if (theme === "pinkTheme") {
            setTheme(pinkTheme)

        }
        setThemeModal(false)
    }

    return (
        <View style={{ flex: 1 }}>

            <Header />

            <View
                style={{
                    height: height * 0.15,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                <View style={{ marginLeft: 15 }}>
                    <Text style={{ fontSize: 16, color: theme.dark }}>
                        {I18n.welcome}
                    </Text>
                </View>
            </View>

            <CustomModal
                type="welcome"
                toggle={welcomeModal}
                setToggle={setWelcomeModal}
                language={language}
            />

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


            {languageModal &&
                <CustomModal
                    type="languageModal"
                    toggle={languageModal}
                    setToggle={setLanguageModal}
                    language={language}
                    action1={handleSelectedLanguage}
                />
            }

            {themeModal &&
                <CustomModal
                    type="themeModal"
                    toggle={themeModal}
                    setToggle={setThemeModal}
                    action1={handleSelectedTheme}
                />
            }

        </View>


    )
}

export default WelcomeScreen