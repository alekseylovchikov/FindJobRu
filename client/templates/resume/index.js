Template.addResume.events({
    "submit #addResume": function(e) {
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

        var key = "id" + Math.floor((Math.random() * 999) + 100);

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

        if($.trim(data.fullName) !== "" && $.trim(data.jobName) !== "") {
            Meteor.call("addResume", data);

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
    }
});