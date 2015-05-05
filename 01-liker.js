#!/usr/bin/env node

(function() {
    'use strict';

    var liker = function(type) {
            return function(name) {
                return 'I like this ' + type + ': ' + name;
            };
        },
        book_liker = liker('book'),
        ted_liker = liker('TED Talk');

        console.log(book_liker('There and Back Again'));
        console.log(ted_liker('Why I don\'t follow TED Talks'));

}());
