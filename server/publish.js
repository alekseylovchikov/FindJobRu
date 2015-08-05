Meteor.publish("resume", function () {
    return Resume.find({});
});

Meteor.publish("vacancy", function () {
    return Vacancy.find({});
});