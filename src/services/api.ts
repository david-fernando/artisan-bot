import axios from 'axios'
const dotenv = require('dotenv')

dotenv.config()

const url = {
  enhancerPhoto: 'https://techhk.aoscdn.com/api/tasks/visual/scale'
}
const picWishToken = process.env.PICWISH_API_KEY

async function enhancerPhoto(photo:string) {
  const data = {
    sync: '1',
    image_url: photo,
    type: 'clean'
  }
  const options = {
    method: 'POST',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'X-API-KEY': picWishToken 
    },
    data: JSON.stringify(data),
    url: url.enhancerPhoto
  }

  const result = await axios(options)

  const image = result.data.data.image

  return image
}

async function enhancerSelfie(photo:string) {
  const data = {
    sync: '1',
    image_url: photo,
    type: 'face'
  }
  const options = {
    method: 'POST',
    headers: { 
      'content-type': 'application/x-www-form-urlencoded',
      'X-API-KEY': picWishToken 
    },
    data: JSON.stringify(data),
    url: url.enhancerPhoto
  }

  const result = await axios(options)

  const image = result.data.data.image

  return image
}

export const api:any = {
  enhancerPhoto,
  enhancerSelfie
}