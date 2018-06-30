/*
var url = 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms';
var date = location.search.split('date=')[1] ? location.search.split('date=')[1] : '2017-01-01';
var mapdate = 'date:' + date;
        var all_v3_01_1 =
            new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: url,
                    params: { 'LAYERS': 'ohdm_t:all_v3_01_1', 'format': 'image/jpeg', 'date': date },
                    serverType: 'geoserver',
                    viewparams: mapdate
                })
            })

        var all_v3_01_2 =
            new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: url,
                    params: { 'LAYERS': 'ohdm_t:all_v3_01_2', 'format': 'image/jpeg', 'date': date },
                    serverType: 'geoserver',
                    viewparams: mapdate
                })
            })

        var all_v3_01_3 =
            new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: url,
                    params: { 'LAYERS': 'ohdm_t:all_v3_01_3', 'format': 'image/jpeg', 'date': date },
                    serverType: 'geoserver',
                    viewparams: mapdate
                })
            })
        var all_v3_01_4 =
            new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: url,
                    params: { 'LAYERS': 'ohdm_t:all_v3_01_4', 'format': 'image/jpeg', 'date': date },
                    serverType: 'geoserver',
                    viewparams: mapdate
                })
            })
        var all_v3_01_5 =
            new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: url,
                    params: { 'LAYERS': 'ohdm_t:all_v3_01_5', 'format': 'image/jpeg', 'date': date },
                    serverType: 'geoserver',
                    viewparams: mapdate
                })
            })
        var all_v3_01_6 =
            new ol.layer.Tile({
                source: new ol.source.TileWMS({
                    url: url,
                    params: { 'LAYERS': 'ohdm_t:all_v3_01_6', 'format': 'image/jpeg', 'date': date },
                    serverType: 'geoserver',
                    viewparams: mapdate
                })
            })

var all_v3_01_complete =
    new ol.layer.Tile({
        source: new ol.source.TileWMS({
            url: url,
            params: { 'LAYERS': 'ohdm_t:all_v3_01', 'format': 'image/jpeg', 'date': date },
            serverType: 'geoserver',
            viewparams: mapdate
        })
    })

var map = new ol.Map({
    target: 'map',
    view: new ol.View({
        center: [1492062.75385, 6895234.55805],
        zoom: 11
    })
});
*/
        //map.addLayer(all_v3_01_1);
        //map.addLayer(all_v3_01_2);
        //map.addLayer(all_v3_01_3);
        /*map.addLayer(all_v3_01_4);
        map.addLayer(all_v3_01_5);
        map.addLayer(all_v3_01_6);*/
        //map.addLayer(all_v3_01_complete);

function initmap() {
    var url = 'http://ohm.f4.htw-berlin.de:8080/geoserver/ohdm_t/wms';
    var date = location.search.split('date=')[1] ? location.search.split('date=')[1] : '2017-01-01';
    var mapdate = 'date:' + date;
    
    var all_v3_01_complete =
        new ol.layer.Tile({
            source: new ol.source.TileWMS({
                url: url,
                params: { 'LAYERS': 'ohdm_t:all_v3_01', 'format': 'image/jpeg', 'date': date },
                serverType: 'geoserver',
                viewparams: mapdate
            })
    })

    var map = new ol.Map({
        target: 'map',
        view: new ol.View({
            center: [1492062.75385, 6895234.55805],
            zoom: 11
        })
    });
    map.addLayer(all_v3_01_complete);
}