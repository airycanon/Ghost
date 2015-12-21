import BaseValidator from './base';

export default BaseValidator.create({
    properties: ['title', 'metaTitle', 'metaDescription'],

    title(model) {
        let title = model.get('title');

        if (validator.empty(title)) {
            model.get('errors').add('title', '请填写博文标题。');
            this.invalidate();
        }

        if (!validator.isLength(title, 0, 150)) {
            model.get('errors').add('title', '标题不能超过150字。');
            this.invalidate();
        }
    },

    metaTitle(model) {
        let metaTitle = model.get('meta_title');

        if (!validator.isLength(metaTitle, 0, 150)) {
            model.get('errors').add('meta_title', 'Meta 标题不能超过150字。');
            this.invalidate();
        }
    },

    metaDescription(model) {
        let metaDescription = model.get('meta_description');

        if (!validator.isLength(metaDescription, 0, 200)) {
            model.get('errors').add('meta_description', 'Meta 摘要不能超过200字。');
            this.invalidate();
        }
    }
});
