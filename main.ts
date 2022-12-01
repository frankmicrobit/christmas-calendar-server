function InitQuestions () {
    question_list = [
    "Har vi 8 planeter i solsystemet ",
    "Er det 29 dager i februar 2050",
    "Kan man se mot vest fra nordpolen",
    "Har edderkopper 8 ben",
    "Renner elven Po gjennom Torino",
    "Har dromedaren to pukler",
    "Er ...",
    "Er dagen i dag 8",
    "Er dagen i dag 9",
    "Er dagen i dag 10",
    "Er dagen i dag 11",
    "Er dagen i dag 12",
    "Er dagen i dag 13",
    "Er dagen i dag 14",
    "Er dagen i dag 15",
    "Er dagen i dag 16",
    "Er dagen i dag 17",
    "Er dagen i dag 18",
    "Er dagen i dag 19",
    "Er dagen i dag 20",
    "Er dagen i dag 21",
    "Er dagen i dag 22",
    "Er dagen i dag 23",
    "Er dagen i dag 24"
    ]
    fasit_list = [
    1,
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0,
    1,
    0
    ]
}
input.onButtonPressed(Button.A, function () {
    Today += -1
    DisplayDayNumber(Today)
})
input.onButtonPressed(Button.B, function () {
    Today += 1
    DisplayDayNumber(Today)
})
radio.onReceivedValue(function (name, value) {
    if (name == "Answer") {
        answer_list[Today - 1] = value
        if (fasit_list[Today - 1] == value) {
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
        datalogger.log(
        datalogger.createCV("Question", Today),
        datalogger.createCV("Answer", value),
        datalogger.createCV("Fasit", fasit_list[Today - 1])
        )
        basic.pause(1000)
        DisplayDayNumber(Today)
    }
})
function DisplayDayNumber (num: number) {
    if (num == 1) {
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (num == 2) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . # # . .
            . # . . .
            . # # # .
            `)
    }
    if (num == 3) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # # .
            . . . # .
            . # # # .
            `)
    }
    if (num == 4) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (num == 5) {
        basic.showLeds(`
            . # # # .
            . # . . .
            . # # # .
            . . . # .
            . # # # .
            `)
    }
    if (num == 6) {
        basic.showLeds(`
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (num == 7) {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            `)
    }
    if (num == 8) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . # . # .
            . # # # .
            `)
    }
    if (num == 9) {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # .
            . . . # .
            . . . # .
            `)
    }
    if (num == 10) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # . #
            # . # . #
            # . # # #
            `)
    }
    if (num == 11) {
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    }
    if (num == 12) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . # # #
            # . # . .
            # . # # #
            `)
    }
    if (num == 13) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . # #
            # . . . #
            # . # # #
            `)
    }
    if (num == 14) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    }
    if (num == 15) {
        basic.showLeds(`
            # . # # #
            # . # . .
            # . # # #
            # . . . #
            # . # # #
            `)
    }
    if (num == 16) {
        basic.showLeds(`
            # . # . .
            # . # . .
            # . # # #
            # . # . #
            # . # # #
            `)
    }
    if (num == 17) {
        basic.showLeds(`
            # . # # #
            # . . . #
            # . . . #
            # . . . #
            # . . . #
            `)
    }
    if (num == 18) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . # . #
            # . # # #
            `)
    }
    if (num == 19) {
        basic.showLeds(`
            # . # # #
            # . # . #
            # . # # #
            # . . . #
            # . . . #
            `)
    }
    if (num == 20) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . # #
            # . . # #
            # # . # #
            `)
    }
    if (num == 21) {
        basic.showLeds(`
            # # . . #
            . # . # #
            # # . . #
            # . . . #
            # # . . #
            `)
    }
    if (num == 22) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . # .
            # # . # #
            `)
    }
    if (num == 23) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . # #
            # . . . #
            # # . # #
            `)
    }
    if (num == 24) {
        basic.showLeds(`
            # # . # .
            . # . # .
            # # . # #
            # . . . #
            # # . . #
            `)
    }
    if (num == 25) {
        basic.showLeds(`
            # # . # #
            . # . # .
            # # . # #
            # . . . #
            # # . # #
            `)
    }
    if (num == 26) {
        basic.showLeds(`
            # # . # .
            . # . # .
            # # . # #
            # . . # #
            # # . # #
            `)
    }
    if (num == 27) {
        basic.showLeds(`
            # # . # #
            . # . . #
            # # . . #
            # . . . #
            # # . . #
            `)
    }
    if (num == 28) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . . #
            # . . # #
            # # . # #
            `)
    }
    if (num == 29) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . . #
            # . . . #
            # # . . #
            `)
    }
    if (num == 30) {
        basic.showLeds(`
            # # . # #
            . # . # #
            # # . # #
            . # . # #
            # # . # #
            `)
    }
    if (num == 31) {
        basic.showLeds(`
            # # . . #
            . # . # #
            # # . . #
            . # . . #
            # # . . #
            `)
    }
}
let TextToSend = ""
let fasit_list: number[] = []
let question_list: string[] = []
let Today = 0
let answer_list: number[] = []
datalogger.includeTimestamp(FlashLogTimeStampFormat.Milliseconds)
datalogger.setColumnTitles(
"Question",
"Answer",
"Fasit"
)
radio.setGroup(24)
InitQuestions()
answer_list = []
Today = RTC_DS1307.getTime(RTC_DS1307.TimeType.DAY)
led.setBrightness(50)
DisplayDayNumber(Today)
loops.everyInterval(60000, function () {
    DisplayDayNumber(Today)
    radio.sendValue("Today", Today)
    basic.pause(200)
    TextToSend = question_list[Today - 1]
    radio.sendValue("Length", TextToSend.length)
    basic.pause(200)
    while (TextToSend.length > 0) {
        radio.sendString(TextToSend.substr(0, 10))
        TextToSend = TextToSend.substr(10, TextToSend.length)
        basic.pause(200)
    }
    basic.pause(200)
    radio.sendValue("Fasit", fasit_list[Today - 1])
    basic.pause(200)
})
