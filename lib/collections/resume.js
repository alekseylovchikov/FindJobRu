Resume = new Meteor.Collection('resume');

Resume.findAllResume = function() {
    return Resume.find({}, {sort: {date: -1}});
};