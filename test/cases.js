'use strict';

describe('Testing angular-promiseify', function() {

    beforeEach(module('angular-promiseify'));

    it('factory is created', inject(function(promiseify) {
        expect(promiseify).not.to.equal(null);
    }));

});
