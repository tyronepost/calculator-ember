import Ember from 'ember';

export default Ember.Component.extend({

  classNames: ['col-md-3'],
  actions: {
    click() {
      console.log('clicking');
      this.get('pushNumber')(this.get('num'));
    }
  }
});
