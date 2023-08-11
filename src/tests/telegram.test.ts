import botMock from "../mock/telegrafMock";

describe('Test user interaction with chatbot', ()=>{
  const reply = `Olá sou Artisan! Ainda estou em desenvolvimento, mas quando estiver pronta serei capaz de 
transformar suas fotos em artes e varias outras coisas legais.`
  test("Should return a message from Chatbot", ()=>{
    botMock.start((context)=>{
      const response = context.reply?.(reply)
      expect(response).toBe(reply)
    })
  })
})