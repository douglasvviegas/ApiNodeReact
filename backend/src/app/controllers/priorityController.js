const annotations = require('../models/annotationData');

const PRIORITY_MAP = {
    true: 'Priority annotations',
    false: 'Normal annotations',
    'all': 'All annotations'
}

module.exports = {
    async read(request, response) {
        const priority = request.query;

        const priorityNotes = await annotations.find(priority);
        
        logger.info(`${PRIORITY_MAP[priority]} retrieved successfully, founded ${priorityNotes.length} entries`);

        return response.json(priorityNotes);
    },
    async update(request,response){
        const {id} = request.params;

        const annotation = await annotations.findOne({ _id : id });

        logger.info(`Annotation with id ${annotation._id} retrieved, prepare to change priority`);

        if (annotation.priority) {
            annotation.priority = false;
        } else{
            annotation.priority = true;
        }

        await annotation.save();

        logger.info(`Annotation with id ${annotation._id} successfully changed priority`);
        
        return response.json(annotation);
    }
}