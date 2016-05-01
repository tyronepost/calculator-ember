import Ember from 'ember';

export default Ember.Component.extend({

  tagName: 'button',
  classNames: ['col-md-3','btn','btn-default'],

  actions: {
    click() {
      console.log('clicking');
      this.get('pushNumber')(this.get('num'));
    }
  }
});
