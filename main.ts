function futtat (num: number, num2: number) {
    if (LED_X == num) {
        LED_X = num2
        if (LED_Y != num) {
            LED_Y += irany
        }
    } else {
        LED_X += irany
    }
}
let irany = 0
let LED_Y = 0
let LED_X = 0
LED_X = 0
LED_Y = 0
irany = 1
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
        futtat(4, 0)
    } else {
        futtat(0, 4)
    }
})
