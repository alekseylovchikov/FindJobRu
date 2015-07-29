Template.homeIndex.helpers({
    resume: function() {
        return Resume.findAllResume();
    },
    vacancy: function() {
        return Vacancy.findAllVacancy();
    }
});