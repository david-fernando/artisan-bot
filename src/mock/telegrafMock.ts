type Context = {
  reply?: (value:string) => { }, 
  replyWithPhoto?: (value:string) => {} 
}

const reply = (value:string) => value

const replyWithPhoto = (value:string) => value


const context:Context = {
  reply,
  replyWithPhoto
}

function start(callback: (context:Context) => void) {
  if(!context.reply) return ;
  return callback(context)
}

const botMock = {
  start
}

export default botMock