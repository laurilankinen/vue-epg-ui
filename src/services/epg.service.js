import axios from 'axios'
import { apiBasePath } from '@/constants/config'

class EPGService {
  async fetchProgramGuide() {
    const response = await axios.get(`${apiBasePath}/epg`)
    return response.data
  }
}

export default new EPGService()
