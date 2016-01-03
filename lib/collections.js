Goals = new Mongo.Collection('goals');

Goals.attachSchema(new SimpleSchema({
  type: {
    type: String,
    max: 20,
    autoform: {
      'label-type': 'stacked'
    }
  },
  tracker: {
    type: String,
    autoform: {
      rows: 10,
      'label-type': 'stacked'
    }
  },
  on: {
    type: Boolean,
    defaultValue: true,
    autoform: {
      type: 'toggle'
    }
  }
}));