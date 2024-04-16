var PROTO_PATH = __dirname + "/proto/hello_world.proto";

var parseArgs = require("minimist");
var grpc = require("@grpc/grpc-js");
var protoLoader = require("@grpc/proto-loader");
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
var hello_proto = grpc.loadPackageDefinition(packageDefinition).helloworld;

function main() {
  var argv = parseArgs(process.argv.slice(2), {
    string: "target",
  });
  var target;
  if (argv.target) {
    target = argv.target;
  } else {
    target = "localhost:50051";
  }
  var client = new hello_proto.HelloWorldService(
    target,
    grpc.credentials.createInsecure()
  );

  client.sayHello({ name: "Vasya", age: 32 }, function (err, response) {
    console.log("Response:", response);
  });
}

main();
