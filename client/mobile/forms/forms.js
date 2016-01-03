AutoForm.hooks({
  'insert-form': {
    onSuccess: function (operation, result, template) {
      alert('Goal added successfully!');
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
});