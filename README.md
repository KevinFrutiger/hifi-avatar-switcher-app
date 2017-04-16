# Avatar Switcher App

This is an app that runs in [High Fidelity's](https://highfidelity.com/) in-world tablet and allows you to quickly switch between your various avatars.

Inspired by [Tutorial: Create an Avatar Switching Tablet App](https://wiki.highfidelity.com/wiki/Tutorial:_Create_an_Avatar_Switching_Tablet_App).

## Installation
This app requires [High Fidelity](https://highfidelity.com/download) and a rudementary understanding of HTML and JavaScript to set up and run.

1. Clone the repository or download the zip file (**Clone or download**).
2. Replace the URLs and labels in `src/json/avatar-urls.json`.
    ```
    [{
        "label": "Default Avatar",
        "url": "",
        "thumbnail": "../images/avatar-default-thumb.jpg"
      },
      {
        "label": "Standard Avatar",
        "url": "http://www.frutigergroup.com/high_fidelity/avatar/standard_v2_pkg/standard_v2.fst",
        "thumbnail": "../images/avatar-standard-thumb.jpg"
      }
    ]
    ```
    * Image thumbnails are 220px x 220px.
    * If you'd pefer not to have a thumbnail, set that value to an empty string.

4. Run `avatarSwitcherApp.js` in High Fidelity via *Edit > Open and Run Script File*.

If you want to modify the look and feel of the app, you can load `app-view.html` in a standard browser for review (the in-world tablet is 480px x 706px\*). Clicking the buttons simply won't do anything other than output messages to the brower's console.

\* Contrary to HiFi's tutorials that state it's 720px.

## Usage
You will see a new button labeled "AVATAR" in your tablet. Activating this will load the app in the tablet, and you will see the list of buttons for all your avatars. Activating one will update your avatar. Note that this app doesn't update the Appearance in your Avatar settings. When you relaunch Interface you'll revert to your original avatar.


Avatar resources and images © 2017 Kevin Frutiger