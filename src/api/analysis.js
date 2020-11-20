import axios from 'axios';

const reamisAnalysis = {
  /**
   *
   * @param date { Date }
   * @param asset
   * @param client
   * @param usageGroup
   * @param usageType
   * @returns {Promise<any>}
   */
  fetchTopTenTenants({
    // eslint-disable-next-line max-len
    date, asset, client, usageGroup, usageType, usage, usageItem, grossYieldClient, vacancyUsageItem, vacancyUsage,
  }) {
    return new Promise((resolve, reject) => {
      axios.get('/server.php', {
        params: {
          module: 'IO_NovaDashboard',
          action: 'getTopTenants',
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          asset,
          client,
          usageGroup,
          usageType,
          usage,
          usageItem,
          grossYieldClient,
          vacancyUsageItem,
          vacancyUsage,
        },
      }).then((res) => {
        resolve(res.data.data);
      })
        .catch((error) => {
          reject(error);
        });
    });
  },
  fetchGrossYieldSeries({
    // eslint-disable-next-line max-len
    date, asset, client, usageGroup, usageType, tenant, usage, usageItem, vacancyUsageItem, vacancyUsage,
  }) {
    return new Promise((resolve, reject) => {
      axios.get('/server.php', {
        params: {
          module: 'IO_NovaDashboard',
          action: 'getGrossYieldSeries',
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          asset,
          client,
          usageGroup,
          usageType,
          tenant,
          usage,
          usageItem,
          vacancyUsageItem,
          vacancyUsage,
        },
      }).then((res) => {
        let grossYieldData = [];
        if (res.data.data) {
          grossYieldData = res.data.data.map((dataItem) => {
            const series = dataItem.series.map((seriesItem) => ({
              date: new Date(seriesItem.year, seriesItem.month - 1),
              value: seriesItem.value,
            }));
            return {
              category: dataItem.category,
              series,
            };
          });
        }
        resolve(grossYieldData);
      })
        .catch((error) => {
          reject(error);
        });
    });
  },
  fetchUsage({
    // eslint-disable-next-line max-len
    date, asset, client, usageGroup, usageType, usage, typeOfUnit, tenant, grossYieldClient, vacancyUsageItem, vacancyUsage,
  }) {
    return new Promise((resolve, reject) => {
      axios.get('/server.php', {
        params: {
          module: 'IO_NovaDashboard',
          action: 'getUsage',
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          asset,
          client,
          usageGroup,
          usageType,
          usage,
          typeOfUnit,
          tenant,
          grossYieldClient,
          vacancyUsageItem,
          vacancyUsage,
        },
      }).then((res) => {
        resolve(res.data.data);
      })
        .catch((error) => {
          reject(error);
        });
    });
  },
  fetchVacancySeries({
    // eslint-disable-next-line max-len
    date, asset, client, usageGroup, usageType, usage, usageItem, tenant, vacancyUsage, grossYieldClient,
  }) {
    return new Promise((resolve, reject) => {
      axios.get('/server.php', {
        params: {
          module: 'IO_NovaDashboard',
          action: 'getVacancySeries',
          month: date.getMonth() + 1,
          year: date.getFullYear(),
          asset,
          client,
          usageGroup,
          usageType,
          tenant,
          usage,
          usageItem,
          vacancyUsage,
          grossYieldClient,
        },
      }).then((res) => {
        let vacancyData = [];
        if (res.data.data) {
          vacancyData = res.data.data.map((dataItem) => {
            const series = dataItem.series.map((seriesItem) => ({
              date: new Date(seriesItem.year, seriesItem.month - 1),
              value: seriesItem.value,
            }));
            return {
              category: dataItem.category,
              series,
            };
          });
        }
        resolve(vacancyData);
      })
        .catch((error) => {
          reject(error);
        });
    });
  },
};

export default reamisAnalysis;
