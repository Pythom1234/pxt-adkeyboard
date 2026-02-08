enum ADKeys {
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5
}
//% icon="\uf141" color=#00f000
namespace ADKeyboard {
    //% block="key %k | is pressed on ADKeyboard at pin %p"
    //% weight=99
    //% color=#00f000
    //% block.loc.cs="klávesa $k je stisknuta na ADKeyboard na pinu %p"
    export function adKeyboardIsPressed(k: ADKeys, p: AnalogPin): boolean {
        let a: number = pins.analogReadPin(p);
        if (a < 20 && k == 1) {
            return true
        } else if (a >= 30 && a < 70 && k == 2) {
            return true
        } else if (a >= 70 && a < 100 && k == 3) {
            return true
        } else if (a >= 100 && a < 150 && k == 4) {
            return true
        } else if (a >= 230 && a < 300 && k == 5) {
            return true
        } else {
            return false
        }
    }
    //% block="key pressed on ADKeyboard at pin %p"
    //% weight=98
    //% color=#00f000
    //% block.loc.cs="klávesa stisknuta na ADKeyboard na pinu %p"
    export function adKeyboardGetPressed(p: AnalogPin): string {
        let a: number = pins.analogReadPin(p);
        if (a < 20) {
            return "A"
        } else if (a >= 30 && a < 70) {
            return "B"
        } else if (a >= 70 && a < 100) {
            return "C"
        } else if (a >= 100 && a < 150) {
            return "D"
        } else if (a >= 230 && a < 300) {
            return "E"
        } else {
            return ""
        }
    }
}
