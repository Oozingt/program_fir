basic.forever(function () {
    if (sensors.sensor_soilMoisture(AnalogPin.P1) >= 75) {
        motorbit.MotorRun(motorbit.Motors.M2, 50)
        music.playMelody("C D E F G A B C5 ", 120)
        basic.showIcon(IconNames.Square)
    }
    if (sensors.sensor_soilMoisture(AnalogPin.P1) < 75) {
        motorbit.MotorRun(motorbit.Motors.M2, 0)
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showIcon(IconNames.SmallSquare)
    }
})
