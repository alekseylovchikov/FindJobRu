Vacancy = new Meteor.Collection('vacancy');

Vacancy.findAllVacancy = function() {
    return Vacancy.find({}, {sort: {date: -1}});
};

Vacancy.findLastVacancy = function() {
    return Vacancy.find({}, {sort: {date: -1}, limit: 6});
};

Vacancy.initEasySearch('jobName');