'use strict';

let battery = null;

function connect() {
    console.log('Requesting Bluetooth Device...');
    document.getElementById('log').innerHTML = 'Requesting Bluetooth Device...';
    navigator.bluetooth.requestDevice(
        {
            filters: [{services: ['battery_service']}]
        })
        .then(device => {
            console.log('> Found ' + device.name);
            document.getElementById('deviceName').innerText = device.name;
            document.getElementById('log').innerHTML = 'Connecting to Device...';
            //device.addEventListener('gattserverdisconnected', onDisconnected)
            return device.gatt.connect();
        })
        .then(server => {
            console.log('Getting Battery Service');
            document.getElementById('log').innerText = 'Connecting to Battery Server...';
            return server.getPrimaryService('battery_service');
        })
        .then(service => {
            console.log('Getting Battery Characteristic');
            document.getElementById('log').innerText = 'Getting Battery Characteristic';
            return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
            document.getElementById('log').innerText = 'Reading Battery Level...';
            console.log('All ready!');
            battery = characteristic.readValue();
            document.getElementById('log').innerHTML = battery;
            console.log('Battery Level is ' + battery.getUint8(0));
            document.getElementById('batteryLevel').innerText = " Battery Level: " + battery.getUint8(0);
            //onConnected();
        })
        .catch(error => {
            console.log('Argh! ' + error);
        });
}

// Install service worker - for offline support
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}