'use strict';

let battery = null;
let temperature = null;

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

function getBattery() {
    navigator.bluetooth.requestDevice(
        {filters: [{services: ['battery_service']}]})
        .then(device => {
            document.getElementById('deviceName').innerText = device.name;
            document.getElementById('log').innerHTML = 'Connecting to Device...';
            //device.addEventListener('gattserverdisconnected', onDisconnected)
            return device.gatt.connect();
        })
        .then(server => {
            document.getElementById('log').innerText = 'Connecting to Battery Server...';
            return server.getPrimaryService('battery_service');
        })
        .then(service => {
            document.getElementById('log').innerText = 'Getting Battery Characteristic';
            return service.getCharacteristic('battery_level');
        })
        .then(characteristic => {
            document.getElementById('log').innerText = 'Reading Battery Level...';
            return characteristic.readValue();
        })
        .then(value => {
            battery = value.getUint8(0);
            document.getElementById('log').innerText = 'Battery Level: ' + battery;
            //battery = 'Battery Level is ' + battery + '%';
            document.getElementById('battery').innerText = value.getUint8(0) + '%';
        })
        .catch(error => {
            console.log('Argh! ' + error);
        });
}

function getTemperature() {
    navigator.bluetooth.requestDevice(
        {filters: [{services: ['battery_service']}]})
        .then(device => {
            document.getElementById('deviceName').innerText = device.name;
            document.getElementById('log').innerHTML = 'Connecting to Device...';
            //device.addEventListener('gattserverdisconnected', onDisconnected)
            return device.gatt.connect();
        })
        .then(server => {
            document.getElementById('log').innerText = 'Connecting to Temperature Server...';
            return server.getPrimaryService('f000aa00-0451-4000-b000-000000000000');

        })
        .then(service => {
            document.getElementById('log').innerText = 'Getting Temperature Characteristic';
            return service.getCharacteristic('f000aa01-0451-4000-b000-000000000000');
        })
        .then(characteristic => {
            document.getElementById('log').innerText = 'Reading Temperature Level...';
            return characteristic.readValue();
        })
        .then(value => {
            temperature = value.getUint8(0);
            document.getElementById('log').innerText = 'Temperature Level: ' + temperature;
            //battery = 'Battery Level is ' + battery + '%';
            document.getElementById('temperature').innerText = value.toString() + '°C';
        })
        .catch(error => {
            console.log('Argh! ' + error);
        });
}

// Install service worker - for offline support
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}