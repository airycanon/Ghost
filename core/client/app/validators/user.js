import BaseValidator from './base';

export default BaseValidator.create({
    properties: ['name', 'bio', 'email', 'location', 'website', 'roles'],

    isActive(model) {
        return (model.get('status') === 'active');
    },

    name(model) {
        let name = model.get('name');

        if (this.isActive(model)) {
            if (validator.empty(name)) {
                model.get('errors').add('name', '请填写用户名');
                this.invalidate();
            } else if (!validator.isLength(name, 0, 150)) {
                model.get('errors').add('name', '用户名过长');
                this.invalidate();
            }
        }
    },

    bio(model) {
        let bio = model.get('bio');

        if (this.isActive(model)) {
            if (!validator.isLength(bio, 0, 200)) {
                model.get('errors').add('bio', '个人简介过长');
                this.invalidate();
            }
        }
    },

    email(model) {
        let email = model.get('email');

        if (!validator.isEmail(email)) {
            model.get('errors').add('email', '请填写邮箱');
            this.invalidate();
        }
    },

    location(model) {
        let location = model.get('location');

        if (this.isActive(model)) {
            if (!validator.isLength(location, 0, 150)) {
                model.get('errors').add('location', '位置信息过长');
                this.invalidate();
            }
        }
    },

    website(model) {
        let website = model.get('website');

        /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
        if (this.isActive(model)) {
            if (!validator.empty(website) &&
                (!validator.isURL(website, {require_protocol: false}) ||
                !validator.isLength(website, 0, 2000))) {

                model.get('errors').add('website', '网站链接格式不正确');
                this.invalidate();
            }
        }
        /* jscs:enable requireCamelCaseOrUpperCaseIdentifiers */
    },

    roles(model) {
        if (!this.isActive(model)) {
            let roles = model.get('roles');

            if (roles.length < 1) {
                model.get('errors').add('role', '请选择角色');
                this.invalidate();
            }
        }
    }
});
