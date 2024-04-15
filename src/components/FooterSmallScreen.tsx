import * as React from "react";
import {StyleSheet, View, Text} from "react-native";
import {Image} from "expo-image";
import {Color, FontFamily, FontSize} from "../GlobalStyles";

const FooterSmallScreen = () => {
    return (
        <View style={[styles.footerLayout]}>
            <View style={[styles.footerChild, styles.footerLayout]}/>
            <Image
                style={styles.bankingQuestLogo1Icon}
                contentFit="cover"
                source={require("../assets/logo.png")}
            />
            <View style={styles.aboutUsParent}>
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
            <View style={styles.linkedinParent}>
                <Image
                    style={[styles.linkedinIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/linkedin.png")}
                />
                <Image
                    style={[styles.youtubeIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/youtube.png")}
                />
                <Image
                    style={[styles.twitterIcon, styles.iconLayout]}
                    contentFit="cover"
                    source={require("../assets/twitter.png")}
                />
            </View>
            <View style={styles.footerItem}/>
        </View>
    );
};

const styles = StyleSheet.create({
    footerLayout: {
        height: 331,
        width: '100%',
        left: 0,
        position: "absolute",
    },
    aboutUsFlexBox: {
        textAlign: "left",
        color: Color.colorDarkslateblue,
        position: "absolute",
    },
    iconLayout: {
        width: 24,
        height: 24,
        top: 0,
        position: "absolute",
    },
    footerChild: {
        backgroundColor: Color.colorGray,
        top: 0,
    },
    bankingQuestLogo1Icon: {
        top: 24,
        left: 128,
        width: 120,
        height: 36,
        position: "absolute",
    },
    aboutUs: {
        left: 24,
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 19,
        fontSize: 16,
        color: Color.colorDarkslateblue,
        top: 0,
    },
    contactUs: {
        top: 35,
        left: 18,
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 19,
        fontSize: 16,
        color: Color.colorDarkslateblue,
    },
    missionObjective: {
        top: 70,
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 19,
        fontSize: 16,
        color: Color.colorDarkslateblue,
        left: -20,
    },
    gallery: {
        top: 105,
        left: 31,
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 19,
        fontSize: 16,
        color: Color.colorDarkslateblue,
    },
    careers: {
        top: 140,
        left: 27,
        fontFamily: FontFamily.subHeading3,
        fontWeight: "600",
        lineHeight: 19,
        fontSize: 16,
        color: Color.colorDarkslateblue,
    },
    aboutUsParent: {
        top: 76,
        height: 159,
        width: 204,
        left: 136,
        marginTop: 5,
        position: "absolute",
    },
    copyrightBankingquestcom: {
        top: 251,
        left: 99,
        fontSize: 12,
        lineHeight: 16,
        fontFamily: FontFamily.footer,
        opacity: 0.6,
    },
    linkedinIcon: {
        left: 80,
    },
    youtubeIcon: {
        left: 40,
    },
    twitterIcon: {
        left: 0,
    },
    linkedinParent: {
        top: 283,
        height: 24,
        width: 104,
        left: 136,
        position: "absolute",
    },
    footerItem: {
        borderStyle: "solid",
        borderColor: Color.colorDarkslateblue,
        borderTopWidth: 0.3,
        height: 0,
        opacity: 0.3,
        top: 0,
        width: 375,
        left: 0,
        position: "absolute",
    },
});

export default FooterSmallScreen;
