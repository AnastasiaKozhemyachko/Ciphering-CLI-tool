const getParam = require("./../../modules/tools/getParam");

describe('getParam', () => {
    const getParamRef = {
        getParam
    };

    let spyGetParam;
    beforeEach(() => {
        spyGetParam = jest.spyOn(getParamRef, "getParam");
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should be called getParam', () => {
        getParamRef.getParam();
        expect(spyGetParam).toHaveBeenCalled();
    })

    it('should be returned path', () => {
        const path = 'path';
        process.argv.push('-o', path);
        getParamRef.getParam('-o');
        expect(spyGetParam).toHaveReturnedWith(path);
    })
})