"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDonateButtons = generateDonateButtons;

function generateDonateButtons(options) {
  var content = '';
  var icon;
  var name;
  var iconPack = {
    coinbase: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 45.5A21.5 21.5 0 1 1 39.21 8.81L32 16.05A11.25 11.25 0 1 0 32 32h0l7.24 7.24A21.43 21.43 0 0 1 24 45.5Z"/></svg>',
    paypal: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M19.554 9.488c.121.563.106 1.246-.04 2.051c-.582 2.978-2.477 4.466-5.683 4.466h-.442a.666.666 0 0 0-.444.166a.72.72 0 0 0-.239.427l-.041.189l-.553 3.479l-.021.151a.706.706 0 0 1-.247.426a.666.666 0 0 1-.447.166H8.874a.395.395 0 0 1-.331-.15a.457.457 0 0 1-.09-.363c.061-.373.148-.938.267-1.689c.117-.75.206-1.314.267-1.689s.15-.938.272-1.685c.121-.748.212-1.31.271-1.685c.033-.248.179-.371.433-.371h1.316c.893.013 1.682-.057 2.375-.211c1.172-.262 2.134-.744 2.886-1.449c.685-.637 1.203-1.462 1.56-2.473c.162-.47.277-.917.352-1.338c.006-.041.014-.066.025-.074c.008-.011.022-.014.035-.011a.378.378 0 0 1 .062.035c.524.398.854.941.98 1.632zm-1.728-2.836c0 .717-.154 1.508-.465 2.374c-.537 1.562-1.547 2.618-3.037 3.168c-.758.269-1.602.408-2.535.425c0 .006-.301.007-.904.007l-.903-.007c-.672 0-1.067.32-1.187.964c-.013.053-.298 1.83-.855 5.329c-.008.066-.048.102-.121.102H4.854a.473.473 0 0 1-.369-.165a.469.469 0 0 1-.115-.39L6.702 3.664a.784.784 0 0 1 .276-.483a.785.785 0 0 1 .519-.19h6.014c.228 0 .555.044.979.131c.428.084.801.194 1.123.321c.718.274 1.266.688 1.645 1.237c.379.552.568 1.207.568 1.972z"/></svg>',
    venmo: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 512 512"><path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89V441.6c0 20.31 17.85 38.4 38.28 38.4h373.78c20.54 0 35.94-18.2 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32ZM278 387H174.32l-41.57-248.56l90.75-8.62l22 176.87c20.53-33.45 45.88-86 45.88-121.87c0-19.62-3.36-33-8.61-44l82.63-16.72c9.56 15.78 13.86 32 13.86 52.57c-.01 65.5-55.92 150.59-101.26 210.33Z"/></svg>',
    patreon: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="-2 -2 24 24"><g fill="currentColor"><path d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10s-4.477 10-10 10z"/><path d="M11.464 5.206c-1.976 0-3.583 1.598-3.583 3.563c0 1.958 1.607 3.551 3.583 3.551c1.969 0 3.57-1.593 3.57-3.551a3.57 3.57 0 0 0-3.57-3.563m-6.38 9.49v-9.49h1.752v9.49z"/></g></svg>',
    github: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path fill="currentColor" d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5C64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9c26.4 39.1 77.9 32.5 104 26c5.7-23.5 17.9-44.5 34.7-60.8c-140.6-25.2-199.2-111-199.2-213c0-49.5 16.3-95 48.3-131.7c-20.4-60.5 1.9-112.3 4.9-120c58.1-5.2 118.5 41.6 123.2 45.3c33-8.9 70.7-13.6 112.9-13.6c42.4 0 80.2 4.9 113.5 13.9c11.3-8.6 67.3-48.8 121.3-43.9c2.9 7.7 24.7 58.3 5.5 118c32.4 36.8 48.9 82.7 48.9 132.3c0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9c177.1-59.7 304.6-227 304.6-424.1c0-247.2-200.4-447.3-447.5-447.3z"/></svg>',
    stripe: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M27.355 14.044c-.494 0-1.039.372-1.039 1.261h2.039c0-.889-.516-1.261-1-1.261zm-6.522.145c-.456 0-.739.161-.944.389l.011 2.933c.194.206.472.372.933.372c.728 0 1.217-.794 1.217-1.855c0-1.033-.5-1.844-1.217-1.839zm8.5-10.633H2.666A2.668 2.668 0 0 0-.001 6.223v19.556a2.668 2.668 0 0 0 2.667 2.667h26.667A2.668 2.668 0 0 0 32 25.779V6.223a2.668 2.668 0 0 0-2.667-2.667zM6.789 17.395c0 1.422-1.128 2.228-2.772 2.239a5.457 5.457 0 0 1-2.156-.45V17.3c.667.356 1.506.628 2.161.628c.439 0 .756-.116.756-.483c0-.944-3-.589-3-2.772c0-1.4 1.067-2.234 2.667-2.234c.656 0 1.306.1 1.961.361v1.856a4.44 4.44 0 0 0-1.961-.506c-.417 0-.672.122-.672.428c0 .889 3.017.467 3.017 2.817zm3.822-3.145h-1.5v2.806c0 1.161 1.25.8 1.5.7v1.605c-.261.145-.739.261-1.383.261c-1.172 0-2.05-.861-2.05-2.028l.011-6.328l1.928-.411v1.711h1.494zm4.111.133c-.25-.083-1.039-.2-1.506.411v4.689h-1.972v-6.917h1.706l.122.583c.461-.85 1.383-.678 1.644-.583h.006zm2.45 5.1h-1.984v-6.917h1.984zm0-7.939l-1.984.422v-1.605l1.984-.422zm4.117 8.084c-.689 0-1.111-.294-1.394-.5l-.006 2.233l-1.972.417v-9.211h1.739l.1.489c.272-.25.772-.617 1.544-.617c1.384 0 2.689 1.25 2.689 3.545c0 2.506-1.289 3.639-2.7 3.645zm8.911-2.861h-3.861c.089.922.766 1.194 1.533 1.194c.783 0 1.4-.167 1.939-.439v1.589c-.539.294-1.245.511-2.189.511c-1.922 0-3.267-1.206-3.267-3.583c0-2.011 1.139-3.605 3.017-3.605c1.872 0 2.85 1.594 2.85 3.616c0 .194-.017.606-.022.717z"/></svg>',
    buymeacoffee: '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M7 22h10a1 1 0 0 0 .99-.858L19.867 8H21V6h-1.382l-1.724-3.447A.998.998 0 0 0 17 2H7c-.379 0-.725.214-.895.553L4.382 6H3v2h1.133L6.01 21.142A1 1 0 0 0 7 22zm10.418-11H6.582l-.429-3h11.693l-.428 3zm-9.551 9l-.429-3h9.123l-.429 3H7.867zM7.618 4h8.764l1 2H6.618l1-2z"/></svg>'
  };
  var loveIcon = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95C22 5.216 19.761 3 17 3s-5 3-5 3s-2.239-3-5-3Z"/></svg>';
  var downArrow = '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m11.998 17l7-8h-14z"/></svg>';

  if (options.payments) {
    options.payments.forEach(function (payment) {
      if (!payment.url) return;
      var verticalMenu = options.orientation === 'vertical' || options.menuType === 'dropdown';
      var orientationCss = verticalMenu ? 'margin:0;padding:0;float:none;display:flex;flex-direction:column;align-self:stretch' : '';
      var iconColor = options.iconColor ? "color: ".concat(options.iconColor, ";") : 'color: #333';
      var textColor = options.textColor ? "color: ".concat(options.textColor, ";") : 'color: #333';
      var justifyContent = 'start';
      var btnStyle = "float:none;margin:0;padding:0;align-items: center;border:1px solid #ccc; padding: 4px 10px;display:flex;align-content: center; justify-content: ".concat(justifyContent, ";").concat(iconColor, ";").concat(options.btnStyle);
      var iconMatch = Object.keys(iconPack).find(function (key) {
        return payment.url.includes(key);
      });
      var icon = iconMatch && !options.hideIcon ? iconPack[iconMatch] || (payment === null || payment === void 0 ? void 0 : payment.icon) : '';
      var paymentName = options.hideName ? '' : "<span style='margin:0;padding:0;".concat(textColor, "'>").concat(payment.text || payment.name || iconMatch, "</span>");
      content += "<a target=_blank style='gap:1rem;".concat(btnStyle, "' class='").concat(options.btnClass, "' href=\"").concat(payment.url, "\">").concat(icon, " ").concat(paymentName, "</a>");
    });
    var donateContainer = document.createElement('div');
    donateContainer.style.position = 'relative';
    donateContainer.style.zIndex = 999;
    donateContainer.style.width = '100%';
    donateContainer.style.width = options.buttonWidth;
    options.targetDiv.appendChild(donateContainer);

    if (options.menuType === 'dropdown') {
      var menu = document.createElement('a');
      menu.classList = options.menuClass;
      menu.style = options.menuStyle;
      menu.innerHTML = "<div style='width: ".concat(options.menuWidth, ";cursor: pointer;'><div style='display:flex;align-items:center;gap:4px;padding:0px 10px'>").concat(loveIcon, " ").concat(options.menuText, " ").concat(downArrow, "</div></div>");

      menu.onclick = function () {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
      };

      donateContainer.appendChild(menu);
      var dropdown = document.createElement('div');
      dropdown.style.display = 'none';
      dropdown.style.width = menu.offsetWidth + 'px';
      dropdown.style.position = 'absolute';
      dropdown.style.top = menu.offsetHeight + 'px';
      dropdown.style.left = '0px';
      dropdown.style.zIndex = '5';
      dropdown.style.backgroundColor = '#fff';
      dropdown.style.boxShadow = '0px 0px 10px rgba(0,0,0,0.2)';
      dropdown.innerHTML = content;
      donateContainer.appendChild(dropdown);
      document.addEventListener("click", function (event) {
        var isClickInsideElement = menu.contains(event.target);

        if (!isClickInsideElement) {
          dropdown.style.display = 'none';
        }
      });
    } else {
      var iconColor = options.iconColor ? "color: ".concat(options.iconColor, ";") : 'color: #333';
      var textColor = options.textColor ? "color: ".concat(options.textColor, ";") : 'color: #333';
      var verticalMenu = options.orientation === 'vertical' || options.menuType === 'dropdown';
      var orientationCss = verticalMenu ? 'margin:0;padding:0;float:none;display:flex;flex-direction:column;align-self:stretch' : 'display:flex;flex-direction:row;gap:5px';
      var div_start = "<div style='margin:0;padding:0;".concat(orientationCss, ";").concat(iconColor, ";").concat(options.btnWrapperStyle, "' title='Donate' class=\"btn-group\" role=\"group\">");
      var div_end = '</div>';
      donateContainer.innerHTML = "".concat(div_start).concat(content).concat(div_end);
    }
  }
}