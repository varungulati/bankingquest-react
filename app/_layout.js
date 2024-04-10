import {Slot} from 'expo-router';
import Index from "./index";

export default function IndexLayout() {
    return <>
        <Slot/>
        <Index/>
    </>;
}
