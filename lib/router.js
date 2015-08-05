Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route("/login", {
    name: "login",
    waitOn: function() {
        return [
            Meteor.subscribe("resume"),
            Meteor.subscribe("vacancy")
        ];
    }
});

Router.route("/", {
    name: "homeIndex",
    fastRender: true,
    waitOn: function() {
        return [
            Meteor.subscribe("vacancy"),
            Meteor.subscribe("resume")
        ];
    }
});

Router.route("/resume/add", {
	name: "addResume",
    waitOn: function() {
        return Meteor.subscribe("resume");
    }
});

Router.route("/vacancy/add", {
	name: "addVacancy"
});

Router.route("/resume/:resumeId", {
    name: "showResume",
    waitOn: function() {
        return Meteor.subscribe("resume");
    },
    data: function() {
        return Resume.findOne({resumeId: this.params.resumeId});
    }
});

Router.route("/vacancy/:vacancyId", {
    name: "showVacancy",
    waitOn: function() {
        return Meteor.subscribe("vacancy");
    },
    data: function() {
        return Vacancy.findOne({vacancyId: this.params.vacancyId});
    }
});

Router.route("/done", {
    name: "done"
});

Router.route("/reg", {
    name: "reg"
});

Router.route("/edit/resume/:resumeId", {
    name: "editResume",
    data: function() {
        return Resume.findOne({resumeId: this.params.resumeId});
    },
    waitOn: function() {
        return Meteor.subscribe("resume");
    }
});

Router.route("/edit/vacancy/:vacancyId", {
    name: "editVacancy",
    data: function() {
        return Vacancy.findOne({vacancyId: this.params.vacancyId});
    },
    waitOn: function() {
        return Meteor.subscribe("vacancy");
    }
});