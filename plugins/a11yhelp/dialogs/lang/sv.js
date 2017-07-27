/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'sv', {
	title: 'Hjälpmedelsinstruktioner',
	contents: 'Hjälpinnehåll. För att stänga denna dialogruta trycker du på ESC.',
	legend: [
		{
		name: 'Allmänt',
		items: [
			{
			name: 'Editor verktygsfält',
			legend: 'Tryck på ${toolbarFocus} för att navigera till verktygsfältet. Flytta till nästa och föregående verktygsfältsgrupp med TAB och SHIFT+TAB. Flytta till nästa och föregående knapp i verktygsfältet med HÖGERPIL eller VÄNSTERPIL. Tryck SPACE eller ENTER för att aktivera knappen i verktygsfältet.'
		},

			{
			name: 'Dialogeditor',
			legend:
				'Inuti en dialogruta, tryck TAB för att navigera till nästa fält i dialogrutan, tryck SKIFT+TAB för att flytta till föregående fält, tryck ENTER för att skicka. Du avbryter och stänger dialogen med ESC. För dialogrutor som har flera flikar, tryck ALT+F10 eller TAB för att navigera till fliklistan. med fliklistan vald flytta till nästa och föregående flik med HÖGER- eller VÄNSTERPIL.' 
		},

			{
			name: 'Editor för innehållsmeny',
			legend: 'Tryck på $ {contextMenu} eller PROGRAMTANGENTEN för att öppna snabbmenyn. Flytta sedan till nästa menyalternativ med TAB eller NEDPIL. Flytta till föregående alternativ med SHIFT + TABB eller UPPIL. Tryck Space eller ENTER för att välja menyalternativ. Öppna undermeny av nuvarande alternativ med SPACE eller ENTER eller HÖGERPIL. Gå tillbaka till överordnade menyalternativ med ESC eller VÄNSTERPIL. Stäng snabbmenyn med ESC.'
		},

			{
			name: 'Editor för list-box',
			legend: 'Inuti en list-box, gå till nästa listobjekt med TAB eller NEDPIL. Flytta till föregående listobjekt med SHIFT+TAB eller UPPIL. Tryck SPACE eller ENTER för att välja listan alternativet. Tryck ESC för att stänga list-boxen.'
		},

			{
			name: 'Editor för elementens sökväg',
			legend: 'Tryck på ${elementsPathFocus} för att navigera till verktygsfältet för elementens sökvägar. Flytta till nästa elementknapp med TAB eller HÖGERPIL. Flytta till föregående knapp med SKIFT+TAB eller VÄNSTERPIL. Tryck SPACE eller ENTER för att välja element i redigeraren.'
		}
		]
	}
	],
	tab: 'Tab',
	pause: 'Paus',
	capslock: 'Caps lock',
	escape: 'Escape',
	pageUp: 'Sida Up',
	pageDown: 'Sida Ned',
	leftArrow: 'Vänsterpil',
	upArrow: 'Uppil',
	rightArrow: 'Högerpil',
	downArrow: 'Nedåtpil',
	insert: 'Infoga',
	leftWindowKey: 'Vänster Windowstangent',
	rightWindowKey: 'Höger Windowstangent',
	selectKey: 'Välj tangent',
	numpad0: 'Nummer 0',
	numpad1: 'Nummer 1',
	numpad2: 'Nummer 2',
	numpad3: 'Nummer 3',
	numpad4: 'Nummer 4',
	numpad5: 'Nummer 5',
	numpad6: 'Nummer 6',
	numpad7: 'Nummer 7',
	numpad8: 'Nummer 8',
	numpad9: 'Nummer 9',
	multiply: 'Multiplicera',
	add: 'Addera',
	subtract: 'Minus',
	decimalPoint: 'Decimalpunkt',
	divide: 'Dividera',
	f1: 'F1',
	f2: 'F2',
	f3: 'F3',
	f4: 'F4',
	f5: 'F5',
	f6: 'F6',
	f7: 'F7',
	f8: 'F8',
	f9: 'F9',
	f10: 'F10',
	f11: 'F11',
	f12: 'F12',
	numLock: 'Num Lock',
	scrollLock: 'Scroll Lock',
	semiColon: 'Semikolon',
	equalSign: 'Lika med tecken',
	comma: 'Komma',
	dash: 'Minus',
	period: 'Punkt',
	forwardSlash: 'Snedstreck framåt',
	graveAccent: 'Accent',
	openBracket: 'Öppningsparentes',
	backSlash: 'Snedstreck bakåt',
	closeBracket: 'Slutparentes',
	singleQuote: 'Enkelt Citattecken',
	commandsList: {
		sectionName: 'Commands table', // MISSING
		command: 'Command', // MISSING
		keystroke: 'Keystroke' // MISSING
	},
	commandLabel: 'Accessibility Help' // MISSING
} );
