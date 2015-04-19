function initialize() {
	  var mapStyles = [
		{
		    "stylers": [
		      { "saturation": -100 },
		      { "lightness": 7 }
		    ]
		}
	  ];
	  var mapOptions = {
	    zoom: 15,
	    center: new google.maps.LatLng(33.875283, -78.616226),
	    scrollwheel: false,
	    draggable: false,
	    panControl: true,
	    scaleControl: false,
	    zoomControl: true,
	    streetViewControl: false,
	    disableDoubleClickZoom: true,
	    mapTypeId: 'Styled'
	  };

	  var map = new google.maps.Map(document.getElementById('map-canvas'),
	      mapOptions);

  	  //var defaultMarker = '/assets/images/contact/PT_mapicon.svg';

  	  var defaultMarker = new google.maps.MarkerImage(
	    '/assets/images/contact/PT_mapicon.svg',
	    null, /* size is determined at runtime */
	    null, /* origin is 0,0 */
	    null, /* anchor is bottom center of the scaled image */
	    new google.maps.Size(40, 52)
	);

  	  var marker = new google.maps.Marker({
      position: mapOptions.center,
      icon: defaultMarker,
      map: map,
      optimized: false
    });

	  var styledMapType = new google.maps.StyledMapType(mapStyles, { name: 'Styled' });
	  map.mapTypes.set('Styled', styledMapType);
	}

	function loadScript() {
	  var script = document.createElement('script');
	  script.type = 'text/javascript';
	  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
	      '&callback=initialize';
	  document.body.appendChild(script);
	}
window.onload = loadScript;
