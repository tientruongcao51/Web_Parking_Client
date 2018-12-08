function clearMap() {
	$('#panel').css("display", "block");
	$('#poly').val('null');
	showDraw = true;
//	if ($('#poly2').val() != '') {
//		$('#btn-add-in-draw').css("display", "block");
//	} else {
//		$('#btn-add-in-draw').css("display", "none");
//	}
	initMap();
}
function loadMaps(thegeom) {
	$('#panel').css("display", "none");
	$('#poly').val(thegeom);
	showDraw = false;
	initMap();
}
function clearSelection() {
	if (selectedShape) {
		selectedShape.setEditable(false);
		selectedShape = null;
	}
}

function setSelection(shape) {
	clearSelection();
	selectedShape = shape;
	shape.setEditable(true);
	selectColor(shape.get('fillColor') || shape.get('strokeColor'));
}

function deleteSelectedShape() {
	if (selectedShape) {
		selectedShape.setMap(null);
		$('#poly2').val("");
	}
}

function deleteAllShape() {
	for (var i = 0; i < all_overlays.length; i++) {
		all_overlays[i].overlay.setMap(null);
	}
	all_overlays = [];
	$('#poly2').val("");
}
function selectColor(color) {
	selectedColor = color;
	for (var i = 0; i < colors.length; ++i) {
		var currColor = colors[i];
		colorButtons[currColor].style.border = currColor == color ? '2px solid #789'
				: '2px solid #fff';
	}

	// Retrieves the current options from the drawing manager and replaces the
	// stroke or fill color as appropriate.
	var polylineOptions = drawingManager.get('polylineOptions');
	polylineOptions.strokeColor = color;
	drawingManager.set('polylineOptions', polylineOptions);

	var rectangleOptions = drawingManager.get('rectangleOptions');
	rectangleOptions.fillColor = color;
	drawingManager.set('rectangleOptions', rectangleOptions);

	var circleOptions = drawingManager.get('circleOptions');
	circleOptions.fillColor = color;
	drawingManager.set('circleOptions', circleOptions);

	var polygonOptions = drawingManager.get('polygonOptions');
	polygonOptions.fillColor = color;
	drawingManager.set('polygonOptions', polygonOptions);
}
function setSelectedShapeColor(color) {
	if (selectedShape) {
		if (selectedShape.type == google.maps.drawing.OverlayType.POLYLINE) {
			selectedShape.set('strokeColor', color);
		} else {
			selectedShape.set('fillColor', color);
		}
	}
}

function makeColorButton(color) {
	var button = document.createElement('span');
	button.className = 'color-button';
	button.style.backgroundColor = color;
	google.maps.event.addDomListener(button, 'click', function() {
		selectColor(color);
		setSelectedShapeColor(color);
	});

	return button;
}

function buildColorPalette(num) {
	if (num == 1) {
		var colorPalette = document.getElementById('color-palette');
		for (var i = 0; i < colors.length; ++i) {
			var currColor = colors[i];
			var colorButton = makeColorButton(currColor);
			colorPalette.appendChild(colorButton);
			colorButtons[currColor] = colorButton;
		}
		selectColor(colors[0]);
	}
}

var num = 1;
function initMap() {
	var map;
	var bounds = new google.maps.LatLngBounds();
	var polygonStr = $('#poly').val();
	map = new google.maps.Map(document.getElementById("map"), {
		center : new google.maps.LatLng(11.059821, 106.292725),
		zoom : 8,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	});
	var polygonFix;
	if (polygonStr != 'null') {
		drawPoly(polygonStr);
		function drawPoly(multipolygonWKT) {
			var polylines = [];
			var toReturn = [];
			multipolygonWKT = multipolygonWKT.replace("POLYGON ", "");
			var formattedValues = multipolygonWKT.replace("))", "");
			formattedValues = formattedValues.replace("((", "");

			var linesCoords = formattedValues.split("), (");

			for (i = 0; i < linesCoords.length; i++) {
				polylines[i] = [];
				var singleLine = linesCoords[i].split(", ");

				for (j = 0; j < singleLine.length; j++) {
					var coordinates = singleLine[j].split(" ");
					var latlng = new google.maps.LatLng(
							parseFloat(coordinates[1]),
							parseFloat(coordinates[0]));
					bounds.extend(latlng);

					polylines[i].push(latlng);

				}
			}

			polygonFix = new google.maps.Polygon({
				map : map,
				paths : polylines,
				// editable: true,
				strokeColor : 'red',
				strokeOpacity : 1,
				strokeWeight : 2,
				fillColor : 'green',
				fillOpacity : 0.35,
				zIndex : 1,
			});
			toReturn.push(polygonFix);
			return toReturn;
		}
		map.fitBounds(bounds);
	}

	// ------------SEARCH BOX -------------//

	// Create the search box and link it to the UI element.
	var input = document.getElementById('pac-input');
	var searchBox = new google.maps.places.SearchBox(input);
	// map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

	// Bias the SearchBox results towards current map's viewport.
	map.addListener('bounds_changed', function() {
		searchBox.setBounds(map.getBounds());
	});
	var markers = [];
	// Listen for the event fired when the user selects a prediction and
	// retrieve
	// more details for that place.
	searchBox.addListener('places_changed', function() {
		var places = searchBox.getPlaces();

		if (places.length == 0) {
			return;
		}

		// Clear out the old markers.
		markers.forEach(function(marker) {
			marker.setMap(null);
		});
		markers = [];

		// For each place, get the icon, name and location.
		bounds = new google.maps.LatLngBounds();
		places.forEach(function(place) {
			if (!place.geometry) {
				console.log("Returned place contains no geometry");
				return;
			}
			var icon = {
				url : place.icon,
				size : new google.maps.Size(71, 71),
				origin : new google.maps.Point(0, 0),
				anchor : new google.maps.Point(17, 34),
				scaledSize : new google.maps.Size(25, 25)
			};

			// Create a marker for each place.
			markers.push(new google.maps.Marker({
				map : map,
				icon : icon,
				title : place.name,
				position : place.geometry.location
			}));

			if (place.geometry.viewport) {
				// Only geocodes have viewport.
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
		});
		map.fitBounds(bounds);
	});
	// ///////////// setMAP
	var polyOptions = {
		strokeWeight : 0,
		fillOpacity : 0.45,
		editable : true
	};
	// Creates a drawing manager attached to the map that allows the user to
	// draw
	// markers, lines, and shapes.
	drawingManager = new google.maps.drawing.DrawingManager({
		// drawingMode : google.maps.drawing.OverlayType.POLYGON,
		drawingControlOptions : {
			position : google.maps.ControlPosition.TOP_RIGHT,
			 drawingModes: [ 'polygon']
		},
		polygonOptions : polyOptions,
		markerOptions : {
			draggable : true
		},
		polylineOptions : {
			editable : true
		},
		rectangleOptions : polyOptions,
		circleOptions : polyOptions,

	});
	drawingManager.setOptions({
		drawingControl : showDraw
	});
	drawingManager.setMap(map);

	var coordinatesArray;
	google.maps.event
			.addListener(
					drawingManager,
					'overlaycomplete',
					function(e) {
						all_overlays.push(e);
						if (e.type != google.maps.drawing.OverlayType.MARKER) {
							// Switch back to non-drawing mode after drawing a
							// shape.
							drawingManager.setDrawingMode(null);

							// Add an event listener that selects the
							// newly-drawn shape when the user
							// mouses down on it.
							var newShape = e.overlay;
							newShape.type = e.type;
							google.maps.event.addListener(newShape, 'click',
									function() {
										setSelection(newShape);
//									google.maps.event.addListener(newShape.getPath(),
//												'set_at', polygonChanged);
//									google.maps.event.addListener(newShape.getPath(),
//												'insert_at', polygonChanged);
									});
							
							google.maps.event.addListener(newShape.getPath(),
									'set_at', polygonChanged);
							google.maps.event.addListener(newShape.getPath(),
									'insert_at', polygonChanged);
							function polygonChanged() {
								var lines = newShape.getPath().getAt(0).lng()
										+ " "
										+ newShape.getPath().getAt(0).lat();
								for (var i = 1; i < newShape.getPath()
										.getLength(); i++) {
									lines += ", "
											+ newShape.getPath().getAt(i).lng()
											+ " "
											+ newShape.getPath().getAt(i).lat();
								}
								lines += ", "
										+ newShape.getPath().getAt(0).lng()
										+ " "
										+ newShape.getPath().getAt(0).lat();
								$('#poly2').val("POLYGON ((" + lines + "))");
								$('#btn-add-in-draw').css("display", "block");
							}
							setSelection(newShape);
							var lines2 = e.overlay.getPath().getAt(0).lng()
									+ " " + e.overlay.getPath().getAt(0).lat();
							for (var i = 1; i < e.overlay.getPath().getLength(); i++) {
								lines2 += ", "
										+ e.overlay.getPath().getAt(i).lng()
										+ " "
										+ e.overlay.getPath().getAt(i).lat();
							}
							lines2 += ", " + e.overlay.getPath().getAt(0).lng()
									+ " " + e.overlay.getPath().getAt(0).lat();
							$('#poly2').val("POLYGON ((" + lines2 + "))");
							$('#btn-add-in-draw').css("display", "block");
						}
					});
	// Clear the current selection when the drawing mode is changed, or when the
	// map is clicked.
	google.maps.event.addListener(drawingManager, 'drawingmode_changed',
			clearSelection);
	google.maps.event.addListener(map, 'click', clearSelection);
	google.maps.event.addDomListener(document.getElementById('delete-button'),
			'click', deleteSelectedShape);
	google.maps.event.addDomListener(document
			.getElementById('delete-all-button'), 'click', deleteAllShape);

	buildColorPalette(num);
	num = 0;
	google.maps.event.addDomListener(window, "load", initialize);
}