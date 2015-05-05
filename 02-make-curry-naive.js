#!/usr/bin/env node

(function() {
    'use strict';

    var make_curry = function(func) {
            var args = Array.prototype.slice.call(arguments, 1);

            return function() {
                return func.apply(this, args.concat(
                    Array.prototype.slice.call(arguments)
                ));
            };
        },

        send_message = function(from, to, text) {
            return ['@', to, ': ', text, ' -- ', from].join('');
        },

        send_from_sherlock = make_curry(send_message, 'SH');

    console.log(send_message('Sherlock Holmes', 'Irene Adler', 'Stop boring me and think. It\'s the new sexy.'));
    console.log(make_curry(send_message, 'SH')('IA', 'Stop boring me and think. It\'s the new sexy.'));
    console.log(make_curry(send_message, 'SH', 'IA')('Stop boring me and think. It\'s the new sexy.'));

    console.log(send_from_sherlock('IA', 'Stop boring me and think. It\'s the new sexy.'));

}());
