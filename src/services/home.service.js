import http from '../plugins/axios'

class homeService {
  homeDetail() {
    return http.get(`/home-detail?populate=deep`)
  }
  chooseUs() {
    return http.get(`/choose-uses?populate=deep`)
  }
  groupSolutions() {
    return http.get(`/group-solutions?populate=deep`)
  }
  services() {
    return http.get(`/services?populate=deep`)
  }
  tech() {
    return http.get(`/teches?populate=deep`)
  }
  industries() {
    return http.get(`/industries?populate=deep`)
  }
  portofolio() {
    return http.get(`/portfolios?populate=deep`)
  }
  testimonials() {
    return http.get(`/testimonis?populate=deep`)
  }
}

export default new homeService();