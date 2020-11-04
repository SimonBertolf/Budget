import Vue from 'vue';
import Vuex from 'vuex';
// import dateSyncPlugin from './plugins/dateSyncPlugin';

Vue.use(Vuex);

const valuationDate = {
  state: () => ({
    currentDate: new Date(),
  }),
  mutations: {
    setCurrentDate(state, currentDate) {
      state.currentDate = currentDate;
    },
  },
};

const grossYieldTarget = {
  state: () => ({
    value: null,
    date: null,
    loading: true,
  }),
  mutations: {
    setGrossYieldTarget(state, { value, date, loading }) {
      state.value = value;
      state.date = date;
      state.loading = loading;
    },
  },
  actions: {
    fetchGrossYieldTarget({ commit }) {
      const grossYield = {
        value: 0.047,
        date: new Date(),
        loading: false,
      };
      setTimeout(() => {
        commit('setGrossYieldTarget', grossYield);
      }, 1500);
    },
  },
};
const grossYieldActual = {
  state: () => ({
    value: null,
    date: null,
    loading: true,
  }),
  mutations: {
    setGrossYieldActual(state, { value, date, loading }) {
      state.value = value;
      state.date = date;
      state.loading = loading;
    },
  },
  actions: {
    fetchGrossYieldActual({ commit }) {
      const grossYield = {
        value: 0.053,
        date: new Date(),
        loading: false,
      };
      setTimeout(() => {
        commit('setGrossYieldActual', grossYield);
      }, 1500);
    },
  },
};
const vacancy = {
  state: () => ({
    value: null,
    date: null,
    loading: true,
  }),
  mutations: {
    setVacancy(state, { value, date, loading }) {
      state.value = value;
      state.date = date;
      state.loading = loading;
    },
  },
  actions: {
    fetchVacancy({ commit }) {
      const itsVacancy = {
        value: 0.153,
        date: new Date(),
        loading: false,
      };
      setTimeout(() => {
        commit('setVacancy', itsVacancy);
      }, 1500);
    },
  },
};
const marketValue = {
  state: () => ({
    value: null,
    date: null,
    loading: true,
  }),
  mutations: {
    setMarketValue(state, { value, date, loading }) {
      state.value = value;
      state.date = date;
      state.loading = loading;
    },
  },
  actions: {
    fetchMarketValue({ commit }) {
      const itsMarketValue = {
        value: 595839434.684,
        date: new Date(),
        loading: false,
      };
      setTimeout(() => {
        commit('setMarketValue', itsMarketValue);
      }, 1500);
    },
  },
};
const wault = {
  state: () => ({
    value: null,
    date: null,
    loading: true,
  }),
  mutations: {
    setWaultValue(state, { value, date, loading }) {
      state.value = value;
      state.date = date;
      state.loading = loading;
    },
  },
  actions: {
    fetchWaultValue({ commit }) {
      const itsWaultValue = {
        value: 13.684,
        date: new Date(),
        loading: false,
      };
      setTimeout(() => {
        commit('setWaultValue', itsWaultValue);
      }, 1500);
    },
  },
};
const keyfigures = {
  modules: {
    grossYieldTarget,
    grossYieldActual,
    vacancy,
    marketValue,
    wault,
  },
};

const assetData = [
  {
    id: 0,
    label: 'asset 1',
    activeFrom: new Date('2017-08-20').getTime(),
    activeTo: null,
  },
  {
    id: 1,
    label: 'asset 2',
    activeFrom: new Date('2001-04-05').getTime(),
    activeTo: new Date('2018-02-25').getTime(),
  },
  {
    id: 2,
    label: 'asset 3',
    activeFrom: new Date('2015-03-13').getTime(),
    activeTo: null,
  },
  {
    id: 3,
    label: 'asset 4',
    activeFrom: new Date('2005-06-10').getTime(),
    activeTo: new Date('2019-01-06').getTime(),
  },
];
const assets = {
  state: () => ({
    current: {
      id: null,
      label: 'Alle',
    },
    list: [],
  }),
  mutations: {
    setCurrentAsset(state, currentAsset) {
      state.current = currentAsset;
    },
    setAssetList(state, assetList) {
      state.list = assetList;
    },
  },
  actions: {
    fetchAssets({ commit }, { currentDate }) {
      const currentDateMillis = currentDate.getTime();
      const filteredList = assetData.filter((assetItem) => {
        const isActiveBeforeCurrentDate = assetItem.activeFrom <= currentDateMillis;
        const isCurrentlyActive = !assetItem.activeTo || assetItem.activeTo >= currentDateMillis;
        return isActiveBeforeCurrentDate && isCurrentlyActive;
      });
      const assetListFetched = filteredList.map((assetItem) => {
        const { id, label } = assetItem;
        return {
          id,
          label,
        };
      });
      const assetList = [
        {
          id: null,
          label: 'Alle',
        },
        ...assetListFetched,
      ];
      commit('setAssetList', assetList);
    },
  },
};

const clientsData = [
  {
    id: 0,
    label: 'Mandant 1',
    assetId: 0,
  },
  {
    id: 1,
    label: 'Mandant 2',
    assetId: 1,
  },
  {
    id: 2,
    label: 'Mandant 3',
    assetId: 2,
  },
  {
    id: 3,
    label: 'Mandant 4',
    assetId: 3,
  },
  {
    id: 4,
    label: 'Mandant 5',
    assetId: 1,
  },
];
const clients = {
  state: () => ({
    current: {
      id: null,
      label: 'Alle',
    },
    list: [],
  }),
  mutations: {
    setCurrentClient(state, currentAsset) {
      state.current = currentAsset;
    },
    setClientList(state, assetList) {
      state.list = assetList;
    },
  },
  actions: {
    fetchClients({ commit, rootState }) {
      const assetId = rootState.assets.current.id;
      const filteredList = clientsData.filter((clientItem) => {
        if (assetId) return assetId === clientItem.assetId;
        return true;
      });
      const clientListFetched = filteredList.map((clientItem) => {
        const { id, label } = clientItem;
        return {
          id,
          label,
        };
      });
      const clientList = [
        {
          id: null,
          label: 'Alle',
        },
        ...clientListFetched,
      ];
      commit('setClientList', clientList);
    },
  },
};

const usageGroupsData = [
  {
    id: 0,
    label: 'usage group 1',
  },
  {
    id: 1,
    label: 'usage group 2',
  },
  {
    id: 2,
    label: 'usage group 3',
  },
  {
    id: 3,
    label: 'usage group 4',
  },
];
const usageGroups = {
  state: () => ({
    current: {
      id: null,
      label: 'Alle',
    },
    list: [],
  }),
  mutations: {
    setCurrentUsageGroup(state, currentUsageGroup) {
      state.current = currentUsageGroup;
    },
    setUsageGroupList(state, usageGroupList) {
      state.list = usageGroupList;
    },
  },
  actions: {
    fetchUsageGroups({ commit }) {
      const usageGroupListFetched = usageGroupsData.map((usageGroupItem) => {
        const { id, label } = usageGroupItem;
        return {
          id,
          label,
        };
      });
      const usageGroupList = [
        {
          id: null,
          label: 'Alle',
        },
        ...usageGroupListFetched,
      ];
      commit('setUsageGroupList', usageGroupList);
    },
  },
};

const usageTypesData = [
  {
    id: 0,
    label: 'usage type 1',
  },
  {
    id: 1,
    label: 'usage type 2',
  },
  {
    id: 2,
    label: 'usage type 3',
  },
  {
    id: 3,
    label: 'usage type 4',
  },
];
const usageTypes = {
  state: () => ({
    current: {
      id: null,
      label: 'Alle',
    },
    list: [],
  }),
  mutations: {
    setCurrentUsageType(state, currentUsageType) {
      state.current = currentUsageType;
    },
    setUsageTypeList(state, usageTypeList) {
      state.list = usageTypeList;
    },
  },
  actions: {
    fetchUsageTypes({ commit }) {
      const usageTypeListFetched = usageTypesData.map((usageTypeItem) => {
        const { id, label } = usageTypeItem;
        return {
          id,
          label,
        };
      });
      const usageTypeList = [
        {
          id: null,
          label: 'Alle',
        },
        ...usageTypeListFetched,
      ];
      commit('setUsageTypeList', usageTypeList);
    },
  },
};

const vacancySeriesDataMock = [
  {
    category: 'portfolio1',
    series: [
      {
        date: new Date(2019, 0, 1),
        value: 0.345,
      },
      {
        date: new Date(2019, 1, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 2, 1),
        value: 0.645,
      },
      {
        date: new Date(2019, 3, 1),
        value: 0.445,
      },
      {
        date: new Date(2019, 4, 1),
        value: 0.745,
      },
      {
        date: new Date(2019, 5, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 6, 1),
        value: 0.145,
      },
      {
        date: new Date(2019, 7, 1),
        value: 0.045,
      },
      {
        date: new Date(2019, 8, 1),
        value: 0.645,
      },
      {
        date: new Date(2019, 9, 1),
        value: 0.745,
      },
      {
        date: new Date(2019, 10, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 11, 1),
        value: 0.145,
      },
    ],
  },
  {
    category: 'portfolio2',
    series: [
      {
        date: new Date(2019, 0, 1),
        value: 0.545,
      },
      {
        date: new Date(2019, 1, 1),
        value: 0.945,
      },
      {
        date: new Date(2019, 2, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 3, 1),
        value: 0.145,
      },
      {
        date: new Date(2019, 4, 1),
        value: 0.645,
      },
      {
        date: new Date(2019, 5, 1),
        value: 0.845,
      },
      {
        date: new Date(2019, 6, 1),
        value: 0.345,
      },
      {
        date: new Date(2019, 7, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 8, 1),
        value: 0.545,
      },
      {
        date: new Date(2019, 9, 1),
        value: 0.845,
      },
      {
        date: new Date(2019, 10, 1),
        value: 0.045,
      },
      {
        date: new Date(2019, 11, 1),
        value: 0.345,
      },
    ],
  },
];
const vacancySeries = {
  state: () => ({
    data: [],
    breakdown: {
      id: 0,
      label: 'Mandant',
    },
    breakdowns: [],
  }),
  mutations: {
    setVacancySeriesData(state, vacancySeriesData) {
      state.data = vacancySeriesData;
    },
    setBreakdowns(state, breakdowns) {
      state.breakdowns = breakdowns;
    },
    setCurrentBreakdown(state, breakdown) {
      state.breakdown = breakdown;
    },
  },
  actions: {
    fetchVacancySeries({ commit }) {
      commit('setVacancySeriesData', vacancySeriesDataMock);
    },
    fetchBreakdowns({ commit }) {
      const itsBreakdowns = [
        {
          id: 0,
          label: 'Mandant',
        },
        {
          id: 1,
          label: 'etwas 1',
        },
        {
          id: 2,
          label: 'etwas2',
        },
      ];
      commit('setBreakdowns', itsBreakdowns);
    },
  },
};

const usagesSeriesDataMock = [
  {
    usageGroup: 'Wohnen',
    amount: 2349422.34,
  },
  {
    usageGroup: 'Büro',
    amount: 1249422.70,
  },
  {
    usageGroup: 'Wohnen',
    amount: 2349422.34,
  },
  {
    usageGroup: 'Gewerbe',
    amount: 4249422.70,
  },
  {
    usageGroup: 'Verkauf',
    amount: 249422.34,
  },
  {
    usageGroup: 'Lager',
    amount: 49422.70,
  },
];
const usagesSeries = {
  state: () => ({
    data: [],
    current: {
      id: 0,
      label: 'Nutzungsgruppe',
    },
    list: [],
    typeOfUnit: {
      id: 1,
      label: 'Ertrag',
    },
    typesOfUnit: [],

  }),
  mutations: {
    setUsagesSeriesData(state, vacancySeriesData) {
      state.data = vacancySeriesData;
    },
    setUsagesList(state, usagesList) {
      state.list = usagesList;
    },
    setCurrentUsage(state, currentUsage) {
      state.current = currentUsage;
    },
    setTypesOfUnit(state, typesOfUnit) {
      state.typesOfUnit = typesOfUnit;
    },
    setCurrentTypeOfUnit(state, currentTypeOfUnit) {
      state.typeOfUnit = currentTypeOfUnit;
    },
  },
  actions: {
    fetchUsagesSeries({ commit }) {
      commit('setUsagesSeriesData', usagesSeriesDataMock);
    },
    fetchTypesOfUnit({ commit }) {
      const types = [
        {
          id: 0,
          label: 'Anzahl',
        },
        {
          id: 1,
          label: 'Ertrag',
        },
        {
          id: 2,
          label: 'Fläche',
        },
      ];
      commit('setTypesOfUnit', types);
    },
    fetchUsagesList({ commit }) {
      const usagesList = [
        {
          id: 0,
          label: 'Nutzungsgruppe',
        },
        {
          id: 1,
          label: 'etwas 1',
        },
        {
          id: 2,
          label: 'etwas 2',
        },
      ];
      commit('setUsagesList', usagesList);
    },
  },
};

const grossYieldSeriesDataMock = [
  {
    category: 'portfolio1',
    series: [
      {
        date: new Date(2019, 0, 1),
        value: 0.345,
      },
      {
        date: new Date(2019, 1, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 2, 1),
        value: 0.645,
      },
      {
        date: new Date(2019, 3, 1),
        value: 0.445,
      },
      {
        date: new Date(2019, 4, 1),
        value: 0.745,
      },
      {
        date: new Date(2019, 5, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 6, 1),
        value: 0.145,
      },
      {
        date: new Date(2019, 7, 1),
        value: 0.045,
      },
      {
        date: new Date(2019, 8, 1),
        value: 0.645,
      },
      {
        date: new Date(2019, 9, 1),
        value: 0.745,
      },
      {
        date: new Date(2019, 10, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 11, 1),
        value: 0.145,
      },
    ],
  },
  {
    category: 'portfolio2',
    series: [
      {
        date: new Date(2019, 0, 1),
        value: 0.545,
      },
      {
        date: new Date(2019, 1, 1),
        value: 0.945,
      },
      {
        date: new Date(2019, 2, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 3, 1),
        value: 0.145,
      },
      {
        date: new Date(2019, 4, 1),
        value: 0.645,
      },
      {
        date: new Date(2019, 5, 1),
        value: 0.845,
      },
      {
        date: new Date(2019, 6, 1),
        value: 0.345,
      },
      {
        date: new Date(2019, 7, 1),
        value: 0.245,
      },
      {
        date: new Date(2019, 8, 1),
        value: 0.545,
      },
      {
        date: new Date(2019, 9, 1),
        value: 0.845,
      },
      {
        date: new Date(2019, 10, 1),
        value: 0.045,
      },
      {
        date: new Date(2019, 11, 1),
        value: 0.345,
      },
    ],
  },
];
const grossYieldSeries = {
  state: () => ({
    data: [],
  }),
  mutations: {
    setGrossYieldSeriesData(state, grossYieldSeriesData) {
      state.data = grossYieldSeriesData;
    },
  },
  actions: {
    fetchGrossYieldSeries({ commit }) {
      commit('setGrossYieldSeriesData', grossYieldSeriesDataMock);
    },
  },
};

const topTenantsMock = [
  {
    label: 'Schweizerische Bundesbahnen',
    value: 2255250000,
  },
  {
    label: 'BMW Schweiz AG',
    value: 430000000,
  },
  {
    label: 'Kantonsspital St.Gallen',
    value: 1000000000,
  },
  {
    label: 'LIDL Schweiz',
    value: 246500000,
  },
  {
    label: 'Mieter Gandon Apartments',
    value: 355000000,
  },
  {
    label: 'Reifeisenbank Oberes Rheintal Genossenschaft',
    value: 500000000,
  },
  {
    label: 'Haus des Lernens AG',
    value: 624000000,
  },
  {
    label: 'Coop Genossenschaft Direktion Immobilien',
    value: 329500000,
  },
  {
    label: 'Biotronik AG',
    value: 1000000000,
  },
  {
    label: 'Qualpet AG',
    value: 431000000,
  },
];
const topTenants = {
  state: () => ({
    data: [],
    current: {
      id: null,
      label: '',
    },
  }),
  mutations: {
    setTopTenantsData(state, topTenantsData) {
      state.data = topTenantsData;
    },
    setCurrentTopTenant(state, currentTopTen) {
      state.current = currentTopTen;
    },
  },
  actions: {
    fetchTopTenants({ commit }) {
      commit('setTopTenantsData', topTenantsMock);
    },
  },
};

const analysis = {
  modules: {
    vacancy: vacancySeries,
    usages: usagesSeries,
    grossYield: grossYieldSeries,
    topTenants,
  },
};

export default new Vuex.Store({
  modules: {
    valuationDate,
    keyfigures,
    assets,
    clients,
    usageGroups,
    usageTypes,
    analysis,
  },
  plugins: [
    // dateSyncPlugin,
  ],
});
