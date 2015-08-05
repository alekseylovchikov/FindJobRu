Template.reg.events({
    "submit form": function(e) {
        e.preventDefault();

        var password = $('[name=password]').val();
        var email = $('[name=email]').val();

        var user = {
            email: email,
            password: password
        };

        if($.trim(email) !== "" && $.trim(password) !== "") {
            Meteor.call('fruitReg', user);
            $('.alert').removeClass('alert-danger');
            $('.alert').addClass('alert-info');
            $('.alert').text("Регистрация прошла успешно!");
            $('#send-mail').addClass('alert-warning');
            $('#send-mail').text('На ваш email отправлено письмо.');

            var messageText = "Вы зарегестрировались на сайте FindJobRu." + "\nВаш login: " + email + "\nПароль: " + password;

            // SEND EMAIL
            Meteor.call('sendEmail',
                email,
                'svdmusic@gmail.com',
                'Регистрация на FindJobRu',
                messageText);
        } else {
            $('.alert').addClass('alert-danger');
            $('.alert').text('Введите email и пароль!');
        }

        return false;
    }
});

Template.login.events({
    "submit #login": function(e) {
        e.preventDefault();

        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        var user = {
            email: email,
            password: password
        };

        // Meteor.call("fruitLogin", user);
        Meteor.loginWithPassword(email, password);
    },
    "click #deleteVacancy": function() {
        Meteor.call("deleteVacancy", this._id);
    },
    "click #deleteResume": function() {
        Meteor.call("deleteResume", this._id);
    }
});

Template.login.helpers({
    userResume: function() {
        return Resume.find({owner: Meteor.userId()});
    },
    userVacancy: function() {
        return Vacancy.find({owner: Meteor.userId()});
    }
});