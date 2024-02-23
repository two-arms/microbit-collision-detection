radio.onReceivedNumber(function (receivedNumber) {
    serial.writeNumber(radio.receivedPacket(RadioPacketProperty.SignalStrength))
    serial.writeString(" ")
    serial.writeNumber(0)
    serial.writeLine("")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    if (radio.receivedPacket(RadioPacketProperty.SignalStrength) > -47) {
        music.play(music.stringPlayable("G F G A - F E D ", 480), music.PlaybackMode.UntilDone)
        basic.showNumber(receivedNumber)
    }
})
radio.setGroup(10)
let weight = 0
loops.everyInterval(50, function () {
    radio.sendNumber(2)
})
