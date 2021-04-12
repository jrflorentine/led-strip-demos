let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
})
