input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        t = randint(1, 3)
        if (t == 1) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        } else {
            if (t == 2) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else {
                if (t == 3) {
                    basic.showLeds(`
                        # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
                        `)
                } else {
                	
                }
            }
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        t2 = randint(1, 3)
        if (t2 == 1) {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
        } else {
            if (t2 == 2) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
            } else {
                if (t2 == 3) {
                    basic.showLeds(`
                        # # # # #
                        # . . . #
                        # . . . #
                        # . . . #
                        # # # # #
                        `)
                } else {
                	
                }
            }
        }
    }
    music.setVolume(30)
    music.playMelody("E B C5 A B G A F ", 120)
    basic.pause(10000)
})
let t2 = 0
let t = 0
basic.showLeds(`
    . . # . .
    . # . . .
    # . # # #
    . # . . .
    . . # . .
    `)
