function Util() {
    return this.stringToDecArray = function (e) {
        var t, a, n = [];
        if (e) for (a = 0; a < e.length; a++) t = e.charCodeAt(a).toString(10), n.push(Number(t));
        return n
    }, this.convSignDecimal = function (value) {
        if (value >= 5e4) {
            var dec2bin = value.toString(2), signDec = 0, i = 0, CurrentValue = dec2bin,
                inputlength = CurrentValue.length;
            for (i = inputlength - 1; i >= 1; i -= 1) signDec += eval(CurrentValue.charAt(i)) * Math.pow(2, inputlength - i - 1);
            return signDec -= eval(CurrentValue.charAt(0)) * Math.pow(2, inputlength - 1)
        }
        return value
    }, this.convSignAcc = function (value) {
        if (value >= 200) {
            var dec2bin = value.toString(2), signDec = 0, i = 0, CurrentValue = dec2bin,
                inputlength = CurrentValue.length;
            for (i = inputlength - 1; i >= 1; i -= 1) signDec += eval(CurrentValue.charAt(i)) * Math.pow(2, inputlength - i - 1);
            return signDec -= eval(CurrentValue.charAt(0)) * Math.pow(2, inputlength - 1)
        }
        return value
    }, this.calcTAmb = function (e) {
        if (e && e.length < 4) return -0;
        if (e && 8 === e.length) {
            var t = "0x" + e[6] + e[7] + e[4] + e[5], a = parseInt(t, 16);
            return a / 128
        }
    }, this.calcTempIr = function (e) {
        var t, a;
        if (e && e.length < 4) return -0;
        if (e && 8 === e.length) {
            var n = "0x" + e[2] + e[3] + e[0] + e[1], r = "0x" + e[6] + e[7] + e[4] + e[5];
            t = this.convSignDecimal(parseInt(n, 16)), a = parseInt(r, 16);
            var i = a / 128, o = 1.5625e-7 * t, c = i + 273.15, u = 6.4 * Math.pow(10, -14),
                s = 1.75 * Math.pow(10, -3), l = -1.678 * Math.pow(10, -5), m = -2.94 * Math.pow(10, -5),
                h = -5.7 * Math.pow(10, -7), g = 4.63 * Math.pow(10, -9), p = 13.4, v = 298.15,
                f = u * (1 + s * (c - v) + l * Math.pow(c - v, 2)), d = m + h * (c - v) + g * Math.pow(c - v, 2),
                y = o - d + p * Math.pow(o - d, 2), b = Math.pow(Math.pow(c, 4) + y / f, .25);
            return b -= 273.15
        }
    }, this.calcTempIr_st2 = function (e) {
        var t;
        if (e && e.length < 4) return -0;
        if (e && 8 === e.length) {
            var a = "0x" + e[2] + e[3] + e[0] + e[1];
            return t = this.convSignDecimal(parseInt(a, 16)), t = parseInt(a, 16), t / 128
        }
    }, this.calcAccXValue = function (e, t) {
        var a, n, r = "0x" + e[0] + e[1], i = this.convSignAcc(parseInt(r, 16));
        return r && -1 === r.indexOf("undefined") && (t ? -1 === t.indexOf("1.5") ? (n = 16, a = i / n) : (n = 64, a = i / n) : (n = 16, a = i / n)), a
    }, this.calcAccYValue = function (e, t) {
        var a, n, r = "0x" + e[2] + e[3], i = this.convSignAcc(parseInt(r, 16));
        return r && -1 === r.indexOf("undefined") && (t ? -1 === t.indexOf("1.5") ? (n = 16, a = i / n) : (n = 64, a = i / n) : (n = 16, a = i / n)), a
    }, this.calcAccZValue = function (e, t) {
        var a, n, r = "0x" + e[4] + e[5], i = this.convSignAcc(parseInt(r, 16));
        return r && -1 === r.indexOf("undefined") && (t ? (i = -1 * i, -1 === t.indexOf("1.5") ? (n = 16, a = i / n) : (n = 64, a = i / n)) : (n = 16, a = i / n)), a
    }, this.calcGyrXValue = function (e) {
        var t = "0x" + e[6] + e[7] + e[4] + e[5], a = this.convSignDecimal(parseInt(t, 16));
        return a = a * (500 / 65536) * -1
    }, this.calcGyrYValue = function (e) {
        var t = "0x" + e[2] + e[3] + e[0] + e[1], a = this.convSignDecimal(parseInt(t, 16));
        return a = a * (500 / 65536) * -1
    }, this.calcGyrZValue = function (e) {
        var t = "0x" + e[10] + e[11] + e[8] + e[9], a = this.convSignDecimal(parseInt(t, 16));
        return a *= 500 / 65536
    }, this.calcMagXValue = function (e) {
        var t, a = 0;
        if (e && e.length < 6) return -0;
        if (e && 12 === e.length) {
            var n = "0x" + e[2] + e[3] + e[0] + e[1], r = this.convSignDecimal(parseInt(n, 16));
            return t = 1 * r / 32.768 * -1, t - a
        }
    }, this.calcMagYValue = function (e) {
        var t, a = 0;
        if (e && e.length < 6) return -0;
        if (e && 12 === e.length) {
            var n = "0x" + e[6] + e[7] + e[4] + e[5], r = this.convSignDecimal(parseInt(n, 16));
            return t = 1 * r / 32.768 * -1, t - a
        }
    }, this.calcMagZValue = function (e) {
        var t, a = 0;
        if (e && e.length < 6) return -0;
        if (e && 12 === e.length) {
            var n = "0x" + e[10] + e[11] + e[8] + e[9], r = this.convSignDecimal(parseInt(n, 16));
            return t = 1 * r / 32.768, t - a
        }
    }, this.calcPress = function (e) {
        var t, a = 0;
        return e && e.length < 3 ? -0 : e && 8 === e.length ? (t = "0x" + e[6] + e[7] + e[4] + e[5], a = -6 + 125 * (parseInt(t, 16) / 65535)) : void 0
    }, this.movement_ACC_X = function (e) {
        var t = 4096, a = "0x" + e[14] + e[15] + e[12] + e[13], n = this.convSignDecimal(parseInt(a, 16));
        return n = n / t * -1
    }, this.movement_ACC_Y = function (e) {
        var t = 4096, a = "0x" + e[18] + e[19] + e[16] + e[17], n = this.convSignDecimal(parseInt(a, 16));
        return n /= t
    }, this.movement_ACC_Z = function (e) {
        var t = 4096, a = "0x" + e[22] + e[23] + e[20] + e[21], n = this.convSignDecimal(parseInt(a, 16));
        return n = n / t * -1
    }, this.movement_GYRO_X = function (e) {
        var t = 128, a = "0x" + e[2] + e[3] + e[0] + e[1], n = this.convSignDecimal(parseInt(a, 16));
        return n /= t
    }, this.movement_GYRO_Y = function (e) {
        var t = 128, a = "0x" + e[6] + e[7] + e[4] + e[5], n = this.convSignDecimal(parseInt(a, 16));
        return n /= t
    }, this.movement_GYRO_Z = function (e) {
        var t = 128, a = "0x" + e[10] + e[11] + e[8] + e[9], n = this.convSignDecimal(parseInt(a, 16));
        return n /= t
    }, this.movement_MAG_X = function (e) {
        var t = 32768 / 4912, a = "0x" + e[26] + e[27] + e[24] + e[25], n = this.convSignDecimal(parseInt(a, 16));
        return n /= t
    }, this.movement_MAG_Y = function (e) {
        var t = 32768 / 4912, a = "0x" + e[30] + e[31] + e[28] + e[29], n = this.convSignDecimal(parseInt(a, 16));
        return n /= t
    }, this.movement_MAG_Z = function (e) {
        var t = 32768 / 4912, a = "0x" + e[34] + e[35] + e[32] + e[33], n = this.convSignDecimal(parseInt(a, 16));
        return n /= t
    }, this.calcBarometerCalib = function (e) {
        var t, a, n, r, i, o, c, u;
        if (e) {
            if (e.length < 16) return -0;
            t = "0x" + e[2] + e[3] + e[0] + e[1], a = "0x" + e[6] + e[7] + e[4] + e[5], n = "0x" + e[10] + e[11] + e[8] + e[9], r = "0x" + e[14] + e[15] + e[12] + e[13], i = "0x" + e[18] + e[19] + e[16] + e[17], o = "0x" + e[22] + e[23] + e[20] + e[21], c = "0x" + e[26] + e[27] + e[24] + e[25], u = "0x" + e[30] + e[31] + e[28] + e[29], this.c1 = this.convSignDecimal(parseInt(t, 16)), this.c2 = this.convSignDecimal(parseInt(a, 16)), this.c3 = this.convSignDecimal(parseInt(n, 16)), this.c4 = this.convSignDecimal(parseInt(r, 16)), this.c5 = this.convSignDecimal(parseInt(i, 16)), this.c6 = this.convSignDecimal(parseInt(o, 16)), this.c7 = this.convSignDecimal(parseInt(c, 16)), this.c8 = this.convSignDecimal(parseInt(u, 16))
        }
    }, this.calcPressure_st2 = function (e) {
        var t = e;
        if (t && t.length < 4) return -0;
        if (t && t.length >= 7) {
            if (t.length > 8) {
                var a = "0x" + t[8] + t[9] + t[6] + t[7] + t[4] + t[5], n = this.convSignDecimal(parseInt(a, 16));
                return 0 > n && (n = -1 * n), n / 1e3
            }
            var r, i;
            r = "0x" + t[7] + t[4] + t[5], r = this.convSignDecimal(parseInt(r, 16)), i = "0x" + t[6], i = this.convSignDecimal(parseInt(i, 16));
            var o, c = Math.pow(2, i);
            return o = r * c, o / 1e3
        }
    }, this.calcPressure = function (e) {
        var t = e;
        if (t && t.length < 4) return -0;
        if (t && t.length >= 7) {
            var a, n, r = "0x" + t[2] + t[3] + t[0] + t[1], i = "0x" + t[6] + t[7] + t[4] + t[5];
            a = this.convSignDecimal(parseInt(r, 16)), n = this.convSignDecimal(parseInt(i, 16));
            var o = a;
            temperature = this.c1 * o / 1024 + (this.c2 / 4 - 16384);
            var c = this.c3 + this.c4 * o / (1 << 17) + this.c5 * (o * o) / 17179869184,
                u = 16384 * this.c6 + this.c7 * o / 8 + this.c8 * (o * o) / (1 << 19), s = (c * n + u) / 16384;
            return s / 100
        }
    }, this.calLight = function (e) {
        if (e && 4 === e.length) {
            var t, a;
            t = "0x0" + e[3] + e[1] + e[2], t = this.convSignDecimal(parseInt(t, 16)), a = "0x000" + e[2], a = this.convSignDecimal(parseInt(a, 16));
            var n, r = Math.pow(2, a);
            return n = t * r, n / 100
        }
    }, this.getCurrentTime = function () {
        var e = new Date, t = e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds();
        return t
    }, this.getHexDataFromCharacValue = function (e) {
        for (var t = "", a = 0; a < e.byteLength; ++a) {
            var n = e.getUint8(a).toString(16);
            1 == n.length && (n = "0" + n), t += n
        }
        return t
    }, this
}

var Sensortag = function () {
    function e(e) {
        t = this, t.connected = !1, t.temperatureService = void 0, t.accelerometerService = void 0, t.humidityService = void 0, t.magnetometerService = void 0, t.barometerService = void 0, t.gyroscopeService = void 0, t.lightService = void 0, t.movementService = void 0, t.sensortag2 = !1, t.sensortag_firmware = void 0, t.characteristics = new Map, t.bluetooth = e
    }

    var t, a = "f000aa00-0451-4000-b000-000000000000", n = "f000aa01-0451-4000-b000-000000000000",
        r = "f000aa02-0451-4000-b000-000000000000", i = "f000aa10-0451-4000-b000-000000000000",
        o = "f000aa11-0451-4000-b000-000000000000", c = "f000aa12-0451-4000-b000-000000000000",
        u = "f000aa20-0451-4000-b000-000000000000", s = "f000aa21-0451-4000-b000-000000000000",
        l = "f000aa22-0451-4000-b000-000000000000", m = "f000aa30-0451-4000-b000-000000000000",
        h = "f000aa31-0451-4000-b000-000000000000", g = "f000aa32-0451-4000-b000-000000000000",
        p = "f000aa40-0451-4000-b000-000000000000", v = "f000aa41-0451-4000-b000-000000000000",
        f = "f000aa42-0451-4000-b000-000000000000", d = "f000aa43-0451-4000-b000-000000000000",
        y = "f000aa50-0451-4000-b000-000000000000", b = "f000aa51-0451-4000-b000-000000000000",
        D = "f000aa52-0451-4000-b000-000000000000", N = "f000aa70-0451-4000-b000-000000000000",
        x = "f000aa71-0451-4000-b000-000000000000", C = "f000aa72-0451-4000-b000-000000000000",
        S = "f000aa80-0451-4000-b000-000000000000", I = "f000aa81-0451-4000-b000-000000000000",
        V = "f000aa82-0451-4000-b000-000000000000", w = 6154, T = 10790;
    return e.prototype.connect = function () {
        var e = {filters: [{services: [43648]}], optionalServices: [w, S, a, u, p, N, i, m, y]};
        return t.bluetooth.requestDevice(e).then(function (e) {
            return e.gatt.connect()
        }).then(function (e) {
            return Promise.all([e.getPrimaryService(w).then(function (e) {
                return t.connected = !0, e.getCharacteristic(T).then(function (e) {
                    return t.readFirmwareVersion(e)
                })
            }, function (e) {
                Promise.resolve(!0)
            }), e.getPrimaryService(S).then(function (e) {
                return t.movementService = e, t.sensortag2 = !0, e.getCharacteristic(V).then(function (a) {
                    return t.enableMovementCharac(a).then(function () {
                        return e.getCharacteristic(I).then(function (e) {
                            return e.startNotifications().then(function () {
                                e.addEventListener("characteristicvaluechanged", function (e) {
                                    t.updateUI && t.updateUI(e, "movement")
                                })
                            })
                        })
                    })
                })
            }, function (e) {
                Promise.resolve(!0)
            }), e.getPrimaryService(a).then(function (e) {
                return t.temperatureService = e, e.getCharacteristic(r).then(function (a) {
                    return t.enableCharac(a).then(function () {
                        return e.getCharacteristic(n).then(function (e) {
                            return e.startNotifications().then(function () {
                                return e.addEventListener("characteristicvaluechanged", function (e) {
                                    t.updateUI && t.updateUI(e, "temperature")
                                })
                            })
                        })
                    })
                })
            }, function (e) {
                Promise.resolve(!0)
            }), e.getPrimaryService(i).then(function (e) {
                return t.accelerometerService = e, t.sensortag2 = !1, e.getCharacteristic(c).then(function (a) {
                    return t.enableCharac(a).then(function () {
                        return e.getCharacteristic(o).then(function (e) {
                            return e.startNotifications().then(function () {
                                return e.addEventListener("characteristicvaluechanged", function (e) {
                                    t.updateUI && t.updateUI(e, "accelerometer")
                                })
                            })
                        })
                    })
                })
            }, function (e) {
                Promise.resolve(!0)
            }), e.getPrimaryService(y).then(function (e) {
                return t.gyroscopeService = e, e.getCharacteristic(D).then(function (a) {
                    return t.enableGyroCharac(a).then(function () {
                        return e.getCharacteristic(b).then(function (e) {
                            return e.startNotifications().then(function () {
                                return e.addEventListener("characteristicvaluechanged", function (e) {
                                    t.updateUI && t.updateUI(e, "gyroscope")
                                })
                            })
                        })
                    })
                })
            }, function (e) {
                Promise.resolve(!0)
            }), e.getPrimaryService(m).then(function (e) {
                return t.magnetometerService = e, e.getCharacteristic(g).then(function (a) {
                    return t.enableCharac(a).then(function () {
                        return e.getCharacteristic(h).then(function (e) {
                            return e.startNotifications().then(function () {
                                return e.addEventListener("characteristicvaluechanged", function (e) {
                                    t.updateUI && t.updateUI(e, "magnetometer")
                                })
                            })
                        })
                    })
                })
            }, function (e) {
                Promise.resolve(!0)
            }), e.getPrimaryService(u).then(function (e) {
                return t.humidityService = e, e.getCharacteristic(l).then(function (a) {
                    return t.enableCharac(a).then(function () {
                        return e.getCharacteristic(s).then(function (e) {
                            return e.startNotifications().then(function () {
                                return e.addEventListener("characteristicvaluechanged", function (e) {
                                    t.updateUI && t.updateUI(e, "humidity")
                                })
                            })
                        })
                    })
                })
            }, function (e) {
                Promise.resolve(!0)
            }), e.getPrimaryService(p).then(function (e) {
                return t.barometerService = e, t.sensortag2 === !0 ? e.getCharacteristic(f).then(function (a) {
                    return t.enableCharac(a).then(function () {
                        return e.getCharacteristic(v).then(function (e) {
                            return e.startNotifications().then(function () {
                                return e.addEventListener("characteristicvaluechanged", function (e) {
                                    t.updateUI && t.updateUI(e, "barometer")
                                })
                            })
                        })
                    })
                }) : e.getCharacteristic(d).then(function (a) {
                    return t.calBarameterCalib(a).then(function () {
                        return e.getCharacteristic(f).then(function (a) {
                            return t.enableCharac(a).then(function () {
                                return e.getCharacteristic(s).then(function (e) {
                                    return e.startNotifications().then(function () {
                                        return e.addEventListener("characteristicvaluechanged", function (e) {
                                            t.updateUI && t.updateUI(e, "movement")
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            }, function (e) {
                Promise.resolve(!0)
            }), e.getPrimaryService(N).then(function (e) {
                return t.lightService = e, e.getCharacteristic(C).then(function (a) {
                    return t.enableCharac(a).then(function () {
                        return e.getCharacteristic(x).then(function (e) {
                            return e.startNotifications().then(function () {
                                return e.addEventListener("characteristicvaluechanged", function (e) {
                                    t.updateUI && t.updateUI(e, "light")
                                })
                            })
                        })
                    })
                })
            }, function (e) {
                Promise.resolve(!0)
            })])
        }).then(function () {
            t.connected = !0
        })
    }, e.prototype.readFirmwareVersion = function (t) {
        return t.readValue().then(function (t) {
            for (var a = "", n = 0; n < t.byteLength; n++) a += String.fromCharCode(t.getUint8(n));
            return a = a.trim(), e.sensortag_firmware = a, Promise.resolve()
        })
    }, e.prototype.calBarameterCalib = function (e) {
        return e.readValue().then(function (e) {
            for (var t = "", a = 0; a < e.byteLength; ++a) {
                var n = e.getUint8(a).toString(16);
                1 == n.length && (n = "0" + n), t += n
            }
        })
    }, e.prototype.enableCharac = function (e) {
        return e.readValue().then(function (t) {
            var a = 1 == t.getInt8(0);
            return a ? Promise.resolve() : e.writeValue(new Uint8Array([1]))
        })
    }, e.prototype.enableGyroCharac = function (e) {
        return e.readValue().then(function (t) {
            return e.writeValue(new Uint8Array([7]))
        })
    }, e.prototype.enableMovementCharac = function (e) {
        return e.readValue().then(function (t) {
            return e.writeValue(new Uint8Array([127, 2]))
        })
    }, e.prototype.readCharacteristicValue = function (e) {
        var a = t.characteristics.get(e);
        return a.readValue().then(function (e) {
            return e = e.buffer ? e : new DataView(e)
        })
    }, e.prototype.writeCharacteristicValue = function (e, a) {
        var n = t.characteristics.get(e);
        return t._debug, n.writeValue(a)
    }, e
}();
void 0 === window && (module.exports.Sensortag = Sensortag);
var app;
!function () {
    app = angular.module("sensortag", ["ngMaterial", "nvd3"]).config(["$mdThemingProvider", function (e) {
        e.theme("default").primaryPalette("blue").accentPalette("blue-grey"), e.theme("success-toast"), e.theme("error-toast"), e.alwaysWatchTheme(!0)
    }])
}(), app.service("sensortagService", function () {
    return new Sensortag(navigator.bluetooth)
}), app.controller("mainController", ["$scope", "$mdToast", "$mdDialog", "sensortagService", function (e, t, a, n) {
    function r(e) {
        t.show(t.simple().textContent(e).position("top").theme("success-toast").hideDelay(2500))
    }

    function i(e) {
        t.show(t.simple().textContent(e).position("top").theme("error-toast").hideDelay(2500))
    }

    function o(t, n) {
        function r(e, t, a) {
            e.items = a, e.closeDialog = function () {
                t.hide()
            }
        }

        r.$inject = ["$scope", "$mdDialog", "items"], e.showingLoadigIndicator = !0;
        var i = angular.element(document.body);
        a.show({
            parent: i,
            targetEvent: t,
            clickOutsideToClose: !1,
            template: '<md-dialog style="width: 250px;top:95px;margin-top: -170px;" aria-label="loadingDialog" ng-cloak><md-dialog-content><div layout="row" layout-align="center" style="padding: 40px;"><div style="padding-bottom: 20px;"><md-progress-circular md-mode="indeterminate" md-diameter="40" style="right: 20px;bottom: 10px;"></md-progress-circular></div></div><div layout="row" layout-align="center" style="padding-bottom: 20px;"><label>' + n + "</label></div></md-dialog-content></md-dialog>",
            locals: {items: e.items},
            controller: r
        })
    }

    function c() {
        e.showingLoadigIndicator = !1, a.cancel()
    }

    function u(t, a, n) {
        if (isNaN(t) || isNaN(a) || isNaN(n)) e.accelerometer = "X: 0.0G Y: 0.0G Z: 0.0G"; else {
            N = {
                timeNum: _,
                date: w.getCurrentTime(),
                xVal: t,
                yVal: a,
                zVal: n
            }, t = "X: " + t.toFixed(1) + "G ", a = "Y: " + a.toFixed(1) + "G ", n = "Z: " + n.toFixed(1) + "G ";
            var r = t + ", " + a + ", " + n;
            e.accelerometer = r
        }
        _++, e.timeDispData3.push(w.getCurrentTime()), e.updateUI()
    }

    function s(t, a, n) {
        if (isNaN(t) || isNaN(a) || isNaN(n)) e.gyroscope = "X: 0.0°/S Y: 0.0°/S Z: 0.0°/S"; else {
            x = {
                timeNum: M,
                date: w.getCurrentTime(),
                xVal: t,
                yVal: a,
                zVal: n
            }, t = "X: " + t.toFixed(1) + "°/S", a = "Y: " + a.toFixed(1) + "°/S", n = "Z: " + n.toFixed(1) + "°/S";
            var r = t + ", " + a + ", " + n;
            e.gyroscope = r
        }
        M++, e.updateUI()
    }

    function l(t, a, n) {
        if (isNaN(t) || isNaN(a) || isNaN(n)) e.magnetometer = "X: 0.0uT Y: 0.0uT Z: 0.0uT"; else {
            C = {
                timeNum: A,
                date: w.getCurrentTime(),
                xVal: t,
                yVal: a,
                zVal: n
            }, t = "X: " + t.toFixed(2) + "uT ", a = "Y: " + a.toFixed(2) + "uT ", n = "Z: " + n.toFixed(2) + "uT ";
            var r = t + ", " + a + ", " + n;
            e.magnetometer = r
        }
        A++, e.updateUI()
    }

    function m(t) {
        var a = t.target, n = w.getHexDataFromCharacValue(a.value), r = w.calcTAmb(n);
        isNaN(r) || 0 === r ? 0 === r && (e.ambTemp = r + "°C") : (r = r.toFixed(2), e.ambTemp = r + "°C");
        var i;
        e.sensortag.sensortag2 ? (i = w.calcTempIr_st2(n), isNaN(i) || 0 === i ? 0 === i && (e.objTemp = i + "°C") : (i = i.toFixed(2), e.objTemp = i + "°C")) : (i = w.calcTempIr(n), isNaN(i) || 0 === i ? 0 === i && (e.objTemp = i + "°C") : (i = i.toFixed(2), e.objTemp = i + "°C")), isNaN(Number(r)) || (D = {
            timeNum: T,
            date: w.getCurrentTime(),
            temp: Number(r)
        }), isNaN(Number(i)) || (b = {
            timeNum: T,
            date: w.getCurrentTime(),
            temp: Number(i)
        }), T++, e.timeDispData1.push(w.getCurrentTime()), e.updateUI()
    }

    function h(t) {
        var a = t.target, n = w.getHexDataFromCharacValue(a.value),
            r = w.calcAccXValue(n, e.sensortag.sensortag_firmware),
            i = w.calcAccYValue(n, e.sensortag.sensortag_firmware),
            o = w.calcAccZValue(n, e.sensortag.sensortag_firmware);
        u(r, i, o)
    }

    function g(e) {
        var t = e.target, a = w.getHexDataFromCharacValue(t.value), n = w.calcGyrXValue(a), r = w.calcGyrYValue(a),
            i = w.calcGyrZValue(a);
        s(n, r, i)
    }

    function p(e) {
        var t = e.target, a = w.getHexDataFromCharacValue(t.value), n = w.calcMagXValue(a), r = w.calcMagYValue(a),
            i = w.calcMagZValue(a);
        l(n, r, i)
    }

    function v(t) {
        var a, n = t.target, r = w.getHexDataFromCharacValue(n.value);
        e.sensortag.sensortag2 ? (a = w.calcPressure_st2(r), isNaN(a) || (a = a.toFixed(1))) : (a = w.calcPressure(r), isNaN(a) || (a = a.toFixed(1))), e.barometer = a + " mBar", isNaN(Number(a)) || (S = {
            date: w.getCurrentTime(),
            timeNum: k,
            temp: Number(a)
        }), k++, e.timeDispData2.push(w.getCurrentTime()), e.updateUI()
    }

    function f(t) {
        var a = t.target, n = w.getHexDataFromCharacValue(a.value), r = w.calcPress(n);
        isNaN(r) || (r = r.toFixed(2), e.humidity = r + "%rH"), isNaN(Number(r)) || (I = {
            timeNum: G,
            date: w.getCurrentTime(),
            temp: Number(r)
        }), G++, e.updateUI()
    }

    function d(e) {
        var t = e.target, a = w.getHexDataFromCharacValue(t.value), n = Number(w.movement_ACC_X(a)),
            r = Number(w.movement_ACC_Y(a)), i = Number(w.movement_ACC_Z(a));
        u(n, r, i);
        var o = Number(w.movement_GYRO_X(a)), c = Number(w.movement_GYRO_Y(a)), m = Number(w.movement_GYRO_Z(a));
        s(o, c, m);
        var h = Number(w.movement_MAG_X(a)), g = Number(w.movement_MAG_Y(a)), p = Number(w.movement_MAG_Z(a));
        l(h, g, p)
    }

    function y(t) {
        var a = t.target, n = w.getHexDataFromCharacValue(a.value), r = w.calLight(n);
        void 0 === r || isNaN(r) || (e.light = r + " Lux"), isNaN(Number(r)) || (V = {
            timeNum: U,
            date: w.getCurrentTime(),
            temp: Number(r)
        }), U++, e.updateUI()
    }

    e.sensortag = n, e.graph = "Line Chart";
    var b, D, N, x, C, S, I, V, w = new Util;
    e.timeDispData1 = [], e.timeDispData2 = [], e.timeDispData3 = [], document.addEventListener("contextmenu", function (e) {
        e.preventDefault()
    }), e.lineGraphoptions = {
        chart: {
            type: "lineChart",
            height: 250,
            margin: {top: 20, right: 20, bottom: 40, left: 55},
            x: function (e) {
                return e.x
            },
            y: function (e) {
                return e.y
            },
            useInteractiveGuideline: !0,
            duration: 0,
            yAxis: {
                tickFormat: function (e) {
                    return d3.format(".01f")(e)
                }
            },
            xAxis: {
                axisLabel: "Time", showMaxMin: !1, tickFormat: function (t) {
                    var a = "";
                    return e.timeDispData1[Math.abs(t)] ? a = e.timeDispData1[Math.abs(t)] : e.timeDispData2[Math.abs(t)] ? a = e.timeDispData2[Math.abs(t)] : e.timeDispData3[Math.abs(t)] && (a = e.timeDispData3[Math.abs(t)]), a ? a : d3.time.format("%x")(new Date)
                }
            },
            noData: ""
        }
    }, e.ambTempOptions = angular.copy(e.lineGraphoptions), e.objTempOptions = angular.copy(e.lineGraphoptions), e.accelOptions = angular.copy(e.lineGraphoptions), e.gyroOptions = angular.copy(e.lineGraphoptions), e.magnetoOptions = angular.copy(e.lineGraphoptions), e.baroOptions = angular.copy(e.lineGraphoptions), e.humidityOptions = angular.copy(e.lineGraphoptions), e.lightOptions = angular.copy(e.lineGraphoptions), e.ambTempOptions.chart.forceY = [20, 70], e.objTempOptions.chart.forceY = [2, 70], e.accelOptions.chart.forceY = [-1, 1], e.gyroOptions.chart.forceY = [-2, 2], e.magnetoOptions.chart.forceY = [-100, 100], e.baroOptions.chart.forceY = [500, 1500], e.humidityOptions.chart.forceY = [20, 100], e.lightOptions.chart.forceY = [0, 200], e.ambTempData = [{
        values: [],
        key: "Ambient Temperature"
    }], e.objTempData = [{values: [], key: "Object Temperature"}], e.accelData = [{
        values: [],
        key: "x-axis",
        color: "#e11126"
    }, {values: [], key: "y-axis", color: "#1153e1"}, {
        values: [],
        key: "z-axis",
        color: "#707276"
    }], e.gyroData = [{values: [], key: "x-axis", color: "#e11126"}, {
        values: [],
        key: "y-axis",
        color: "#1153e1"
    }, {values: [], key: "z-axis", color: "#707276"}], e.magnetoData = [{
        values: [],
        key: "x-axis",
        color: "#e11126"
    }, {values: [], key: "y-axis", color: "#1153e1"}, {
        values: [],
        key: "z-axis",
        color: "#707276"
    }], e.baroData = [{values: [], key: "Barometer"}], e.humidityData = [{
        values: [],
        key: "Relative Humidity"
    }], e.lightData = [{values: [], key: "Light Sensor"}];
    var T = 0, _ = 0, M = 0, A = 0, k = 0, G = 0, U = 0;
    setInterval(function () {
        D && (isNaN(D.timeNum) || isNaN(D.temp) || e.ambTempData[0].values.push({
            x: D.timeNum,
            y: D.temp,
            label: D.date
        }), e.ambTempData[0].values.length > 30 && e.ambTempData[0].values.shift()), b && (isNaN(b.timeNum) || isNaN(b.temp) || e.objTempData[0].values.push({
            x: b.timeNum,
            y: b.temp,
            label: b.date
        }), e.objTempData[0].values.length > 30 && e.objTempData[0].values.shift()), N && (isNaN(N.timeNum) || (e.accelData[0].values.push({
            x: N.timeNum,
            y: N.xVal
        }), e.accelData[1].values.push({x: N.timeNum, y: N.yVal}), e.accelData[2].values.push({
            x: N.timeNum,
            y: N.zVal
        })), e.accelData[0].values.length > 30 && e.accelData[0].values.shift(), e.accelData[1].values.length > 30 && e.accelData[1].values.shift(), e.accelData[2].values.length > 30 && e.accelData[2].values.shift()), x && (isNaN(x.timeNum) || (e.gyroData[0].values.push({
            x: x.timeNum,
            y: x.xVal
        }), e.gyroData[1].values.push({x: x.timeNum, y: x.yVal}), e.gyroData[2].values.push({
            x: x.timeNum,
            y: x.zVal
        })), e.gyroData[0].values.length > 30 && e.gyroData[0].values.shift(), e.gyroData[1].values.length > 30 && e.gyroData[1].values.shift(), e.gyroData[2].values.length > 30 && e.gyroData[2].values.shift()), C && (isNaN(C.timeNum) || (e.magnetoData[0].values.push({
            x: C.timeNum,
            y: C.xVal
        }), e.magnetoData[1].values.push({x: C.timeNum, y: C.yVal}), e.magnetoData[2].values.push({
            x: C.timeNum,
            y: C.zVal
        })), e.magnetoData[0].values.length > 30 && e.magnetoData[0].values.shift(), e.magnetoData[1].values.length > 30 && e.magnetoData[1].values.shift(), e.magnetoData[2].values.length > 30 && e.magnetoData[2].values.shift()), S && (isNaN(S.timeNum) || isNaN(S.temp) || e.baroData[0].values.push({
            x: S.timeNum,
            y: S.temp,
            label: S.date
        }), e.baroData[0].values.length > 30 && e.baroData[0].values.shift()), I && (isNaN(I.timeNum) || isNaN(I.temp) || e.humidityData[0].values.push({
            x: I.timeNum,
            y: I.temp,
            label: I.date
        }), e.humidityData[0].values.length > 30 && e.humidityData[0].values.shift()), V && (isNaN(V.timeNum) || isNaN(V.temp) || e.lightData[0].values.push({
            x: V.timeNum,
            y: V.temp,
            label: V.date
        }), e.lightData[0].values.length > 30 && e.lightData[0].values.shift())
    }, 1e3), e.pieOptions = {
        chart: {
            type: "pieChart", height: 300, donut: !0, x: function (e) {
                return e.key
            }, y: function (e) {
                return e.y
            }, showLabels: !0, pie: {
                startAngle: function (e) {
                    return e.startAngle / 2 - Math.PI / 2
                }, endAngle: function (e) {
                    return e.endAngle / 2 - Math.PI / 2
                }
            }, duration: 0, legend: {margin: {top: 5, right: 70, bottom: 5, left: 0}}
        }
    }, setInterval(function () {
        D && !isNaN(D.temp) && (e.pieAmbTempData = [{key: "Ambient Temperature", y: D.temp}, {
            key: "",
            y: 100
        }]), b && !isNaN(b.temp) && (e.pieObjTempData = [{key: "Object Temperature", y: b.temp}, {
            key: "",
            y: 100
        }]), S && !isNaN(S.temp) && (e.pieBarometerData = [{key: "Barometer", y: S.temp}, {
            key: "",
            y: 1500
        }]), I && !isNaN(I.temp) && (e.pieHumidityData = [{key: "Humidity", y: I.temp}, {
            key: "",
            y: 100
        }]), V && !isNaN(V.temp) && (e.pieLightData = [{key: "Light", y: V.temp}, {key: "", y: 1e3}]), e.$apply()
    }, 500), e.updateUI = function () {
        e.$apply()
    }, e.graphChange = function () {
        "Pie Chart" === e.graph && (D && (D.temp = D.temp + 1), b && (b.temp = b.temp + 1), S && (S.temp = S.temp + 1), I && (I.temp = I.temp + 1), V && (V.temp = V.temp + 1))
    }, e.sensortag.updateUI = function (t, a) {
        switch (e.showingLoadigIndicator && (r("Connected..."), c()), a) {
            case"temperature":
                m(t);
                break;
            case"accelerometer":
                h(t);
                break;
            case"gyroscope":
                g(t);
                break;
            case"magnetometer":
                p(t);
                break;
            case"humidity":
                f(t);
                break;
            case"barometer":
                v(t);
                break;
            case"movement":
                d(t);
                break;
            case"light":
                y(t)
        }
        e.$apply()
    }, e.onConnect = function () {
        o("", "Connecting ...."), e.sensortag.connect().then(function () {
            c(), r("Connected...")
        })["catch"](function (t) {
            c(), e.sensortag.connected || i("Unable to connect.")
        })
    }, navigator.bluetooth ? navigator.bluetooth.referringDevice && e.onConnect() : i("Bluetooth not supported, which is required.")
}]);