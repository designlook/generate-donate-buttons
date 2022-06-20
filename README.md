# generate-donate-buttons

This was just an evening exercise to write button generator with plain javascript and no dependencies. I know it's easy to do with just plain HTML but wanted to try and make it customizable. Decided not to use ReactJS or VueJS and just plain javascript to make it more universal. It will automatically generate icons if link contains 'coinbase', 'paypal', 'venmo', 'patreon', 'stripe', or 'buymeacoffee'.

## Install package

```bash
npm install generate-donate-buttons
```

## How To Use

```javascript
import { generateDonateButtons } from "generate-donate-buttons";
```

To render the buttons, you can specify an existing DIV element on the page or you can add a new DIV with any ID you want to use. Example would be 

```javascript
<div id='donateButtons'></div>
```
Then to render a set of donation buttons, you need the following javascript code:


###### Dropdown example ######

```javascript
 generateDonateButtons({
    payments: [
      {
        url: 'https://paypal.me/designlook'
      },
      {
        url: 'https://account.venmo.com/u/designlook'
      },
      {
        text: "crypto",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5A21.5 21.5 0 1 1 39.21 8.81L32 16.05A11.25 11.25 0 1 0 32 32h0l7.24 7.24A21.43 21.43 0 0 1 24 45.5Z"/></svg>',
        url: 'https://commerce.coinbase.com/checkout/0534ae26-a703-4c27-9622-835fdf76f189'
      },
    ],
    // REQUIRED - an existing DIV element with an ID on your page
    // Example: <div id='donateButtons'></div>
    targetDiv: document.getElementById("donateButtons"), 

    // DROPDOWN MENU - OPTIONAL //
    menuType: 'dropdown', // options are 'dropdown' or leave blank for buttons
    menuText: 'Donate', // the text to display in the menu
    menuWidth: '100px', // the width of the menu
    menuClass: 'btn btn-sm btn-info', // the class to apply to the menu button
    menuStyle: '', // the style to apply to the menu button
    // UI SETTINGS - OPTIONAL //
    hideName: false,
    hideIcon: false,
    iconColor: "black", // "white" or "#fff"
    textColor: "black", // "white" or "#fff"
    orientation: "vertical",  // horizontal or vertical (for vertical you need to make sure the target div element has narrow width like 200px or 300px)
    btnWrapperStyle: "font-size:.9rem;", // inline css styles
    btnStyle: "border: 1px solid #ccc;",
    btnClass: "", // "btn-sm" or "btn-primary"
    buttonWidth: '200px'
  })
})
```

###### Horizontal Example ######

```
generateDonateButtons({
    payments: [
      {
        url: 'https://paypal.me/designlook'
      },
      {
        url: 'https://account.venmo.com/u/designlook'
      },
      {
        text: "crypto",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5A21.5 21.5 0 1 1 39.21 8.81L32 16.05A11.25 11.25 0 1 0 32 32h0l7.24 7.24A21.43 21.43 0 0 1 24 45.5Z"/></svg>',
        url: 'https://commerce.coinbase.com/checkout/0534ae26-a703-4c27-9622-835fdf76f189'
      },
    ],
    // REQUIRED - an existing DIV element with an ID on your page
    // Example: <div id='donateButtons'></div>
    targetDiv: document.getElementById("donateButtons"), 
    orientation: "horizontal",  // horizontal or vertical (for vertical you need to make sure the target div element has narrow width like 200px or 300px)
  })
})
```

###### JSFIDDLE Example (plain javascript and not use NPM) ######

JSFIDDLE Example if you dont want to use package and just want plain javascript functions
https://jsfiddle.net/scottyu/frwbeu4a/14/

## Useful Links

- Icons https://icon-sets.iconify.design/
- Heart Icon: https://github.com/artcoholic/akar-icons
- Down Arrow: https://github.com/atisawd/boxicons
- Paypal Icon: https://github.com/krystonschwarze/coolicons
- Stripe Icon: https://github.com/coreui/coreui-icons
- Github Icon: https://github.com/ant-design/ant-design-icons
- Venmo Icon: https://github.com/atisawd/boxicons
- Patreon Icon: https://github.com/michaelampr/jam

## Running NPM package locally

The following was helpful to me in developing this NPM package. Running verdaccio allows you to import a local npm package and use it within JS app locally.

https://verdaccio.org/docs/installation/

1. Create .npmrc file on npm project root content should be 'registry=http://localhost:4873'
2. Create .npmrc file on app project you want to test your new npm package and content should be 'registry=http://localhost:4873'
3. npm unpublish generate-donate-buttons@1.0.0
4. npm publish --registry http://localhost:4873

The unpublish is useful so you don't have to keep changing the version # in the package.json. You can stick with the same version and publish it.
