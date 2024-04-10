import Button from "react-bootstrap/Button";
import RegisterText from "./RegisterText";

function RegisterButton() {
    return (
        <Button className="w-100" variant="success"><RegisterText/></Button>
    );
}

export default RegisterButton;
