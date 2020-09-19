// Map style
var mapstyle = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "gamma": "1.00"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "1"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "23"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "all",
        "stylers": [
            {
                "color": "#c7dba8"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": "-6"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "lightness": "30"
            },
            {
                "saturation": "13"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "1"
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "7"
            },
            {
                "lightness": "11"
            }
        ]
    },
    {
        "featureType": "landscape.natural.terrain",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "saturation": "6"
            },
            {
                "lightness": "6"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f19830"
            },
            {
                "visibility": "simplified"
            },
            {
                "weight": "3"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#f19830"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#a1cbfd"
            },
            {
                "visibility": "on"
            }
        ]
    }
];

// Style for cluster
var styleByClusterSize = 5;
var clusterStyle = [
   {  // for < 5 markers in cluster
      'url': 'images/v2/icon/Cluster.png',
      'textSize': '8', 
      'height': '35',
      'width': '35',
      'textColor': '#333'
   },
   {  // for 5-10 markers in cluster
      'url': 'images/v2/icon/Cluster.png',
      'textSize': '14', 
      'height': '85',
      'width': '85',
      'textColor': '#333'
   },
   {  // for > 10 markers in cluster
      'url': 'images/v2/icon/Cluster.png',
      'textSize': '18', 
      'height': '120',
      'width': '120',
      'textColor': '#333'
   }
];

var icon_goldHouse = {
    'url': 'images/v2/icon/gold-house.png',
    'scaledSize': [50, 65]
}
var icon_goldBusiness = {
   'url': 'images/v2/icon/gold-business.png',
   'scaledSize': [50, 65]
}
var icon_redrawHouse = {
    'url': 'images/v2/icon/redraw-house.png',
    'scaledSize': [50, 65]
}
var icon_redrawBusiness = {
    'url': 'images/v2/icon/redraw-business.png',
    'scaledSize': [50, 65]
}

var markerEvent = {
    // Click 事件
    'click' : function (e) {
        $('#cm2-house').toggleClass('active');
    }
}

function propertyAvg(markers) {
    var up = 0;
    var down = 0;
    for(var i=0; i<markers.length; i++) {
        var price = parseInt(markers[i].priceTag, 10);
        var est = parseInt(markers[i].estimate, 10);
        if (est > price)
           up++;
        else
           down++;
        //diff += (est-price)/est;
    }
    //var avgDiff = (diff/markers.length).toFixed(2);
    var result = {estup: up, estdown: down}
    return result;
}

$(function() {

    $('#market_mapArea').tinyMapConfigure({
        // Google Maps API Key，預設 null
        'key': 'AIzaSyAcFYdBAGmfDFeI79we7JVIjw88qKOFZkM'
    });

    $('#market_mapArea').tinyMap({
        'center': ['47.921290', '106.927413'],
        'zoom'  : 16,
        'styles': mapstyle,
        'markerCluster': {
           'zoomOnClick': false,
           'styles': clusterStyle,
           'calculator': function(markers, numStyles) {
               var index = 0, count = markers.length, dv = count, result = {};
               var upOrDownCount=propertyAvg(markers);
               while (dv > 0) {
                  dv = parseInt(dv - styleByClusterSize, 10);
                  index++;
               }
               index = Math.min(index, numStyles);
               result = {
                  text: count,
                  index: index
               };
               return result; 
           },
           'event': { // 叢集起始事件
              'clusterclick': function(s) {
                 // get marker and reset the cube-house content
                 m = s.getMarkers();  // this can get array of locations within the cluster, use id to identify what to display at #cube-house
                 c = s.getCenter(); 
                 cs = s.getSize();
                 $('#cm2-house').toggleClass('active');
              },
/*
              'clusteringbegin': function(s) {
                 var self = this;
                 var zoom = self.map.getZoom();

                 // 預設 ClusterIconStyle 選項
                 var opt = {
                    'fontFamily': 'Tahoma,sans-serif', // Font family (CSS)
                    'textSize': '2rem', // Font size (CSS)
                    'anchorText': [-10, 0], // Text position offset
                    'url': '', // Icon Url
                    'height': 128, // Icon height
                    'width': 128 // Icon Width
                 };

                 // 縮放等級條件
                 switch (zoom) {
                    case 13:
                       opt.url = 'https://code.essoduke.org/images/mc1.png';
                       break;
                    case 14:
                       opt.url = 'https://code.essoduke.org/images/mc2.png';
                       break;
                    default:
                       opt.url = 'https://code.essoduke.org/images/mc3.png';
                       break;
                 }

                 // 設置叢集 style
                 self.setStyles([opt]);
              }
*/
           },
        },
        'marker': [
            {
                'addr': ['47.921290', '106.927413'],
                'icon': icon_goldHouse,
                'newLabel': '50%',
                'newLabelCSS': 'map_label',
                'event': markerEvent
            },
            {
                'addr': ['47.921851', '106.925572'],
                'icon': icon_redrawBusiness,
                'newLabel': '50%',
                'newLabelCSS': 'map_label',
                'event': markerEvent
            }
        ]
    }); 

  
});
