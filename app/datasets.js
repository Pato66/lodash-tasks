'use strict';

module.exports = {

    add: function ()
    {
        return [2,-4];
    },

    ceil: function ()
    {
        return [1.845,2];
    },

    divide: function ()
    {
        return [1,0];
    },

    floor: function ()
    {
        return [5.474,2];
    },

    max: function ()
    {
        return [ [1,2,3,4,5] ];
    },

    maxBy1: function ()
    {
        return [ [{ 'a': 1,'b':1 },{ 'a': 2,'b':2 },{ 'a': 3,'b':3 } ],function(o) { return o.a; } ];
    },

    maxBy2: function ()
    {
        return [ [ { Name: 'Edwin', Gold: 1500 },{ Name: 'Edwin', Gold: 2500 },{ Name: 'Edwin', Gold: 2400 } ],'Gold'];
    },

    mean: function ()
    {
        return [ [4,5,2,3]];
    },

    meanBy1: function ()
    {
        return [ [{ 'n': 28 }, { 'n': 27 }, { 'n': 26 }], function(o) { return o.n; } ];
    },

    meanBy2: function ()
    {
        return [[{ 'n': 1 }, { 'n': 2 }, { 'n': 4 },{ 'n': 5 }],'n'];
    },

    min: function ()
    {
        return [[4,-3, 8, 18,2,9]];
    },

    minBy1: function ()
    {
        return [ [ { name: 'Justin', age: 21 },{ name: 'Justin', age: 51 },{ name: 'Justin', age: 21 } ], function(o) { return o.name; }];
    },

    minBy2: function ()
    {
        return [ [ { Name: 'Bob', Gold: 200 },{ Name: 'Bob', Gold: 300 },{ Name: 'Justin', Gold: 211 } ],'Gold' ];
    },

    multiply: function ()
    {
        return [-5,-3];
    },

    round: function ()
    {
        return [8.2461,3];
    },

    
    subtract: function ()
    {
        return [15,0];
    },

    sum: function ()
    {
        return [[2,3,4,1]];
    },

    sumBy1: function ()
    {
        return [ [{ 'n': 3000 }, { 'n': 300 }, { 'n': 40.5 }], function(o) { return o.n; } ];
    },

    sumBy2: function ()
    {
        return [ [{ 'n': 100 }, { 'n': 50 }, { 'n': 40 }, { 'n': 3 }], 'n' ];
    }
};
