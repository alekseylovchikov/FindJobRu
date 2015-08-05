Template.addVacancy.events({
    "submit #addVacancy": function(e) {
        var firmName = e.target.firm_name.value,
            jobName = e.target.job_name.value,
            experience = e.target.experience.value,
            about = e.target.about.value,
            tel = e.target.tel.value,
            email = e.target.email.value,
            money = e.target.money.value,
            more = e.target.more.value,
            aboutJob = e.target.aboutJob.value;

        var key = "id" + Math.floor((Math.random() * 9999) + 10);

        var data = {
            firmName: firmName,
            jobName: jobName,
            experience: experience,
            about: about,
            tel: tel,
            email: email,
            money: money,
            more: more,
            vacancyId: key,
            aboutJob: aboutJob
        };

        if($.trim(firmName) !== "" && $.trim(jobName) !== "" && $.trim(money) !== "" && $.trim(experience) !== "") {
            Meteor.call("addVacancy", data);

            $(".alert").addClass("alert-info");
            $(".alert").text("Вакансия успешно добавлена!");

            e.target.firm_name.value = "";
            e.target.job_name.value = "";
            e.target.experience.value = "";
            e.target.about.value = "";
            e.target.tel.value = "";
            e.target.email.value = "";
            e.target.money.value = "";
            e.target.more.value = "";
            e.target.aboutJob.value = "";
        }

        return false;
    },
    "blur form": function() {
        function checkLength(dataIn) {
            var errors = [];
            var counter = 0;

            dataIn.forEach(function(item, value, counter) {
                if(item.length === 0) {
                    errors.push(counter);
                    counter++;
                }
            });

            if(errors.length === 0) {
                return true;
            } else {
                return false;
            }
        }

        var firmName = $('#firm_name').val(),
            jobName = $('#job_name').val(),
            experience = $('#experience').val(),
            about = $('#about').val(),
            tel = $('#tel').val(),
            email = $('#email').val(),
            money = $('#money').val(),
            aboutJob = $('#aboutJob').val();

        var aboutVacancy = [
            firmName,
            jobName,
            experience,
            about,
            tel,
            email,
            money,
            aboutJob
        ];

        if(checkLength(aboutVacancy)) {
            $('#addV').removeClass('disabled');
        } else {
            $('#addV').addClass('disabled');
        }

    }
});

Template.editVacancy.events({
    "blur form": function() {
        function checkLength(dataIn) {
            var errors = [];
            var counter = 0;

            dataIn.forEach(function(item, value, counter) {
                if(item.length === 0) {
                    errors.push(counter);
                    counter++;
                }
            });

            if(errors.length === 0) {
                return true;
            } else {
                return false;
            }
        }

        var firmName = $('#firm_name').val(),
            jobName = $('#job_name').val(),
            experience = $('#experience').val(),
            about = $('#about').val(),
            tel = $('#tel').val(),
            email = $('#email').val(),
            money = $('#money').val(),
            aboutJob = $('#aboutJob').val();

        var aboutVacancy = [
            firmName,
            jobName,
            experience,
            about,
            tel,
            email,
            money,
            aboutJob
        ];

        if(checkLength(aboutVacancy)) {
            $('#editV').removeClass('disabled');
        } else {
            $('#editV').addClass('disabled');
        }
    },
    "submit form": function(e) {
        e.preventDefault();

        var firmName = e.target.firm_name.value,
            jobName = e.target.job_name.value,
            experience = e.target.experience.value,
            about = e.target.about.value,
            tel = e.target.tel.value,
            email = e.target.email.value,
            money = e.target.money.value,
            more = e.target.more.value,
            aboutJob = e.target.aboutJob.value;

        var data = {
            firmName: firmName,
            jobName: jobName,
            experience: experience,
            about: about,
            tel: tel,
            email: email,
            money: money,
            more: more,
            aboutJob: aboutJob
        };

        if($.trim(firmName) !== "" && $.trim(jobName) !== "" && $.trim(money) !== "" && $.trim(experience) !== "") {
            Meteor.call("editVacancy", data, this._id, this.vacancyId);

            $(".alert").addClass("alert-info");
            $(".alert").text("Вакансия успешно сохранена!");
        }

        return false;
    }
});