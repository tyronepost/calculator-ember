import Ember from 'ember';

export default Ember.Component.extend({

  valueArray: [],
  valueStack: [],
  operationStack: [],

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
    },

    pushOperation(op) {
      this.operationStack.pushObject(op);
      this.valueStack.pushObject(this.value);
      console.log(this.operationStack);
      console.log(this.valueStack);
    }
  }
});
