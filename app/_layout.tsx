import {Slot} from 'expo-router';
import Navbar from "../src/components/Navbar";

export default function IndexLayout() {
    return <>
        <Navbar/>
        <Slot/>
    </>;
}
