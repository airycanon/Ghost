import BaseValidator from './base';

export default BaseValidator.create({
    properties: ['title', 'description', 'password', 'postsPerPage'],
    title(model) {
        let title = model.get('title');

        if (!validator.isLength(title, 0, 150)) {
            model.get('errors').add('title', '标题过长');
            this.invalidate();
        }
    },

    description(model) {
        let desc = model.get('description');

        if (!validator.isLength(desc, 0, 200)) {
            model.get('errors').add('description', '简介过长');
            this.invalidate();
        }
    },

    password(model) {
        let isPrivate = model.get('isPrivate');
        let password = model.get('password');

        if (isPrivate && password === '') {
            model.get('errors').add('password', '请验证密码');
            this.invalidate();
        }
    },

    postsPerPage(model) {
        let postsPerPage = model.get('postsPerPage');

        if (!validator.isInt(postsPerPage)) {
            model.get('errors').add('postsPerPage', '每页显示博文数量应为数字');
            this.invalidate();
        } else if (postsPerPage > 1000) {
            model.get('errors').add('postsPerPage', '每页最多显示 1000 篇博文。');
            this.invalidate();
        } else if (postsPerPage < 1) {
            model.get('errors').add('postsPerPage', '每页最少显示 1 篇博文。');
            this.invalidate();
        }
    }
});
