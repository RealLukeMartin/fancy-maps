# fancy-maps
React components for creating Leaflet maps. [DEMO](http://poetic.github.io/fancy-maps/).

Usage
-----
Use `gulp` to start the live reload server then navigate to http://localhost:8000. See `gulpfile.js` for more gulp tasks.

Components
----------

#### `LeafletMap`
Instantiates a new Leaflet map.

Example: `<LeafletMap lat="29.817178" lon="-95.4012915" minZoom="2" maxZoom="20" zoom="10" />`

#### `LayerGroup`
Adds a new LayerGroup to a Leaflet map.

Example: `<LayerGroup showThreshold="11" hideThreshold="12" dataSource="communities.geojson" />`

Note: Must be a child of `<LeafletMap>`

#### `Legend`
Adds a new LayerGroup to a Leaflet map.

Example: ``<Legend>{`<h3>Key</h3>`}</Legend>``

Note: Must be a child of `<LeafletMap>`

Resources
---------

Further reading:
  - http://facebook.github.io/react/
  - http://leafletjs.com/

For example usage, see examples/basic-map.html.
