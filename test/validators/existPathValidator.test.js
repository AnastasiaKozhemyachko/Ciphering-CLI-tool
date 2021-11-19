const existPathValidator = require("./../../modules/validators/existPathValidator");
describe('existPathValidator', () => {
    const existPathValidatorRef = {existPathValidator};
    let spyExistPathValidatorRef;
    let mockExit;

    beforeEach(() => {
        mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        spyExistPathValidatorRef = jest.spyOn(existPathValidatorRef, "existPathValidator");
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it(`should be not has path`, () => {
        const result = existPathValidatorRef.existPathValidator(null, true);
        expect(result).toBeFalsy();
    })

    it('should be has path', () => {
        const result = existPathValidatorRef.existPathValidator('./input.txt', true);
        expect(result).toBeTruthy();
    })

    it('should be not the equal path for input', () => {
        existPathValidatorRef.existPathValidator('./xxx.txt', true);
        expect(mockExit).toBeCalled();
    })

    it('should be not the equal path for input', () => {
        existPathValidatorRef.existPathValidator('./xxx.txt', false);
        expect(mockExit).toBeCalled();
    })
})