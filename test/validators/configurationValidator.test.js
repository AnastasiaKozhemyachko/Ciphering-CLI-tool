const configurationValidator = require("./../../modules/validators/configurationValidator");

describe('configurationValidator', () => {
    const configurationValidatorRef = {configurationValidator};
    let mockExit;
    let spyConfigurationValidatorRef;


    beforeEach(() => {
        mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {});
        spyConfigurationValidatorRef = jest.spyOn(configurationValidatorRef, "configurationValidator");
    })

    afterEach(() => {
        jest.clearAllMocks();
    })

    it(`should be called`, () => {
        configurationValidatorRef.configurationValidator(['']);
        expect(spyConfigurationValidatorRef).toBeCalled();
    })

    it(`should be valid configuration`, () => {
        configurationValidatorRef.configurationValidator(['C1']);
        expect(mockExit).not.toBeCalled();
    })

    it(`should be invalid configuration`, () => {
        configurationValidatorRef.configurationValidator(['A1']);
        expect(mockExit).toBeCalled();
    })
})