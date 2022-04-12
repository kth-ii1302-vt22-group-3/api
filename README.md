# Cloudometer API

This api-service is used by the Cloudometer website for displaying temperatures.
The repository currently have to distintc routes which one is for checking the health of the api and other one is for sending temperatures to the requester.

## Default routes (Health checker)

```apib
GET /
+ Response 200 (text/plain)
  Hello World!
```
Returns a `Hello World!`.

```apib
GET /ping
+ Response 200 (text/plain)
  pong
```
Returns a `pong`.

```apib
GET /hello
+ Response 200 (text/plain)
  World!
```
Returns a `World!`.

```apib
GET /message
+ Response 200 (application/json)
  {
    message: "Hello World!"
  }
```
Returns an object with `{ message: "Hello World!" }`.

## Temperature routes



```apib
GET /temperatures
+ Header
  Accept: application/json
+ Response 200 (application/json)
  [{"id":1,"timestamp":"2022-04-11T16:39:54.000Z","value":1234,"unit":"c"},
  {"id":1,"timestamp":"2022-04-11T16:39:54.000Z","value":1234,"unit":"c"},
  {"id":1,"timestamp":"2022-04-11T16:39:54.000Z","value":1234,"unit":"c"},
  {"id":1,"timestamp":"2022-04-11T16:39:54.000Z","value":1234,"unit":"c"}]
```
Returns all found temperatures.

```apib
GET /temperatures/current
+ Header
  Accept: application/json
+ Response 200 (application/json)
  [{"id":1,"timestamp":"2022-04-11T16:39:54.000Z","value":1234,"unit":"c"}]
```
Returns the latest temperature

```apib
POST /temperatures
+ Header
  Accept: application/json
  Body: {
    value: 12.34
  }
+ Response 200 (application/json)
  [{"id":1,"timestamp":"2022-04-11T16:39:54.000Z","value":1234,"unit":"c"}]

```
Returns a the object created when POST:ing a value.
