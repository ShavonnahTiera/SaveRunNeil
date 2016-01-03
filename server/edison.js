Meteor.startup(function () {

    Cylon.robot({
        // name: 'Number Six',
        // description: 'Description is optional..',

        connections: {
            edison: { adaptor: 'intel-iot' }
         },

        devices: {
          redLed: { driver: 'led', pin: 13 },
          yellowLed: { driver: 'led', pin: 12 }
        },

        redLed: function () {
            this.devices.redLed.toggle();
            return this.name + ' toggles red led';
        },

        yellowLed: function () {
            this.devices.yellowLed.toggle();
            return this.name + ' toggles yellow led';
        },

        commands: function () {
            return {
                'Toggle red Led': this.redLed,
                'Toggle yellow Led': this.yellowLed
            };
        }
    }).start();

});

/*

Cylon.robot({
  connections: {
    edison: { adaptor: 'intel-iot' }
  },
  devices: {
    led: { driver: 'led', pin: 4, connection: 'edison' }
  },
  work: function(my) {
    setInterval(function() {
      my.led.toggle();
    }, 1000);
  }
}).start();
 */