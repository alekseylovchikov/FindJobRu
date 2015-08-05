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
            resumeId: data.resumeId + date,
            owner: Meteor.userId()
        });

        console.log("create resume:", new Date().toLocaleString());
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
            aboutJob: data.aboutJob,
            owner: Meteor.userId()
        });

        console.log("create vacancy:", new Date().toLocaleString());
    },
    "fruitReg": function(user) {
        Accounts.createUser({
            email: user.email,
            password: user.password
        });
    },
    "fruitLogin": function(user) {
        Meteor.loginWithPassword(user.email, user.password);
    },
    "deleteResume": function(id) {
        Resume.remove({owner: Meteor.userId(), _id: id});
    },
    "deleteVacancy": function(id) {
        Vacancy.remove({owner: Meteor.userId(), _id: id});
    },
    "editResume": function(data, id, resumeId) {
        Resume.update({_id: id}, {
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
            resumeId: resumeId,
            owner: Meteor.userId()
        });
    },
    "editVacancy": function(data, id, vacancyId) {
        Vacancy.update({_id: id}, {
            firmName: data.firmName,
            jobName: data.jobName,
            experience: data.experience,
            about: data.about,
            tel: data.tel,
            email: data.email,
            money: data.money,
            more: data.more,
            vacancyId: vacancyId,
            date: new Date(),
            aboutJob: data.aboutJob,
            owner: Meteor.userId()
        });
    },
    sendEmail: function (to, from, subject, text) {
        check([to, from, subject, text], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Email.send({
            to: to,
            from: from,
            subject: subject,
            text: text
        });
    }
});