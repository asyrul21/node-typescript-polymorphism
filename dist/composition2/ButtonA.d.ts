import { IActionButton } from "./IActionButton";
declare class ButtonTypeA implements IActionButton {
    onClick: () => void;
    onComplete: () => void;
}
export default ButtonTypeA;
