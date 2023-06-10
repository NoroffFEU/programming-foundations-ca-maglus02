# Car Object

This object has the following properties:
- Brand (String), the manufacturer of the vehicle
- Model (String), the model of the vehicle
- Speed (Number), the vehicle velocity in `kmph`
- TopSpeed (Number), the vehicle top speed in `kmph`
- Mileage (Number), the current vehicle mileage in `km`
- Power (Number), the total vehicle power in `hp`
- Torque (Number), the total vehicle torque in `Nm`
- Electric (Boolean), if the vehicle is electric or not
- Modes (Array), all the available modes/driving modes for the vehicle
- LowRange (Boolean), if the vehicle got low range left or not
- RangeWarning (Function), a function for checking if the vehicle got low range left. If it has, it returns a low range warning.
