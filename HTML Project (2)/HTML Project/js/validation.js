$(document).ready(function() {
  $('#shipping-form').validate({
    rules: {
      name: {
        required: true
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 15
      },
      address: {
        required: true
      },
      city: {
        required: true
      },
      state: {
        required: true
      },
      zip: {
        required: true,
        minlength: 5,
        maxlength: 10
      }
    },
    messages: {
      name: {
        required: 'Please enter your name'
      },
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      phone: {
        required: 'Please enter your phone number',
        minlength: 'Please enter a valid phone number',
        maxlength: 'Please enter a valid phone number'
      },
      address: {
        required: 'Please enter your street address'
      },
      city: {
        required: 'Please enter your city'
      },
      state: {
        required: 'Please select your state'
      },
      zip: {
        required: 'Please enter your ZIP code',
        minlength: 'Please enter a valid ZIP code',
        maxlength: 'Please enter a valid ZIP code'
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });
})
