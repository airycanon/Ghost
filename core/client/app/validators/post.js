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
        let metaTitle = model.get('metaTitle');

        if (!validator.isLength(metaTitle, 0, 150)) {
            model.get('errors').add('metaTitle', 'Meta 标题不能超过150字。');
            this.invalidate();
        }
    },

    metaDescription(model) {
        let metaDescription = model.get('metaDescription');

        if (!validator.isLength(metaDescription, 0, 200)) {
            model.get('errors').add('metaDescription', 'Meta 简介不能超过200字。');
            this.invalidate();
        }
    }
});
