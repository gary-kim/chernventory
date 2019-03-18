# Chernventory

Chernventory is an inventory system mainly for use by the SAS MATE Robotics team but can be adapted to be used in other senarios.

## Features

Chernventory provides an interface where anyone logged in can request for parts then admins can approve requests. The software will keep track of which team currently posseses which part and the entire history of each part.

## Installing

Chernventory is still in development and is not yet usable.
### Download Chernventory
```
# Clone the repository
git clone https://github.com/gary-kim/chernventory.git chernventory
cd chernventory

# Install dependencies
npm install

# Edit config file
vim config/config.js
```

### Build for deployment
```
# Compile and run chernventory (This will reload code when edits are made)
npm run dev
```

### Build to test
```
# Compile and run chernventory
npm start
```

### Build for deployment
```
# Build chernventory
npm run build

# Run chernventory
node ./build/main.js
```

## Contributing

See the `CONTRIBUTING.md` file.

## License

Copyright &copy; 2019 Gary Kim <<gary@ydgkim.com>>

The source code is licensed under AGPL-3.0
