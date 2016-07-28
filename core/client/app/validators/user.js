import BaseValidator from './base';
import {isBlank} from 'ember-utils';

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
                model.get('errors').add('role', '请选择权限');
                this.invalidate();
            }
        }
    },

    passwordChange(model) {
        let newPassword = model.get('newPassword');
        let ne2Password = model.get('ne2Password');

        // validation only marks the requested property as validated so we
        // have to add properties manually
        model.get('hasValidated').addObject('newPassword');
        model.get('hasValidated').addObject('ne2Password');

        if (isBlank(newPassword) && isBlank(ne2Password)) {
            model.get('errors').add('newPassword', '请输入新密码');
            this.invalidate();
        } else {
            if (!validator.equals(newPassword, ne2Password)) {
                model.get('errors').add('ne2Password', '新密码不匹配');
                this.invalidate();
            }

            if (!validator.isLength(newPassword, 8)) {
                model.get('errors').add('newPassword', '密码至少8个字符');
                this.invalidate();
            }
        }
    },

    ownPasswordChange(model) {
        let oldPassword = model.get('password');

        this.passwordChange(model);

        // validation only marks the requested property as validated so we
        // have to add properties manually
        model.get('hasValidated').addObject('password');

        if (isBlank(oldPassword)) {
            model.get('errors').add('password', '请输入旧密码');
            this.invalidate();
        }
    }
});
