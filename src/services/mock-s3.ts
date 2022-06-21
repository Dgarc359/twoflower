export class MockS3 {
    public getObjectStub = jest.fn().mockReturnValue(Promise.resolve(true));

    constructor(){

    }

    public giveStubbedObject() {
        return {
            upload: jest.fn().mockImplementation(() => ({ promise: this.getObjectStub }))
        }
    }
    
}