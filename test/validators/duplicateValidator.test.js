const duplicateValidator = require("./../../modules/validators/duplicateValidator");

describe('duplicateValidator', () => {
    const duplicateValidatorRef = {duplicateValidator};

    let spyDuplicateValidator;

    beforeEach(() => {
        spyDuplicateValidator = jest.spyOn(duplicateValidatorRef, "duplicateValidator");
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it('should be called duplicateValidator', () => {
        duplicateValidatorRef.duplicateValidator(['-o'], '-o');
        expect(spyDuplicateValidator).toHaveBeenCalled();
    })

    it('should be called process.exit, when params are duplicated', () => {
        const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        duplicateValidatorRef.duplicateValidator(['-o', '-o'], '-o');
        expect(mockExit).toHaveBeenCalled();
    })
})