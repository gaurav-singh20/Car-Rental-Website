$(document).ready(function() {
  // Show login modal when login link is clicked
  $('#loginLink').click(function(e) {
    e.preventDefault();
    $('#loginModal').show();
    $('body').addClass('blur');
  });

  // Hide login modal when close button or background is clicked
  $('#loginModal, .close').click(function() {
    $('#loginModal').hide();
    $('body').removeClass('blur');
  });

  // Prevent modal from closing when modal content is clicked
  $('.modal-content').click(function(e) {
    e.stopPropagation();
  });

  // Handle form submission
  $('#loginForm').submit(function(e) {
    e.preventDefault();
    // Validate username and password
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

    // Check if username and password are correct
    if (username === "gaurav17" && password === "password") {
      alert('Login successful!');
      $('#loginModal').hide();
      $('body').removeClass('blur');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });
});
