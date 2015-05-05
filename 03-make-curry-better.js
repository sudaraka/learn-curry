#!/usr/bin/env node

(function() {
    'use strict';

    var naive_curry = function(func) {
            var args = Array.prototype.slice.call(arguments, 1);

            return function() {
                return func.apply(this, args.concat(
                    Array.prototype.slice.call(arguments)
                ));
            };
        },

        make_curry = function(func, arg_count) {
            // Keep track of the number of defined arguments on given function
            arg_count = arg_count || func.length;

            return function() {
                if(arguments.length < arg_count) {
                    // Not all arguments given, keep on currying

                    return make_curry(
                        naive_curry.apply(this, [func].concat(
                            Array.prototype.slice.call(arguments)
                        )),
                        arg_count - arguments.length);
                }

                // All arguments given, call the function and return result
                return func.apply(this, arguments);
            };
        },

        send_message = function(from, to, text) {
            return ['@', to, ': ', text, ' -- ', from].join('');
        },

        send_message_curried = make_curry(send_message),

        from_sherlock_to_watson = send_message_curried('Sherlock', 'Watson');

    console.log(send_message_curried('Sherlock', 'Watson', 'You see, but you do not observe.'));
    console.log(send_message_curried('Sherlock')('Watson', 'You see, but you do not observe.'));
    console.log(send_message_curried('Sherlock', 'Watson')('You see, but you do not observe.'));
    console.log(send_message_curried('Sherlock')('Watson')('You see, but you do not observe.'));

    console.log(from_sherlock_to_watson('You see, but you do not observe.'));

}());
