Resume = new Meteor.Collection('resume');

Resume.findAllResume = function() {
    return Resume.find({}, {sort: {date: -1}});
};

Resume.findLastResume = function() {
    return Resume.find({}, {sort: {date: -1}, limit: 6});
};

Resume.initEasySearch('jobName');