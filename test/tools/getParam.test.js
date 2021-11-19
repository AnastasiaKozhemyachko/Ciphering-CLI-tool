const getParam = require("./../../modules/tools/getParam");

describe('getParam', () => {
    const getParamRef = {getParam};
    let mockExit
    let spyGetParam;

    beforeEach(() => {
        mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        spyGetParam = jest.spyOn(getParamRef, "getParam");
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it(`should be return null, when config didn't exist`, () => {
        getParamRef.getParam('-c');
        expect(mockExit).toBeCalled();
    })

    it(`should be return null, when output didn't exist`, () => {
        getParamRef.getParam('-o');
        expect(mockExit).toBeCalled();
    })

    it(`should be return null, when input didn't exist`, () => {
        getParamRef.getParam('-i');
        expect(mockExit).toBeCalled();
    })

    it('should be returned path', () => {
        const path = 'path';
        process.argv.push('-o', path);
        getParamRef.getParam('-o');
        expect(spyGetParam).toHaveReturnedWith(path);
    })
})