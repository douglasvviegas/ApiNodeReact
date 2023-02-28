const logger = require('../../utils/logger');
const annotations = require('../models/annotationData');

module.exports = {
    async read(request, response){
        const annotationList = await annotations.find();

        logger.info(`List of annotations retrieved successfully, founded ${annotationList.length} entries`);

        return response.json(annotationList);
    },
    async create(request, response){
        const {title, notes, priority} = request.body;

        const annotationCreated = await annotations.create({
            title,
            notes,
            priority
        });
        
        logger.info(`Note created successfully with id ${annotationCreated._id}`);

        return response.json(annotationCreated);
    },
    async delete(request, response){
        const {id} = request.params;
        const annotationDeleted = await annotations.findOneAndDelete({ _id : id });
        if (annotationDeleted) {
            logger.info(`Note with id ${annotationCreated._id} deleted successfully`);
            return response.json(annotationDeleted);
        }
        
        logger.error(`It was not possible to delete record id #${id} because it is not in the database`);

        return response.status(401).json({ message: `It was not possible to delete record id #${id} because it is not in the database`})
    }
}