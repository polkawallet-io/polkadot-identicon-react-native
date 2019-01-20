# polkadot-identicon-react-native
This package is clone from @polkadot/ui-identicon.
Just for running in the React Native.
A generic identity icon that can render icons based on the theme, be it Substrate or Polkadot.

## Usage

To install the component, do `npm install ui-identicon-react-native`

Inside a React component, you can now render any account with the associated icon -

```javascript
import Identicon from 'ui-identicon-react-native';

...
render () {
  // address is an ss58-encoded address or publicKey (hex string or Uint8Array)
  const { address } = this.props;
  // size (optional) is a number, indicating the size (in pixels, 64 as default)
  const size = 32;
  // theme (optional), depicts the type of icon, either 'polkadot' or 'substrate' (default)
  const theme = 'polkadot';

  // standard className & style props are also available
  return (
    <Identicon
      value={address}
      size={size}
      theme={theme}
    />
  );
}
...
```

#TODO
Now the 'theme is polkadot' is done, but the substrate theme have some another issue need to do. 
