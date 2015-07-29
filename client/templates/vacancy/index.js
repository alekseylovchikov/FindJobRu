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

        var key = "id" + Math.floor((Math.random() * 999) + 10);

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
    }
});