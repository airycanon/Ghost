import BaseValidator from './base';

export default BaseValidator.create({
    properties: ['email'],

    email(model) {
        let email = model.get('email');

        if (validator.empty(email)) {
            model.get('errors').add('email', '请填写邮箱');
            this.invalidate();
        } else if (!validator.isEmail(email)) {
            model.get('errors').add('email', '邮箱不可用');
            this.invalidate();
        }
    }
});
