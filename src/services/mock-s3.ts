export class MockS3 {
    public getObjectStub = jest.fn().mockReturnValue(Promise.resolve(true));
    public getObject = jest.fn();

    constructor(){

    }

    public giveStubbedObject() {
        return {
            upload: jest.fn().mockImplementation(() => ({ promise: this.getObjectStub }))
        }
    }

    public initMocks() {
        jest.mock('aws-sdk', () => {
            
        })
    }
    
}