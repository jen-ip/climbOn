	 var map;
	 var isActive = false;
	 var activeMarker;
	 var defaultIcon; 
	 var largeInfowindow;

      // Create a new blank array for all the listing markers.
      var markers = [];
      function initMap() {

      	var styles = [
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6a6a6a"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "off"
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
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#deff00"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
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
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#c4ff00"
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
                "color": "#21bcb0"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#a7e3de"
            }
        ]
    }
]
        // Constructor creates a new map - only center and zoom are required.
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 40.7413549, lng: -73.9980244},
          zoom: 13,
          styles: styles,
          mapTypeControl: false
        });

     
      var locations = [
      	{title: 'The Cliffs at LIC', location: {lat: 40.7486493, lng: -73.9509215}},
      	{title: 'The Sports Center at Chelsea Piers', location: {lat: 40.7464777, lng: -74.0106802}},
      	{title: 'Brooklyn Boulders', location: {lat: 40.679661, lng: -73.9864287}},
      	{title: 'Brooklyn Boulders Queensbridge', location: {lat: 40.7526872, lng: -73.9425536}},
      	{title: 'DUMBO Boulders', location: {lat: 40.704272, lng: -73.9914239}},
      	{title: 'The Climbing Gym at Manhattan Plaza Health Club', location: {lat: 40.7598933, lng: -73.99674}},
      	{title: 'Steep Rock Bouldering', location: {lat: 40.7867848, lng: -73.9528596}},
      	{title: 'Everyday Athlete', location: {lat: 40.6925522, lng: -73.9956783}}

      ];

        largeInfowindow = new google.maps.InfoWindow();

        // Style the marker a bit. This will be our listing marker.
        defaultIcon = makeMarkerIcon('21bcb0');
        // Create a "highlighted location" marker color for when user mouses over marker.
        var highlightedIcon = makeMarkerIcon('e7ff43');

        // The following group uses the location array to create an array of markers on initialize.
        for (var i = 0; i < locations.length; i++) {
          // Get the position from the location array.
          var position = locations[i].location;
          var title = locations[i].title;
          // Create a marker per location, and put into markers array.
           var marker = new google.maps.Marker({
            position: position,
            title: title,
            animation: google.maps.Animation.DROP,
            icon: defaultIcon,

            id: i
          });
          // Push the marker to our array of markers.
          markers.push(marker);

          // Two event listeners - one for mouseover, one for mouseout, change the colors back and forth.
          marker.addListener('mouseover', function() {
            this.setIcon(highlightedIcon);

          });
          marker.addListener('mouseout', function() {
          	resetMarkers()
          	if(!isActive){
				this.setIcon(defaultIcon);
          	}
            
          });
          // Create an onclick event to open an infowindow at each marker.
          marker.addListener('click', function() {
          	activeMarker = this;
          	resetMarkers()
            populateInfoWindow(this, largeInfowindow);
            this.setIcon(highlightedIcon);
            //console.log( this )
           
           // this.removeListener('mouseout');
           isActive = true;
          });
        }
        document.getElementById('show-listings').addEventListener('click', showListings);
        document.getElementById('hide-listings').addEventListener('click', hideListings);
      }

      function resetMarkers( ){
      	console.warn("resetMarkers()")

      	console.log( typeof(activeMarker) )
      

      	

      	for( i=0; i < markers.length ;i++){
      		console.log(markers[i])
      		
	      		if( typeof(activeMarker) != "undefined"  && activeMarker.id != markers[i].id){
	      			markers[i].setIcon(defaultIcon)
	      		}
      		
      	}

      }
      // This function populates the infowindow when the marker is clicked. We'll only allow
      // one infowindow which will open at the marker that is clicked, and populate based
      // on that markers position.
      function populateInfoWindow(marker, infowindow) {
        // Check to make sure the infowindow is not already opened on this marker.
        if (infowindow.marker != marker) {
          infowindow.marker = marker;
          infowindow.setContent('<div>' + marker.title + '</div>');
          infowindow.open(map, marker);
          // Make sure the marker property is cleared if the infowindow is closed.
          infowindow.addListener('closeclick', function() {
            infowindow.marker = null;
          });
        }
      }
      // This function will loop through the markers array and display them all.
      function showListings() {
        var bounds = new google.maps.LatLngBounds();
        // Extend the boundaries of the map for each marker and display the marker
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
          bounds.extend(markers[i].position);
        }
        map.fitBounds(bounds);
      }
      // This function will loop through the listings and hide them all.
      function hideListings() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
      }
      // This function takes in a COLOR, and then creates a new marker icon of that color.
      // The icon will be 21 px wide by 34 high, have an origin of 0, 0 and be anchored at 10, 34).
      function makeMarkerIcon(markerColor) {
        var markerImage = new google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new google.maps.Size(21, 34),
          new google.maps.Point(0, 0),
          new google.maps.Point(10, 34),
          new google.maps.Size(21,34));
        return markerImage;
      }