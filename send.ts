var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (error0: any, connection: any) {
  if (error0) {
    throw error0;
  }

  connection.createChannel(function (error1: any, channel: any) {
    if (error1) {
      throw error1;
    }

    let queue = "my_queue";
    let msg = "Hello World";

    channel.assertQueue(queue, {
      durable: false,
    });

    channel.sendToQueue(queue, Buffer.from(msg));
    console.log(`sent ${msg}`);
  });

  setTimeout(function () {
    connection.close();
    process.exit(0);
  }, 500);
  
});
