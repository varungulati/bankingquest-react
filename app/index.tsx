import React from "react";
import {NativeBaseProvider, Box} from "native-base";
import Navbar from "../src/components/Navbar";

export default function Index() {
    return <NativeBaseProvider>
        <Navbar/>
    </NativeBaseProvider>;
}
