const msRest = require("@azure/ms-rest-js");
const qnamaker = require("@azure/cognitiveservices-qnamaker");
const qnamaker_runtime = require("@azure/cognitiveservices-qnamaker-runtime");

var key_var = 'QNA_MAKER_SUBSCRIPTION_KEY';
if (!process.env[key_var]) {
    throw new Error('please set/export the following environment variable: ' + key_var);
}
var subscription_key = process.env[key_var];

var endpoint_var = 'QNA_MAKER_ENDPOINT';
if (!process.env[endpoint_var]) {
    throw new Error('please set/export the following environment variable: ' + endpoint_var);
}
var endpoint = process.env[endpoint_var];

var runtime_endpoint_var = 'QNA_MAKER_RUNTIME_ENDPOINT';
if (!process.env[runtime_endpoint_var]) {
    throw new Error('please set/export the following environment variable: ' + runtime_endpoint_var);
}
var runtime_endpoint = process.env[runtime_endpoint_var];