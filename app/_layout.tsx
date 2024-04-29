import {Slot} from 'expo-router';
import Navbar from "../src/components/Navbar";
import Footer from '../src/components/Footer';
import FooterSmallScreen from '../src/components/FooterSmallScreen';
import {useWindowDimensions} from "react-native";

export default function IndexLayout() {
      const windowWidth = useWindowDimensions().width;
    return <>
        <Navbar/>
        <Slot/>
         {windowWidth >= 600 ? <Footer /> : <FooterSmallScreen />}
    </>;
}
