input.onButtonPressed(Button.A, function () {
    bitbot.goms(BBDirection.Forward, 60, 200)
    bitbot.rotatems(BBRobotDirection.Right, 30, 400)
    bitbot.goms(BBDirection.Forward, 60, 200)
    bitbot.stop(BBStopMode.Coast)
})
bitbot.select_model(BBModel.XL)
bitbot.setUpdateMode(BBMode.Manual)
basic.forever(function () {
    bitbot.setPixelColor(randint(0, 10), 0xFF0000)
    basic.pause(100)
    bitbot.ledClear()
})
