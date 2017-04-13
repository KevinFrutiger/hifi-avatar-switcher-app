/**
 * My Avatar app
 * Interface script
 *
 * To use, load in Interface via Run Script...
 */

// Reminders:
// -- This Interface script, like all Interface scripts, runs in its own thread.
// -- If using a wrapper function for some reason, it has to self-execute.

var APP_NAME = 'MY AVATAR'; // Button label
var APP_VIEW_URL = Script.resolvePath('views/app-view.html?cb9');
var APP_ICON_URL = Script.resolvePath('images/avatar-switcher.svg');
var AVATAR_URLS = [
  '', // default avatar
  'http://www.frutigergroup.com/high_fidelity/avatar/standard_v2_pkg/' +
      'standard_v2.fst',
  'http://www.frutigergroup.com/high_fidelity/avatar/my-fourth-avatar-pkg/' +
      'my-fourth-avatar.fst'
];

// Get a reference to the tablet.
var tablet = Tablet.getTablet('com.highfidelity.interface.tablet.system');

// Add the button the tablet home screen.
var button = tablet.addButton({text: APP_NAME, icon: APP_ICON_URL});

// Set up button interaction.
button.clicked.connect(buttonClickedHandler);

function buttonClickedHandler() {
  // Load the app UI in the tablet
  tablet.gotoWebScreen(APP_VIEW_URL);
}

// Handle messages from the app UI.
tablet.webEventReceived.connect(webEventReceivedHandler);

function webEventReceivedHandler(eventMessage) {
  var event;

  try {
    event = JSON.parse(eventMessage);
  } catch(error) {
    print('Web Event message is not a valid JSON string. ' +
          'Not going to process. Error: ' + error);
    return;
  }

  // Replace the avatar.
  print(event);
  if (event && event.type === 'click' && event.data in AVATAR_URLS) {
    MyAvatar.skeletonModelURL = AVATAR_URLS[event.data];
  }
}


/* Cleanup, if script unloaded. */

Script.scriptEnding.connect(cleanup);

function cleanup() {
  button.clicked.disconnect(buttonClickedHandler);
  tablet.removeButton(button);
}
