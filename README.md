Meteor accounts-tudelft
=======================

TU Delft OAuth login service for Meteor Accounts

## Installation

```
mrt add accounts-tudelft
```

## Usage

You can now login using TU Delft NetID by calling:

```javascript
Meteor.loginWithTudelft();
```

A TU Delft button will also be added to accounts-ui when using

```
{{> loginButtons}}
```

## API & Configuration

For using the TU Delft API and configuring the package, see https://github.com/rmachielse/meteor-tudelft
