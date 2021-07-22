function getRequest(location, callback) {
    fetch(location)
        .then((response) => response.json())
        .then((data) => callback(data))
        .then((err) => console.log(err));
}

function metMuseumPaintings(callback) {
    Promise.all([
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436949'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/10586'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/437685'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436595'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/437926'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/436196'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/10812'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/437942'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/435978'),
        fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/57309')
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