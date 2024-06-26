export const customAlert = {
  'KOL-ALERT': `
		:host {
			font-family: var(--font-family);
			height:100%;
		}

		.msg,
		.msg {
			border-width: 0;
		}

		kol-alert-wc {
			border-width: 2px;
			border-style: solid;
			border-radius: 5px;
			display: flex;
			width: 100%;
			overflow: unset;
			border-color: transparent;
			background-color: white;
			height:100%;
		}

		kol-alert-wc > .heading {
			display: flex;
			gap: 0.5em;
			place-items: center;
      height:100%;
			& > kol-icon.heading-icon {
			  height:100%;
			}

			& > div {
			display: flex;
			}
		}

		kol-alert-wc > .heading kol-heading-wc {
      & strong {
        font-size:var(--font-size-h2);
        line-height:var(--line-height-h2);
      }
      & h1 {
          font-weight:400;
          color:var(--color-red);
          white-space: nowrap;
       }
		}

		kol-alert-wc > .heading > div {
			display: grid;
			gap: var(--kolibri-spacing);
		}

		.msg {
			background-color: transparent;
		}

		.msg > .heading {
			place-items: center;
		}

		.msg > .heading > kol-icon {
			place-self: baseline;
		}

		kol-alert-wc > .heading > div {
			display: grid;
			gap: var(--spacing);
		}

		kol-alert-wc > .heading > kol-button-wc.close {
			place-self: center;
		}

		.msg {
			align-items: start;
		}

		.default {
			border-color: var(--color-grey);
		}

		.default.msg .heading-icon {
			color: var(--color-grey);
		}

		.error {
			border-color: var(--color-red);
		}

		.error.msg .heading-icon {
			color: var(--color-red);
		}

		.info {
			border-color: var(--color-midnight);
		}

		.info.msg .heading-icon {
			color: var(--color-midnight);
		}

		.success {
			border-color: var(--color-green);
		}

		.success.msg .heading-icon {
			color: var(--color-green);
		}

		.warning {
			border-color: var(--color-orange);
		}

		.warning.msg .heading-icon {
			color: var(--color-orange);
		}

		.heading-icon {
			color: white;
		}

		kol-alert-wc .heading .heading-icon {
			padding: 0;
		}

		.msg > .heading > .heading-icon {
			padding-top: 0;
			place-items: baseline;
		}

		.msg > .heading > .heading-icon::part(icon) {
			line-height: 1.375rem;
		}

		.msg > .heading > div > kol-heading-wc {
			line-height: 20px;
			padding-top: 0.125rem;
		}

		.msg.default .heading > div > kol-heading-wc {
			color: var(--color-grey);
		}

		.msg.error .heading > div > kol-heading-wc {
			color: var(--color-red);
		}

		.msg.info .heading > div > kol-heading-wc {
			color: var(--color-midnight);
		}

		.msg.success .heading > div > kol-heading-wc {
			color: var(--color-green);
		}

		.msg.warning .heading > div > kol-heading-wc {
			color: var(--color-orange);
		}

		 /*.msg > .heading > div {display: grid;grid-template-columns: 1fr auto;}.msg > .heading > div > .content {grid-row: 2;grid-column: 1;}.msg > div > .close {display: flex;}*/
		.msg.default .close .icon {
			color: var(--color-grey);
		}

		.msg.error .close .icon {
			color: var(--color-red);
		}

		.msg.info .close .icon {
			color: var(--color-midnight);
		}

		.msg.success .close .icon {
			color: var(--color-green);
		}

		.msg.warning .close .icon {
			color: var(--color-orange);
		}

		.card {
			border-width: 2px;
			border-style: solid;
			filter: drop-shadow(0px 2px 4px rgba(8, 35, 48, 0.24));
			flex-direction: column;
			border-radius:0;
		}

		.card > .heading {
			padding: 0.5rem 1rem;
		}

		.card.hasCloser > .heading {
			padding-top: 0;
			padding-bottom: 0;
			padding-right: 0;
		}

		.card > .heading > div {
			width: 100%;
			min-height: 1.25rem;
		}

		.card > .heading .heading-icon {
			justify-self: right;
			margin-top: -4px;
		}

		.card > .heading kol-heading-wc {
			width: 100%;
			color: white;
			display: flex;
			font-size: 1.25rem;
			line-height: 1.25rem;
		}

		.card > .heading kol-heading-wc > * {
			margin: auto 0;
		}

		.card > .heading kol-button-wc button:focus {
			outline-color: var(--color-white);
			outline-offset: -3px;
			outline-style: solid;
			outline-width: 3px;
			transition: outline 0.1s linear;
		}

		.card > .heading kol-button-wc button:hover {
			background-color: rgba(32, 32, 32, 0.2);
		}

		.card > .heading kol-button-wc button:active {
			background-color: rgba(32, 32, 32, 0.4);
		}

		.card > .heading kol-button-wc button:hover:focus {
			background-color: rgba(32, 32, 32, 0.1);
		}

		.card > .content {
			padding: 1rem;
			max-height: 9.5rem;
			overflow-y: auto;
		}

		.card.default > .heading {
			background-color: var(--color-grey);
			border-bottom: 2px solid var(--color-grey);
		}

		.card.error > .heading {
			background-color: var(--color-red);
			border-bottom: 2px solid var(--color-red);
		}

		.card.info > .heading {
			background-color: var(--color-midnight);
			border-bottom: 2px solid var(--color-midnight);
		}

		.card.success > .heading {
			background-color: var(--color-green);
			border-bottom: 2px solid var(--color-green);
		}

		.card.warning > .heading {
			background-color: var(--color-orange);
			border-bottom: 2px solid var(--color-orange);
		}

		:is(.error, .info, .success, .warning) .heading-icon {
			font-size: 1.25rem !important;
		}

		.error .heading-icon::part(icon)::before {
			content: '\\f057';
		}

    :is(.error, .info, .success, .warning) .heading-icon::part(icon) {
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      display:flex;
      align-items:center;
    }

		.info .heading-icon::part(icon)::before {
			content: 'info';
		}

		.success .heading-icon::part(icon)::before {
			content: '\\f058';
		}

		.warning .heading-icon::part(icon)::before {
			content: 'warning';
		}

		.card > div > .content {
			grid-row: 2;
			grid-column: 1 / span 2;
		}

		.card.default .close {
			background-color: var(--color-grey);
		}

		.card.error .close {
			background-color: var(--color-red);
		}

		.card.info .close {
			background-color: var(--color-midnight);
		}

		.card.success .close {
			background-color: var(--color-green);
		}

		.card.warning .close {
			background-color: var(--color-orange);
		}

		.close > button {
			min-width: 44px;
			color: var(--color-white);
			min-height: 44px;
			display: grid;
			gap: 0.25em;
			line-height: 1.5rem;
			font-family: var(--font-family);
			font-weight: 700;
			cursor: pointer;
			border-radius: 1.5em;
			border-style: solid;
			border-width: 2px;
			font-size: 1rem;
			align-items: center;
			padding: 8px 14px;
			justify-content: center;
			font-style: normal;
			text-align: center;
			width: inherit;
			transition-duration: 0.5s;
			transition-property: background-color, color, border-color;
			background-color: rgba(0, 0, 0, 0);
			border-color: rgba(0, 0, 0, 0);
		}

		.close > button {
			padding: 8px;
		}

		.close > button kol-icon {
			display: flex;
			justify-content:center;
			align-items:center;
			width: 1.2rem;
			height: 1.2rem;
			font-size: 1.2rem;
		}

		.close > button kol-icon::part(icon) {
			font-family: "Font Awesome 6 Free";
			font-weight: 900;
		}

		.close > button kol-icon::part(icon)::before {
			content: '\\f00d';
		}

		.close > button:active {
			box-shadow: none;
			outline: none;
		}
	`
};

export const customToaster = {
  'KOL-TOAST-CONTAINER': `

    :host {
    top: 1rem;
    right: 1rem;
    width: 440px;
    max-width: 100%;
    }

    :host kol-alert {
        font-weight:300;
    }

    .toast {
      margin-top: 1rem;
    }
`
};
