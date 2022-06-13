import { IActionButton } from "./IActionButton";

class ButtonTypeA implements IActionButton {
    onClick = () => {
        console.log("Button Type A On Click!");
    };

    onComplete = () => {
        console.log("Button Type A On Click Complete!");
    };
}

export default ButtonTypeA;
