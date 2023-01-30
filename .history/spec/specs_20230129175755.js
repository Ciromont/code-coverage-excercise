const Jasmin = require('jasmine');
const JasminConsoleREporter = require('jasmine-consle-reporter');
const jasmine = new JasminConsoleREporter();

let reporter = new JasminConsoleREporter({
    colors: 1,
    cleanStack: 3,
    verbosity: 4,
    listStyle:'indent',
    activity: false
});

jasmine.addReporter(reporter)
jasmine.showColors(true);
jasmine.loadConfigFile()