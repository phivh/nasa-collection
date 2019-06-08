import Api from '../api';

describe('API tests', () => {
    let api = {};
    beforeEach(() => {
        api = new Api();
    });

    afterEach(() => {
        api = null;
    });

    it('Api.get - should retrive nasa data requests', () => {
        api
            .get('Moon')
            .then((response) => {
                expect(response.data.code).toBe(200);
            });
    });

});
