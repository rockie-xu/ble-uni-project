'use strict';

let battery = null;

function connect() {
    console.log('Requesting Bluetooth Device...');
    navigator.bluetooth.requestDevice(
        {
            filters: [{services: ['battery_service']}]
        })
        .then(device => {
            console.log('> Found ' + device.name);
            console.log('Connecting to GATT Server...');
            device.addEventListener('gattserverdisconnected', onDisconnected)
            return device.gatt.connect();
        })
        .then(server => {
            console.log('Getting Service 0xffe5 - Light control...');
            return server.getPrimaryService('battery_service');
        })
        .then(service => {
            console.log('Getting Battery Characteristic');
            return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
            console.log('Reading Battery Level...');
            console.log('All ready!');
            battery = characteristic.readValue();
            //log('> Battery Level is ' + battery.getUint8(0) + '%');
            document.getElementById('battery').innerHTML = ('> Battery Level is ' + battery.getUint8(0) + '%');
            //onConnected();
        })
        .catch(error => {
            console.log('Argh! ' + error);
        });
}