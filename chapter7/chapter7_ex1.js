// returns a roads object , that looks like this
// { "place1", [ {to: Place2, distance: 15}, {to: Place3, distance: 10} ]}
var roads = {};

function makeRoads(from, to, length) {
	function addRoad(from, to) {
		// if place is not already in roads obj
		if (!(from in roads)) {
			roads[from] = [];
		}
	//	roads[from].push
	}

}