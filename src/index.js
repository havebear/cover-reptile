const axios = require('axios')
const cheerio = require('cheerio')

const url = 'https://www.acfun.cn/'

const getImgs = async (url) => {
  console.log(url)
  // const result = []
  const { data } = await axios.get(url)
  const $ = cheerio.load(data)

  $('a.banana-video-cover').each(el => {
    const { src } = $(el).attribs || {}
    console.log('-----------------------------------------------------------')
    console.log($(el).find('img'))
    // console.log(src)
  })

  // $('a.banana-video-cover').each(el => {
  //   console.log($(el).find('img').attr('src'))
  // })
  
  // console.log(data)
}

getImgs(url)