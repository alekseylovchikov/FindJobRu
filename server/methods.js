Meteor.methods({
    "addResume": function(data) {
        var date = new Date().toLocaleTimeString();
        date = date.replace(/[^-0-9]/gim, '');

        Resume.insert({
            fullName: data.fullName,
            birthDate: data.birthDate,
            education: data.education,
            experience: data.experience,
            about: data.about,
            tel: data.tel,
            email: data.email,
            more: data.more,
            date: new Date(),
            jobName: data.jobName,
            jobMoney: data.jobMoney,
            resumeId: data.resumeId + date
        });

        console.log("create resume...");
    },
    "addVacancy": function(data) {
        var date = new Date().toLocaleTimeString();
        date = date.replace(/[^-0-9]/gim, '');

        Vacancy.insert({
            firmName: data.firmName,
            jobName: data.jobName,
            experience: data.experience,
            about: data.about,
            tel: data.tel,
            email: data.email,
            money: data.money,
            more: data.more,
            vacancyId: data.vacancyId + date,
            date: new Date(),
            aboutJob: data.aboutJob
        });
    }
});