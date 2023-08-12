import { api } from '../services/api';

let commands:any = {}

let imageTest = ''

function enhancerPhoto(context:any) {
  commands[context.from.id] = 'enhancerPhoto'
  return context.reply('Já pode enviar sua foto!');
}

function enhancerSelfie(context:any) {
  commands[context.from.id] = 'enhancerSelfie'
  return context.reply('já pode enviar sua foto!');
}

const setImageTest = (image:string) => imageTest = image

async function addPhoto(context:any, isTestEnviroment = false, commandTest?:string){
  const iDontUnderstandReply = `Não entendi! Por favor, escolha um dos comandos abaixo:
/melhorarnitidezselfie ideal para fotos com uma ou duas pessoas
/melhorarnitidezfoto ideal para fotos com varias pessoas`

  if(Object.keys(commands).length === 0){
    return context.reply(iDontUnderstandReply)
  }
    const photo = (!isTestEnviroment)? context?.message?.photo : ''
    const photoId = (!isTestEnviroment)? photo[photo.length - 1].file_id : ''
    const fileInfo = (isTestEnviroment)? imageTest : await context.telegram.getFile(photoId)
    const photoUrl = `https://api.telegram.org/file/bot${process.env.BOT_TOKEN}/${fileInfo.file_path}`;
    const command = commands[context?.from?.id] || commandTest
    const image = await api[command](photoUrl)
    if(isTestEnviroment){
      return {
        message: context.reply('Aqui estar sua foto!'),
        image: context.replyWithPhoto(image)
      }
    }
    context.reply('Aqui estar sua foto!')
    context.replyWithPhoto(image);
    commands = {}
  }

  export {
    enhancerPhoto,
    enhancerSelfie,
    addPhoto
  }