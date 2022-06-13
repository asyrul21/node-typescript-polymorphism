import { IActionButton } from "./IActionButton";
declare class ButtonTypeB implements IActionButton {
    onClick: () => void;
    onComplete: () => void;
}
export default ButtonTypeB;
