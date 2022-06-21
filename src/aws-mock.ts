import {MockS3} from './services';

type AwsServices = "S3" | "SSM" | "DynamoDB"

export class AWSmock {
    private services;
    public S3: MockS3;

    constructor(services: AwsServices[]) {
        this.services = services;
        services.map((service) => {
            switch(service) {
                case "S3":
                    this.S3 = 
            }
        })
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
        jest.mock('aws-sdk', () => {
            return this.services.map((service) => {
                service.name: jest.(() => this.service.mock)
            })
        })
    }
}