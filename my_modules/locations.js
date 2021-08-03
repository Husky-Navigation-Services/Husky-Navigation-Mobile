// Maps locations to their latitude and longitude coordinates.
var buildingLocations = {}

var libraryLocations = {
    "Suzzallo Library": [47.65578389645157, -122.30815422653524],
    "Allen North": [47.65570394658331, -122.30715296533181],
    "Allen South": [47.655373676690964, -122.3069516908259],
    "Odegaard Library": [47.65636504798214,	-122.31014669323098],
    "Engineering Library": [47.65465642494313, -122.30448276388466],
    "Gowen Library": [47.656411266735155, -122.30783977331431]
}

function getLocationMap(nodesTxt) {
  //splits code into lines
  var lines = nodesTxt.replaceAll("\r\n", ",").split(",");

  //finds the number of unique nodes
  var nodeCount = parseInt(lines[0]);
  for(i = 1; i <= nodeCount; i++) {
      
      var elements  = lines[i].split(" ");
      var name = elements[3];

      //formats node names correctly
      //e.g. "MeanyHall" -> "Meany Hall" 
      var spacePositions = [];
      var offset = 0;
      for(j = 0; j < name.length; j++) {
          var c = name.charAt(j);
          //somehow finds correct spots for spaces
          if(j > 0 && c == c.toUpperCase() && !parseInt(c) && c != '0' &&
              name.charAt(j + 1) != name.charAt(j + 1).toUpperCase()) {
              spacePositions.push(j + offset);
              offset++;
          }
      }

      //update without concurrent modification
      spacePositions.forEach(pos => {
          name = name.substring(0, pos) + " " + name.substring(pos);
      });

      // if...
      //      name starts with R OR N, AND the rest of name is an integer
      //      OR
      //      name belongs to libraryLocations
      // then its not a building
      var isBuilding = !( ((name.charAt(0) == 'R' || name.charAt(0) == 'N') && parseInt(name.substring(1))) || libraryLocations[name]);
      if(isBuilding) {
          buildingLocations[name] = [elements[1], elements[2]];
      }
  }
  return Object.assign({}, buildingLocations, libraryLocations);
}

export default getLocationMap;