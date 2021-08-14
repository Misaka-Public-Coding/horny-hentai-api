const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'HENTAI'
        });
    });
}

// Export the router
module.exports = router;