import { APIGatewayEvent, APIGatewayProxyEventHeaders, Context } from "aws-lambda";
import * as handler from "../handler";

test("hello", async () => {
  const event = {
    body: JSON.stringify({ clave: 'valor' }),
    headers: { 'Content-Type': 'application/json' } as APIGatewayProxyEventHeaders,
  } as APIGatewayEvent;
  const context = {} as Context;

  const response = await handler.hello(event, context);

  expect(response.statusCode).toEqual(200);
  expect(JSON.parse(response.body).message).toEqual("Go Serverless v2.0! Your function executed successfully!")

  expect(response.headers['Content-Type']).toEqual('application/json');
});
