import Ember from 'ember';

const {Route} = Ember;

export default Route.extend({
    controllerName: 'error',
    templateName: 'error',
    titleToken: '错误',

    model() {
        return {
            status: 404
        };
    }
});
