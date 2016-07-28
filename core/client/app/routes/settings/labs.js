import AuthenticatedRoute from 'ghost-admin/routes/authenticated';
import styleBody from 'ghost-admin/mixins/style-body';
import CurrentUserSettings from 'ghost-admin/mixins/current-user-settings';

export default AuthenticatedRoute.extend(styleBody, CurrentUserSettings, {
    titleToken: '设置 - 实验室',

    classNames: ['settings'],

    beforeModel() {
        this._super(...arguments);
        return this.get('session.user')
            .then(this.transitionAuthor())
            .then(this.transitionEditor());
    },

    model() {
        return this.store.query('setting', {type: 'blog,theme,private'}).then((records) => {
            return records.get('firstObject');
        });
    }
});
