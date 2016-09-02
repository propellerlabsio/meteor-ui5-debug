# Meteor-UI5-Debug
This package is a helper for debugging UI5 apps with Meteor.  It contains a connect handler that responds to requests for "-dbg" files in the projects `public/webapp` folder and returns a 404 if not found.  This overrides Meteor's standard behaviour of returning the main html file for any file not found.  If UI5 is in debug mode and it requests a "-dbg" file, it will request the regular file on receiving the 404 response.

## Using this package
This package can be added to your meteor project with `meteor add propellerlabsio:meteor-ui5-debug`.

Please see the [Meteor Ui5 website](http://meteor-ui5.propellerlabs.com) for documentation and demos of all of the features of the Meteor-UI5 packages. In particular, the following resources might be useful:
* [Quickstart guide](http://meteor-ui5.propellerlabs.com/#/docs/quickstart)
* [Tutorial](http://meteor-ui5.propellerlabs.com/#/tutorial/mongo/step/00)

## Roadmap

No current plans are in place to enhance this package further.


## Version history
| Version | Description |
| ---- | ------- |
| `0.0.1` | The initial version. |

## License
This software is licensed under the Apache License, Version 2.0 - see LICENSE.txt
