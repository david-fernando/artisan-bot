type Context = {
  reply?: (value:string) => { }, 
  replyWithPhoto?: (value:string) => {},
  from?: {
    id: number
  } 
}

const context:Context = {
  reply: (value:string) => value,
  replyWithPhoto: (value:string) => value,
  from: {
    id: 5424951409
  }
}

function start(callback: (context:Context) => void) {
  if(!context.reply) return ;
  return callback(context)
}

function help(callback: (context:Context) => void) {
  if(!context.reply) return ;
  return callback(context)
}

function command(name:string, callback: (context:Context) => void) {
  if(!context.reply) return ;
  return callback(context)
}

const bot = {
  start,
  help,
  command
}

export default bot