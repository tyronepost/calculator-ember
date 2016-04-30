import Ember from 'ember';

export default Ember.Component.extend({

  valueArray: [],

  value: Ember.computed('valueArray.[]', function() {
    let str = "";
    this.valueArray.forEach(val => {
      str += val;
    });
    return str;
  }),

  actions: {
    pushNumber(val) {
      this.valueArray.pushObject(val);
    }
  }
});
