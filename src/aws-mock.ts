import {MockS3} from './services';

type AwsServices = "S3" | "SSM" | "DynamoDB"

type InstanceServices = {
    S3?: jest.Mock<{
        upload?: jest.Mock<any, any>;
        getObject?: jest.Mock<any, any>;
        listObjectsV2?: jest.Mock<any, any>;
        putObject?: jest.Mock<any, any>;
    }, []>,
}

export class AWSmock {
    private instancedServices: InstanceServices;
    public S3: MockS3;

    constructor(services: AwsServices[]) {
        services.map(this.instantiateMocks);
    }

    public instantiateMocks(service: AwsServices) {
            switch(service) {
                case "S3":
                    this.instancedServices = {
                        ...this.instancedServices,
                        S3: jest.fn(() => new MockS3().giveStubbedObject()),
                    };
                default:
                    throw new Error('invalid service');
            }
        
    }

    /**
     * init mocks **AFTER** importing handler
     * 
     * eg:
     * 
     * 
     * ```
     * import {handler} from './lambda-file';
     * AWSmock.initMocks();
     * ```
     */
    public initMocks() {
        jest.mock('aws-sdk', () => this.instancedServices)
    }
}