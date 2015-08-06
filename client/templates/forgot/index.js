Template.forgotPassword.events({
    "submit form": function(e) {
        var email = e.target.forgotPasswordEmail.value;
        email = email.toLowerCase();

        if ($.trim(email) !== "") {
            Accounts.forgotPassword({email: email}, function(err) {
                if (err) {
                    if (err.message === 'User not found [403]') {
                        console.log('This email does not exist.');
                        $('.alert').removeClass('alert-info');
                        $('.alert').addClass('alert-danger');
                        $('.alert').text('Пользователя с этим email не существует.');
                    } else {
                        console.log('We are sorry but something went wrong.');
                    }
                } else {
                    // console.log('Email Sent. Check your mailbox.');
                    $('.alert').addClass('alert-info');
                    $('.alert').text('На вашу почту отправлено письмо.');
                }
            });

        }
        return false;
    }
});