import AuthenticatedRoute from 'ghost-admin/routes/authenticated';
import CurrentUserSettings from 'ghost-admin/mixins/current-user-settings';
import styleBody from 'ghost-admin/mixins/style-body';

export default AuthenticatedRoute.extend(styleBody, CurrentUserSettings, {
    titleToken: '设置 - 应用 - Slack',

    classNames: ['settings-view-apps-slack'],

    model() {
        return this.modelFor('settings.apps').get('slack.firstObject');
    },

    setupController(controller) {
        this._super(...arguments);

        controller.set('settings', this.modelFor('settings.apps'));
    }
});
