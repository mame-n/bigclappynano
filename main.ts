function clap (haku: number) {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(100)
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.pause(haku * 400)
}
function GJ () {
    for (let index = 0; index < 3; index++) {
        clap(1)
    }
    yasumi(1)
    for (let index = 0; index < 3; index++) {
        clap(1)
    }
    yasumi(1)
    for (let index = 0; index < 7; index++) {
        clap(1)
    }
    yasumi(1)
}
function yasumi (haku: number) {
    basic.pause(haku * 400)
}
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.Shake, function () {
    gogo = gogo * -1
    if (gogo < 0) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
function claps () {
    for (let index = 0; index < 25; index++) {
        clap(0.3)
    }
}
let gogo = 0
gogo = -1
basic.forever(function () {
    if (gogo > 0) {
        GJ()
    }
    if (gogo > 0) {
        GJ()
    }
    if (gogo > 0) {
        claps()
    }
    gogo = -1
})
