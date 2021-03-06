// Generated by CoffeeScript 1.8.0
(function() {
  module.exports = function(robot) {
    return robot.hear(/室内温度/i, function(msg) {
      var portName, serialport, sp;
      serialport = require('serialport');
      portName = '/dev/ttyACM0';
      sp = new serialport.SerialPort(portName, {
        baudRate: 9600,
        dataBits: 8,
        parity: 'none',
        stopBits: 1,
        flowControl: false,
        parser: serialport.parsers.readline("\n")
      });
      return sp.on('data', function(input) {
        return sp.on('data', function(input) {
          msg.reply("部屋の温度は、" + input + " 度です");
          return sp.close();
        });
      });
    });
  };

}).call(this);

//# sourceMappingURL=serialport.js.map
