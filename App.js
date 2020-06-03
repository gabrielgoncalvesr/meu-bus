import React from 'react';
import { YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
]);

console.ignoredYellowBox = ['Remote debugger'];

const App = () => {
	return (
		<Routes />
	);
}

export default App;