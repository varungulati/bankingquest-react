import * as React from "react";
import {StyleSheet, View, Text, Image} from "react-native";
import {Color, FontFamily, FontSize} from "../GlobalStyles";

const Footer = () => {
    return (
        <View style={[styles.footerLayout]}>
            <View style={[styles.footerChild, styles.footerPosition]}/>
            <Image
                style={styles.bankingQuestLogo1Icon}
                source={require("../assets/logo.png")}
            />
            <View style={[styles.aboutUsParent, styles.parentLayout]}>
                <Text style={[styles.aboutUs, styles.aboutUsFlexBox]}>About
                    Us</Text>
                <Text style={[styles.contactUs, styles.aboutUsFlexBox]}>
                    Contact Us
                </Text>
                <Text style={[styles.missionObjective, styles.aboutUsFlexBox]}>
                    Mission and Objective
                </Text>
                <Text
                    style={[styles.gallery, styles.aboutUsFlexBox]}>Gallery</Text>
                <Text
                    style={[styles.careers, styles.aboutUsFlexBox]}>Careers</Text>
            </View>
            <Text
                style={[styles.copyrightBankingquestcom, styles.aboutUsFlexBox]}>
                © 2019 Copyright BankingQuest.com
            </Text>
            <View style={[styles.linkedinParent, styles.parentLayout]}>
                <Image
                    style={[styles.linkedinIcon, styles.iconLayout]}
                    source={require("../assets/linkedin.png")}
                />
                <Image
                    style={[styles.youtubeIcon, styles.iconLayout]}
                    source={require("../assets/youtube.png")}
                />
                <Image
                    style={[styles.twitterIcon, styles.iconLayout]}
                    source={require("../assets/twitter.png")}
                />
            </View>
            <View style={[styles.footerItem, styles.footerPosition]}/>
        </View>
    );
};

const styles = StyleSheet.create({
    footerLayout: {
        height: 304,
        width: '100%', // Make the width responsive
    },
    footerPosition: {
        top: 0,
        left: 0,
        position: "absolute",
    },
    parentLayout: {
        height: 32,
        position: "absolute",
    },
    aboutUsFlexBox: {
        textAlign: "left",
        color: Color.colorDarkslateblue,
        position: "absolute",
    },
    iconLayout: {
        width: 32,
        height: 32,
        top: 0,
        position: "absolute",
    },
    footerChild: {
        backgroundColor: Color.colorGray,
        height: 304,
        width: '100%',
    },
    bankingQuestLogo1Icon: {
        top: 40,
        left: '50%', // Center the logo horizontally
        width: 220,
        height: 66,
        position: "absolute",
        marginLeft: -110, // Adjust margin to center the logo
    },
    aboutUs: {
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 32,
        fontSize: FontSize.paragraph_size,
        color: Color.colorDarkslateblue,
        top: 0,
        left: 0,
    },
    contactUs: {
        left: 146,
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 32,
        fontSize: FontSize.paragraph_size,
        color: Color.colorDarkslateblue,
        top: 0,
    },
    missionObjective: {
        left: 311,
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 32,
        fontSize: FontSize.paragraph_size,
        color: Color.colorDarkslateblue,
        top: 0,
    },
    gallery: {
        left: 540,
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 32,
        fontSize: FontSize.paragraph_size,
        color: Color.colorDarkslateblue,
        top: 0,
    },
    careers: {
        left: 665,
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 32,
        fontSize: FontSize.paragraph_size,
        color: Color.colorDarkslateblue,
        top: 0,
    },
    aboutUsParent: {
        top: 130,
        left: '50%', // Center horizontally
        width: 742,
        marginLeft: -371, // Adjust margin to center the container
    },
    copyrightBankingquestcom: {
        top: 186,
        left: '50%', // Center horizontally
        fontSize: FontSize.footer_size,
        lineHeight: 22,
        fontFamily: FontFamily.footer,
        opacity: 0.6,
        marginLeft: -82, // Adjust margin to center the text
    },
    linkedinIcon: {
        left: 104,
    },
    youtubeIcon: {
        left: 52,
    },
    twitterIcon: {
        left: 0,
    },
    linkedinParent: {
        top: 232,
        left: '50%', // Center horizontally
        width: 136,
        marginLeft: -68, // Adjust margin to center the container
    },
    footerItem: {
        borderStyle: "solid",
        borderColor: Color.colorDarkslateblue,
        borderTopWidth: 0.5,
        width: '100%',
        height: 1,
        opacity: 0.3,
    },
});

export default Footer;
