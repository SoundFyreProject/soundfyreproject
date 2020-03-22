import {
	MDCCheckbox,
	MDCChipSet,
	MDCDialog,
	MDCDrawer,
	MDCFormField,
	MDCIconButtonToggle,
	MDCLinearProgress,
	MDCList,
	MDCMenu,
	MDCRadio,
	MDCRipple,
	MDCSelect,
	MDCSlider,
	MDCSnackbar,
	MDCSwitch,
	MDCTabBar,
	MDCTextField,
	MDCTextFieldHelperText,
	MDCTopAppBar,
	MDCDataTable
} from './components';

// Instantiation
const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);
const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});

const slider = new MDCSlider(document.querySelector('.mdc-slider'));
slider.listen('MDCSlider:change', () => console.log(`Value changed to ${slider.value}`));