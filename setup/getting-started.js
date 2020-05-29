
/**
 *  Copyright 2020 Adriane Justine Tan
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

const request = require('../src/utils/request.js')
const getProof = require('../src/utils/proof.js')

const ACCESS_TOKEN = process.env.ACCESS_TOKEN
const FB_ENDPOINT = 'https://graph.facebook.com/v7.0/me'

/**
 *  Setting the "Getting Started" property with the payload `get_started`
 */
async function sendGettingStarted () {
  const params = new URLSearchParams()
  params.set('access_token', ACCESS_TOKEN)
  params.set('appsecret_proof', getProof())
  const url = `${FB_ENDPOINT}/messenger_profile?${params.toString()}`
  const data = {
    get_started: { payload: 'get_started' }
  }

  console.log('Setting `Getting Started` screen: ')
  console.log(data)
  const response = await request('POST', url, {}, data)
  console.log(`Result: ${response.body}`)
}

sendGettingStarted().then(() => {
  console.log('Operation completed')
})
