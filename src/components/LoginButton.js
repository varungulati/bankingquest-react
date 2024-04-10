import Button from "react-bootstrap/Button";
import { Text } from "react-native"
import LoginText from "./LoginText";
function LoginButton() {
    return (
        <Button className="w-100" href={"#"}><LoginText/></Button>
    );
}

export default LoginButton;
