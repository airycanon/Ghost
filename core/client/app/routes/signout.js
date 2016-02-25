import Ember from 'ember';
import AuthenticatedRoute from 'ghost/routes/authenticated';
import styleBody from 'ghost/mixins/style-body';

const {
    canInvoke,
    inject: {service}
} = Ember;

export default AuthenticatedRoute.extend(styleBody, {
    titleToken: '注销',

    classNames: ['ghost-signout'],

    notifications: service(),

    afterModel(model, transition) {
        this.get('notifications').clearAll();
        if (canInvoke(transition, 'send')) {
            transition.send('invalidateSession');
        } else {
            this.send('invalidateSession');
        }
    }
});
