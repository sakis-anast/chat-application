const  Message = require("../modules/MessageModel")
//getting the message conversation of the user towards any other user and sorting them
const getMessage= async (req, res) => {
    try {
      const { from, to } = req.body;

    const messages = await Message.find({
      users: {
        $all: [from, to],
      },
    }).sort({ updatedAt: 1 });

    const projectedMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    res.json(projectedMessages);
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  };
  
  //sending new message functionality and save them in the database
 const postMessage = async (req, res) => {
    try {
      const { from, to, message } = req.body;
      const data = await Message.create({
        message: { text: message },
        users: [from, to],
        sender: from,
      });
  
      if (data)  {res.json({ msg: "Message added successfully.",data });}
      else{  res.json({ msg: "Failed to add message to the database" ,data})}
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  };
  
 

module.exports={
    getMessage,
    postMessage,
  }