Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route("/", {
    name: "homeIndex"
});

Router.route("/resume/add", {
	name: "addResume"
});

Router.route("/vacancy/add", {
	name: "addVacancy"
});

Router.route("/login", {
    name: "login"
});

Router.route("/resume/:resumeId", {
    name: "showResume",
    data: function() {
        return Resume.findOne({resumeId: this.params.resumeId});
    }
});

Router.route("/vacancy/:vacancyId", {
    name: "showVacancy",
    data: function() {
        return Vacancy.findOne({vacancyId: this.params.vacancyId});
    }
});