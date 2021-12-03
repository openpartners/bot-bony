# bot-bony

1. download and install node.js
2. npm install puppeteer
3. start the bot, type the following command in the console: node index.js
4. to set the correct date and time for the application deadline:
	const datax = new Date('Jul 6, 2020 10:00:03 GMT+02:00');
5. to set the right domain:
	await page.goto('https://podhalanskiebony.pl/pages/loginForm.xhtml');
	or
	await page.goto('https://sadeckiebony.pl/pages/loginForm.xhtml');
6. to enter the Company login and password, enter the correct Tax ID and password 
7. for the Company login and password, we enter the correct Tax ID 
	await input.type("1234567890"); 
and password:
	await page.type('.ui-password', 'PASSWORD123', {delay: 100});
8. if we want to disable the graphical mode to not display the Chromium browser, we change the value of false to true in the line:
	headless:false,

Note: The bot should be launched at least 5 minutes before dataX