const  Message = require("../modules/MessageModel")
const getMessage= async (req, res) => {
    try {
      const message = await Message.find({}).populate("user");
      res.json(message);
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  };
  
  
 const postMessage = async (req, res) => {
    try {
      const { from, to, message } = req.body;
      const data = await Message.create({
        message: { text: message },
        users: [from, to],
        sender: from,
      });
  
      if (data) return res.json({ msg: "Message added successfully." });
      else return res.json({ msg: "Failed to add message to the database" })
    } catch (err) {
      res.status(500).json({
        status: "Failed",
        message: err,
      });
    }
  };
  
 const updateMessage = async (req, res) => {
    await Message.updateOne({_id:req.params.id}, req.body);
    res.json("updated");
  };
  
  
  
const deleteMessage =async (req, res) => {
    try {
      await Message.findByIdAndDelete(req.params.id);
      res.send("deleted");
    } catch (e) {
      res.status(500).send(e);
    }
  };

module.exports={
    getMessage,
    postMessage,
    updateMessage,
    deleteMessage
  }