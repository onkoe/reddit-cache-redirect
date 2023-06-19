# reddit-cache-redirect

based on [this template](https://github.com/areknawo/ProductivityBooster). which is kinda out of date but oh well

## Development

ok i think i have this right (god this should be WASM. like now):

1. Install npm (`sudo dnf install npm`), yarn (`sudo npm install -g yarn@latest`), and parcel (`npm install -g parcel@latest`)
2. `yarn install` all those deps or something idk
3. `parcel build manifest.json --config @parcel/config-webextension`
4. Open up Firefox, go to [about:debugging](about:debugging#/runtime/this-firefox), and click `Load Temporary Add-on`

I'll definitely forget these, so let's hope they're right! :)
