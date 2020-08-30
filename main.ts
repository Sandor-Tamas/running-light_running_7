let LED_X = 0
let LED_Y = 0
let irany = 1
basic.forever(function () {
    led.plot(LED_X, LED_Y)
    basic.pause(500)
    led.unplot(LED_X, LED_Y)
    if (LED_X == 4 && LED_Y == 4) {
        irany = -1
    }
    if (LED_X == 0 && LED_Y == 0) {
        irany = 1
    }
    if (irany == 1) {
        if (LED_X == 4) {
            LED_X = 0
            if (LED_Y != 4) {
                LED_Y += irany
            }
        } else {
            LED_X += irany
        }
    } else {
        if (LED_X == 0) {
            LED_X = 4
            if (LED_Y != 0) {
                LED_Y += irany
            }
        } else {
            LED_X += irany
        }
    }
})
