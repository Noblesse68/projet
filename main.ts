let t = 0
input.onButtonPressed(Button.A, function () {
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
})
basic.forever(function () {
	
})
