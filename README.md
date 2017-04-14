# Avatar Switcher App

This is an app that runs in [High Fidelity's](https://highfidelity.com/) in-world tablet and allows you to quickly switch between your various avatars.

Inspired by [Tutorial: Create an Avatar Switching Tablet App](https://wiki.highfidelity.com/wiki/Tutorial:_Create_an_Avatar_Switching_Tablet_App).

## Installation
This app requires [High Fidelity](https://highfidelity.com/download) and a rudementary understanding of HTML and JavaScript to set up and run.

1. Clone the repository or download the zip file (**Clone or download**).
2. Replace the links in `src/AVATAR_URLS` found at the top of `src/avatarSwitcherApp.js` to point to your avatar FSTs.
```
var AVATAR_URLS = [
  '', // default avatar
  'http://www.frutigergroup.com/high_fidelity/avatar/standard_v2_pkg/' +
      'standard_v2.fst',
  'http://www.frutigergroup.com/high_fidelity/avatar/my-fourth-avatar-pkg/' +
      'my-fourth-avatar.fst'
];
```
3. Add/remove items from the `<ul>` in `src/views/app-view.html`, and update with thumbnails for your avatars.
    * The `value` for each button is the correlating index in `AVATAR_URLS`.
    * You should be able to use any size thumbnail that's 220px wide, or no thumbnail at all.
4. Place the files on a publicly-accessible Web server.
5. Run `avatarSwitcherApp.js` in High Fidelity via *Edit > Run file from URL...*.

If you want to modify the look and feel of the app, `app-view.html` will load in a standard browser for review (the in-world tablet is 480px x 706px\*). Clicking the buttons simply won't do anything other than output messages to the brower's console.

\* It's 706px tall, contrary to HiFi's tutorials that state it's 720px.

## Usage
You will see a new button labeled "AVATAR" in your tablet. Activating this will load the app in the tablet, and you will see the list of buttons for all your avatars. Activating one will update your avatar. Note that this app doesn't update the Appearance in your Avatar settings. When you relaunch Interface you'll revert to your original avatar.


Avatar resources and images © 2017 Kevin Frutiger