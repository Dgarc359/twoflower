const AWS = require('aws-sdk');
const s3 = AWS.S3();

export const handler = async (event: any, context: any) => {
  
  const params= { fake: 'param'};
  s3.getObject(params).promise().then((res) => res).catch(err => console.error(err))
  
  console.log('hello world');
}