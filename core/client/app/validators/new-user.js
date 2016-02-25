import BaseValidator from './base';

export default BaseValidator.extend({
    properties: ['name', 'email', 'password'],

    name(model) {
        let name = model.get('name');

        if (!validator.isLength(name, 1)) {
            model.get('errors').add('name', '请填写用户名');
            this.invalidate();
        }
    },

    email(model) {
        let email = model.get('email');

        if (validator.empty(email)) {
            model.get('errors').add('email', '请填写邮箱');
            this.invalidate();
        } else if (!validator.isEmail(email)) {
            model.get('errors').add('email', '邮箱不可用');
            this.invalidate();
        }
    },

    password(model) {
        let password = model.get('password');

        if (!validator.isLength(password, 8)) {
            model.get('errors').add('password', '密码长度至少为8个字符。');
            this.invalidate();
        }
    }
});
