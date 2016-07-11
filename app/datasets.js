'use strict';

module.exports = {

    _: function ()
    {
        return [ [1,2,3,4] ];
    },

    chain: function ()
    {
        return [ [
            {'user': 'Mark', 'gold': 1500000},
            {'user': 'Freddy', 'gold': 2000000},
            {'user': 'John', 'gold': 250000}
        ] ];
    },

    tap: function () // take 4 elem. array but in next test want 5 elem. aray
    {
        return [ [2,4,6,8,10], function(a){return a;}];
    },

    thru: function ()
    {
        return [ "roses are red", function(a){ var tab=[];tab[0]=a; return tab;}];
    },

    _prototype: function ()
    {
        return [ ['a','b','c','d'] ];
    },

    prototypeAt: function ()
    {
        return [ [ 'Address[0].person.name','Address[0].person.surname','Address[1].st.number', 'Address[1].st.name', 'Address[2].city' ] ];
    },

    prototypeChain: function ()
    {
        return [ [
            {'name': 'Mark', 'age': 26},
            {'name': 'Jack', 'age': 32},
            {'name': 'Kate', 'age': 38, 'gender': 'female'}
        ] ];
    },

    prototypeCommit: function ()
    {
        return [ ['old commit','commit'] ];
    },

    prototypeNext: function ()
    {
        return [ ['Kate','Smith',30] ];
    },

    prototypePlant: function ()
    {
        return [ [9,16] ];
    },

    prototypeReverse: function ()
    {
        return [ [5,3,7,4] ];
    },

    prototypeValue: function ()
    {
        return [ ['Andy', 'Flower', 30, 4600 ] ];
    }
};
