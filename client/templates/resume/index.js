Template.addResume.events({
    "submit #addResume": function(e) {
        e.preventDefault();

        var fullName = e.target.full_name.value,
            birthDate = e.target.birth_date.value,
            education = e.target.education.value,
            experience = e.target.experience.value,
            about = e.target.about.value,
            tel = e.target.tel.value,
            email = e.target.email.value,
            more = e.target.more.value,
            jobName = e.target.job_name.value,
            jobMoney = e.target.job_money.value;

        var key = "id" + Math.floor((Math.random() * 9999) + 100);

        var data = {
            fullName: fullName,
            birthDate: birthDate,
            education: education,
            experience: experience,
            about: about,
            tel: tel,
            email: email,
            more: more,
            jobName: jobName,
            jobMoney: jobMoney,
            resumeId: key
        };

        if($.trim(data.fullName) !== "" && $.trim(data.jobName) !== "" && $.trim(data.tel) !== "") {
            Meteor.call("addResume", data);

            $(".alert").addClass("alert-info");
            $(".alert").text("Резюме успешно добавлено!");

            e.target.full_name.value = "";
            e.target.birth_date.value = "";
            e.target.education.value = "";
            e.target.experience.value = "";
            e.target.about.value = "";
            e.target.tel.value = "";
            e.target.email.value = "";
            e.target.more.value = "";
            e.target.job_name.value = "";
            e.target.job_money.value = "";
        }

        return false;
    },
    "blur form": function() {
        var fullName = $('#full_name').val();
        var jobName = $('#job_name').val();
        var birthDate = $('#birth_date').val();
        var education = $('#education').val();
        var tel = $('#tel').val();
        var experience = $('#experience').val();
        var about = $('#about').val();

        if(fullName.length !== 0 && jobName.length !== 0 && birthDate.length !== 0 && education.length !== 0 && tel.length !== 0 && tel.length === 10 && experience.length !== 0 && about.length !== 0) {
            $('#addR').removeClass('disabled');
        } else {
            $('#addR').addClass('disabled');
        }
    }
});

Template.addResume.helpers({
    "createdResume": function() {
        return false;
    }
});

Template.editResume.events({
    "submit form": function(e) {
        e.preventDefault();

        var fullName = e.target.full_name.value,
            birthDate = e.target.birth_date.value,
            education = e.target.education.value,
            experience = e.target.experience.value,
            about = e.target.about.value,
            tel = e.target.tel.value,
            email = e.target.email.value,
            more = e.target.more.value,
            jobName = e.target.job_name.value,
            jobMoney = e.target.job_money.value;

        var data = {
            fullName: fullName,
            birthDate: birthDate,
            education: education,
            experience: experience,
            about: about,
            tel: tel,
            email: email,
            more: more,
            jobName: jobName,
            jobMoney: jobMoney
        };

        if($.trim(data.fullName) !== "" && $.trim(data.jobName) !== "" && $.trim(data.tel) !== "") {
            Meteor.call("editResume", data, this._id, this.resumeId);

            $(".alert").addClass("alert-info");
            $(".alert").text("Резюме успешно сохранено!");
        }

        return false;
    },
    "blur form": function() {
        var fullName = $('#full_name').val();
        var jobName = $('#job_name').val();
        var birthDate = $('#birth_date').val();
        var education = $('#education').val();
        var tel = $('#tel').val();
        var experience = $('#experience').val();
        var about = $('#about').val();

        if(fullName.length !== 0 && jobName.length !== 0 && birthDate.length !== 0 && education.length !== 0 && tel.length !== 0 && tel.length === 10 && experience.length !== 0 && about.length !== 0) {
            $('#saveResume').removeClass('disabled');
        } else {
            $('#saveResume').addClass('disabled');
        }
    }
});

