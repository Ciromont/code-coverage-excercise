const Jasmine = require('jasmine');
const JasminConsoleReporter = require('jasmine-console-reporter');
const jasmine = new Jasmine();

let reporter = new JasminConsoleReporter({
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