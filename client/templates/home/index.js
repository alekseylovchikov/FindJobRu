Template.homeIndex.helpers({
    resume: function() {
        return Resume.findAllResume();
    },
    vacancy: function() {
        return Vacancy.findAllVacancy();
    },
    lastResume: function() {
        return Resume.findLastResume();
    },
    lastVacancy: function() {
        return Vacancy.findLastVacancy();
    }
});