## Treehouse Code Adventures: A Settings Panel

A settings panel that allows users to manage various account preferences including synchronization, online visibility, privacy controls, and the option to delete their account.

---

#### Mockup Text

```text
Manage your account settings

Sync Preferences
Enable this feature to harmonize your settings and preferences seamlessly across all your linked accounts. Never worry about configuring each one separately again.

Online Visibility
Control whether your online status is visible to others. Toggle this setting to maintain your privacy or let friends and colleagues know when you're available.

Privacy Controls
Customize your privacy preferences to strike the right balance between sharing and safeguarding your personal information.

Delete Account
Choose to permanently remove your account from our platform. This option allows you to leave our service if you no longer wish to use it.
```

#### Font Family: [Inter](https://fonts.google.com/specimen/Inter)

#### Color Palette

| Element                  | Hex Color |
|--------------------------| :-------: |
| Body Background          | `#BB8EA6` |
| Panel Background         | `#FFFFFF` |
| Main Header Text         | `#A06484` |
| Settings Text            | `#BB8EA6` |
| Toggle On Background     | `#CB87AB` |
| Toggle Off Background    | `#E3EAEE` |
| Delete Button Background | `#FF9292` |

#### How to Succeed

1. Use CSS Flexbox or Grid to layout the elements on the page.

2. Use JavaScript to add event listeners to the toggle switches and delete button.

3. Use localStorage to save and load the state of the toggle switches.

4. If "delete" is clicked, clear localStorage and set all toggle switches to the off position.


Extra Challenges:

1. Add another setting to toggle a dark mode and create the styles to go with it.

2. If "delete" is clicked, have the user double down and confirm they truly want to delete their account. This could be a modal popup or it could be an input field that requires them to type in delete to confirm. Then a success message pops up and the settings menu is cleared. 

3. Have a 'create an account' view show in the menu if account was deleted.# Settings-Panel
