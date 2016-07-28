import BaseValidator from './base';

export default BaseValidator.create({
    properties: ['label', 'url'],

    label(model) {
        let label = model.get('label');
        let hasValidated = model.get('hasValidated');

        if (validator.empty(label)) {
            model.get('errors').add('label', '请选定一个标签');
            this.invalidate();
        }

        hasValidated.addObject('label');
    },

    url(model) {
        let url = model.get('url');
        let hasValidated = model.get('hasValidated');
        /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
        let validatorOptions = {require_protocol: true};
        /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
        let urlRegex = new RegExp(/^(\/|#|[a-zA-Z0-9\-]+:)/);

        if (validator.empty(url)) {
            model.get('errors').add('url', '请选定一个链接或相对路径');
            this.invalidate();
        } else if (url.match(/\s/) || (!validator.isURL(url, validatorOptions) && !url.match(urlRegex))) {
            model.get('errors').add('url', '链接或相对路径格式不正确');
            this.invalidate();
        }

        hasValidated.addObject('url');
    }
});
