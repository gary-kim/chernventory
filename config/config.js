var config = {}

config.configversion = "0.0.1";
config.teststring = "testing testing 123";
config.domain = "chernventory.my.domain";
config.port = 80;
config.org = {
    "name": "organization name",
    "website": "https://my.domain/"
}
config.debug = true;
config.db = {
    "name": "dbname",
    "location": "database.sqlite",
    "logging": false
}

module.exports = config;
