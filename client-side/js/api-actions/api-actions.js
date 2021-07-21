function getRequest(location, callback) {
    fetch(location)
        .then((response) => response.json())
        .then((data) => callback(data))
        .then((err) => console.log(err));
}

function metMuseumPaintings(callback) {
    Promise.all([
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/437133'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/490037'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436524')
    ]).then(function(responses) {
        return Promise.all(responses.map(function (response) {
            return response.json()
        }))
    }).then((data) => callback(data))
    .then((err) => console.log(err))
}

export default {
    getRequest,
    metMuseumPaintings,
};