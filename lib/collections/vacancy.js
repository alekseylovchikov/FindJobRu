Vacancy = new Meteor.Collection('vacancy');

Vacancy.findAllVacancy = function() {
    return Vacancy.find({}, {sort: {date: -1}});
};