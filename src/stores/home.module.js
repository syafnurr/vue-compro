import { defineStore } from 'pinia'
import homeService from '@/services/home.service'

export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    isLoading: false,
    homeData: {
      hero: {},
      ourCompany: {},
      chooseUs: {},
      ourSolutions: {},
      ourService: {},
      tech: {},
      industries: {},
      portfolio: {},
      testimoni: {},
      industries: {},
      portfolio: {},
    },
    chooseUs: [],
    groupSolutions: [],
    currentTabSolutions: '',
    services: [],
    tech: [],
    industries: [],
    currentTabIndustries: '',
    portfolio: [],
    testimoni: [],
  }),
  getters: {
    activeSolution: (state) => {
      return state.groupSolutions.find(group => group.name === state.currentTabSolutions) || null;
    },
    activeIndustries: (state) => {
      return state.industries.find(group => group.name === state.currentTabIndustries) || null;
    }
  },
  actions: {
    async getData() {
      try {
        const response = await homeService.homeDetail();
        this.homeData = response.data.data.attributes;
      } catch (error) {
        console.error('Failed to fetch homeData:', error);
      }
    },
    async getChooseUs() {
      try {
        const response = await homeService.chooseUs();
        this.chooseUs = response.data.data
      } catch (error) {
        console.error('Failed to fetch chooseUs:', error);
      }
    },
    async getGroupSolutions() {
      try {
        const response = await homeService.groupSolutions();
        this.groupSolutions = response.data.data.map(group => ({
          id: group.id,
          ...group.attributes,
        }));
        if(this.groupSolutions.length > 0) {
          this.currentTabSolutions = this.groupSolutions[0].name; // Set default tab
        }
      } catch (error) {
        console.error('Failed to fetch group solutions:', error);
      }
    },
    setCurrentTabSolutions(tabName) {
      this.currentTabSolutions = tabName;
    },
    async getServices() {
      try {
        const response = await homeService.services();
        this.services = response.data.data
      } catch (error) {
        console.error('Failed to fetch services:', error);
      }
    },
    async getTech() {
      try {
        const response = await homeService.tech();
        this.tech = response.data.data
      } catch (error) {
        console.error('Failed to fetch tech:', error);
      }
    },
    async getIndustries() {
      try {
        const response = await homeService.industries();
        this.industries = response.data.data.map(group => ({
          id: group.id,
          ...group.attributes,
        }));
        if(this.industries.length > 0) {
          this.currentTabIndustries = this.industries[0].name; // Set default tab
        }
      } catch (error) {
        console.error('Failed to fetch industries:', error);
      }
    },
    setCurrentTabIndustries(tabName) {
      this.currentTabIndustries = tabName;
    },
    async getPortfolio() {
      try {
        const response = await homeService.portofolio();
        this.portfolio = response.data.data
      } catch (error) {
        console.error('Failed to fetch portfolio:', error);
      }
    },
    async getTestimoni() {
      try {
        const response = await homeService.testimonials();
        this.testimoni = response.data.data
      } catch (error) {
        console.error('Failed to fetch testimoni:', error);
      }
    }
  }
});