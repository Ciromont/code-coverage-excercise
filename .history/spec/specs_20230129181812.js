const Jasmin = require('jasmine');
const JasminConsoleREporter = require('jasmine-console-reporter');
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
jasmine.loadConfigFile('./spec/jasmine.jason')
jasmine.execute();