const contentful = require('contentful')
const config = {
  space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN
}

// export `createClient` to use it in page components
export default {
  createClient () {
    return contentful.createClient(config);
  }
}