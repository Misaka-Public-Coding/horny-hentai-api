const path = require("path");

const assetsDir = path.join(__dirname,"/../storage/");

const router = app => {
    app.get('/', (request, response) => {
        response.send({
            message: 'HENTAI API by естрёнка#8227'
        });
    });
    app.get('/safe', (request, response) => {
        let pathP = path.join(assetsDir,"safe/pic.png").toString();
        response.sendFile(pathP,(e)=>{
            console.log(e)
        });
    });
    app.get('/unsafe', (request, response) => {
        let pathP = path.join(assetsDir,"unsafe/pic.png").toString();
        response.sendFile(pathP,(e)=>{
            console.log(e)
        });
    });
}

module.exports = router;