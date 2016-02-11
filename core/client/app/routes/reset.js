import Ember from 'ember';
import Configuration from 'ember-simple-auth/configuration';
import styleBody from 'ghost/mixins/style-body';

const {
    Route,
    inject: {service}
} = Ember;

export default Route.extend(styleBody, {
    classNames: ['ghost-reset'],

    notifications: service(),
    session: service(),

    beforeModel() {
        this._super(...arguments);
        if (this.get('session.isAuthenticated')) {
            this.get('notifications').showAlert('您还未登录，无法重置密码。', {type: 'warn', delayed: true, key: 'password.reset.signed-in'});
            this.transitionTo(Configuration.routeAfterAuthentication);
        }
    },

    setupController(controller, params) {
        controller.token = params.token;
    },

    // Clear out any sensitive information
    deactivate() {
        this._super(...arguments);
        this.controller.clearData();
    }
});
