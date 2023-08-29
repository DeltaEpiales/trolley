// realtime.js
const mapOptions = {
    center: { lat: 37.7749, lng: -122.4194 }, // Default center location (San Francisco)
    zoom: 13, // Default zoom level
};

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // You would use your real-time tracking data to update the marker position on the map
    const marker = new google.maps.Marker({
        position: { lat: 37.7749, lng: -122.4194 }, // Default marker position
        map: map,
        title: "Trolley Location",
    });
}

// Load Google Maps API and initialize the map
google.maps.event.addDomListener(window, "load", initMap);
