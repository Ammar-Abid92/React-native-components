import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { LanguageContext } from '../../../context/LanguageContext'
import CustomModal from '../../common/Modal'
import en from '../../../languageConfig/en'
import roman from '../../../languageConfig/roman'

const WelcomeScreen = () => {


    const [I18n, changeLanguage] = useContext(LanguageContext)
    const [languageModal, setLanguageModal] = useState(true);
    const [language, setLanguage] = useState('en');

    const handleSelectedLanguage = (lang) => {
        if(lang === "en"){

            changeLanguage(en)
        }else if(lang === "roman"){
            changeLanguage(roman)

        }
        setLanguage(lang)
        setLanguageModal(false)
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

            {language && (
                <View style={{margin: 20}} >
                    <Text>
                        Your Language is {language}
                    </Text>

                </View>

            )}
            <View style={{margin: 20}}>

            <TouchableOpacity
                onPress={() => setLanguageModal(true)}>
                <Text>
                    Change Language ? Click here
                </Text>
            </TouchableOpacity>
            </View>
        </>


    )
}

export default WelcomeScreen