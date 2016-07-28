import BaseValidator from './base';

export default BaseValidator.create({
    properties: ['name', 'slug', 'description', 'metaTitle', 'metaDescription'],

    name(model) {
        let name = model.get('name');

        if (validator.empty(name)) {
            model.get('errors').add('name', '请填写标签名称');
            this.invalidate();
        } else if (name.match(/^,/)) {
            model.get('errors').add('name', '标签名称不能以逗号开头。');
            this.invalidate();
        } else if (!validator.isLength(name, 0, 150)) {
            model.get('errors').add('name', '标签名称不能超过150字符。');
            this.invalidate();
        }
    },

    slug(model) {
        let slug = model.get('slug');

        if (!validator.isLength(slug, 0, 150)) {
            model.get('errors').add('slug', '链接不能超过150字符。');
            this.invalidate();
        }
    },

    description(model) {
        let description = model.get('description');

        if (!validator.isLength(description, 0, 200)) {
            model.get('errors').add('description', '简介不能超过200字。');
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
