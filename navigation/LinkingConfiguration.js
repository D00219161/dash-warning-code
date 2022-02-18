import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    Root: {
      path: 'root',
      screens: {
        Index: 'home',
        Login: 'login',
        CreateAccount: 'createaccount',
        UserAccount: 'useraccount',
        Scan: 'scan',
        Scanning: 'scanning',
        Display: 'display',
        Service: 'service',
        OfflineFaults: 'offlinefaults',
        RedFaults: 'redfaults',
        AmberFaults: 'amberfaults',
        GreenBlueFaults: 'greenbluefaults',
        ElectricFaults: 'electricfaults',
        Forum: 'forum',
      },
    },
  },
};
