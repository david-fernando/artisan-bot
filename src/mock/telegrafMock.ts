type Context = {
  reply?: (value:string) => { }, 
  replyWithPhoto?: (value:string) => {} 
}

const context:Context = {
  reply: (value:string) => value,
  replyWithPhoto: (value:string) => value
}

function start(callback: (context:Context) => void) {
  if(!context.reply) return ;
  return callback(context)
}

const bot = {
  start
}

export default bot