import bot from "../mock/telegrafMock";
import { enhancerSelfie } from "../utils/commands";

describe('Test user interaction with chatbot', ()=>{
  const reply = `Olá sou Artisan! Ainda estou em desenvolvimento, mas quando estiver pronta serei capaz de 
transformar suas fotos em artes e varias outras coisas legais.`
  test("Should return a message from start command", ()=>{
    bot.start((context)=>{
      const response = context.reply?.(reply)
      expect(response).toBe(reply)
    })
  })
  test("Should return a message from help command", ()=>{
    const message = 'Ainda estou em desenvolvimento'
    bot.help((context)=>{
      const response = context.reply?.(message)
      expect(response).toBe(message)
    })
  })
  test('Should return "Já pode enviar sua foto!"', () => {
    bot.command('melhorarnitidezfoto', (context) => { 
      const response = enhancerSelfie(context)
      expect(response).toBe('Já pode enviar sua foto!') 
    })
  })
})