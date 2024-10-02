const { Router } = require('express')
const mini = Router();


const messages = [
    {
        text: "Hi there!",
        user: 'Ose',
        added: new Date()
    },
    {
        text: "Pretty One",
        user: 'DebZ',
        added: new Date()
    }
];

mini.get('/', (req,res) => [
    res.render('index', { title: "Mini Messageboard", messages: messages})
])



mini.post('/new', (req,res) => {
    const messageText = req.body.messageText
    const messageUser= req.body.messageUser
    messages.push({ text: messageText, user: messageUser, added: new Date() }); 
    res.redirect("/")
})

mini.get('/message/:id', (req, res) => {
  const messageId = parseInt(req.params.id, 10);

  if (messageId >= 0 && messageId < messages.length) {
    const message = messages[messageId];
    res.render('msgDetails', { message });
  } else {
    res.status(404).send('Message not found');
  }
})

module.exports = mini;