import {AWSmock} from '../../index';

const AWS = new AWSmock(['S3']);

// fake import handler

// AWSmock.initMocks();
AWS.initMocks();

AWS.S3.getObjectStub().mockResolveValue

describe('mock s3 test suite', () => {
  test('simple test for mock s3 class', () => {

  });
})