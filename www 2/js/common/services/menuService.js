nscApp.factory('MenuService', function ($http) {

    // Some fake testing data
    var contacts;

    return {
        all: function () {
            return contacts;
        },
        remove: function (contact) {
            contacts.splice(contacts.indexOf(contact), 1);
        },
        get: function (contactId) {
            for (var i = 0; i < contacts.length; i++) {
                if (contacts[i].id === parseInt(contactId)) {
                    return contacts[i];
                }
            }
            return null;
        }
    };
});
