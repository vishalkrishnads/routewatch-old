// it is impossible to host something in GitHub pages with this token bundled as an env or something.
// since the task explicitly states that this should be hosted with github pages, the token has to stay publicly exposed
export const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    center: [-74.5, 40],
    zoom: 9,
});