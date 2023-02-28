const annotations = require('../models/annotationData');


module.exports = {
    async update(request,response) {
        const {id} = request.params;
        const {notes} = request.body;

        const annotation = await annotations.findOne({ _id : id });
        
        logger.info(`Annotation with id ${annotation._id} retrieved, prepare to update content`);

        if (notes) {
            annotation.notes = notes;
            await annotation.save();
            logger.info(`Annotation with id ${annotation._id} successfully updated content`);
        }
        return response.json(annotation);
    }
}