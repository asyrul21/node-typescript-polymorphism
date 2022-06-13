import { IActionButton } from "./IActionButton";

class ButtonTypeB implements IActionButton {
    onClick = () => {
        console.log("Button Type B On Click!");
    };

    onComplete = () => {
        console.log("Button Type B On Click Complete!");
    };
}

export default ButtonTypeB;
