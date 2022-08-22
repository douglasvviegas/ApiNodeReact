const annotations = require('../models/annotationData')

module.exports = {

    create(request, response){
        const{title, notes, priority} = request.body;

        console.log(title);
        console.log(notes);
        console.log(priority);
    }

    /*app.get('/',(request, response) => {
        return response.json({
            nome: "Douglas Viegas",
            profissão: "dev",
            dataNascimento: "16/12/1995"
        });
    });*/
}