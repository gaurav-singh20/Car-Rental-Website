$(document).ready(function() {
  $('#loginLink').click(function(e) {
    e.preventDefault();
    $('#loginModal').show();
    $('body').addClass('blur');
  });

  $('#loginModal, .close').click(function() {
    $('#loginModal').hide();
    $('body').removeClass('blur');
  });

  $('.modal-content').click(function(e) {
    e.stopPropagation();
  });

  $('#loginForm').submit(function(e) {
    e.preventDefault();
    // validate username and password
    var username = $('#username').val();
    var password = $('#password').val();

    if (username === '') {
      alert('Please fill out the username field');
      return;
    }

    if (password === '') {
      alert('Please fill out the password field');
      return;
    }

    // check if username and password are correct
    if (username === "gaurav17" && password === "password") {
      alert('Login successful!');
      $('#loginModal').hide();
      $('body').removeClass('blur');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
});
