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
