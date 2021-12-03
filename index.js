const puppeteer = require('puppeteer');
const start = Date.now();
console.log('Starting the stopwatch...');
// setTimeout(() => {

//async function main() {
(async () => {

  try {

		const browser = await puppeteer.launch({
			headless:false,
			defaultViewport: null //,
			//args: ["--no-sandbox"]
		});
		const page = await browser.newPage();

		//await page.goto('https://sadeckiebony.pl/pages/loginForm.xhtml');
		await page.goto('https://podhalanskiebony.pl/pages/loginForm.xhtml');
		await page.screenshot({path: 'step0.png'});

		await page.click('#accept-cookies-checkbox', {delay: 1000});
		await page.screenshot({path: 'step1.png'});
		console.log(`step 1`);
		
		const input = await page.$(`#j_idt17\\:j_username`);
		await input.press('Backspace');
		await input.type("1234567890");
		await page.screenshot({path: 'step2.png'});
		console.log(`step 2`);

		await page.type('.ui-password', 'PASSWORD123', {delay: 100});
		await page.screenshot({path: 'step3.png'});
		console.log(` step 3`);

		await page.click('.ui-button-text', {delay: 1000});
		await page.waitFor(10000);

		const loginError = await page.$('.ui-messages-error-summary')
		if (loginError) {	
		    const element = await page.$("#j_idt17\\:j_idt19 > div > ul > li > span");
		    const text = await page.evaluate(element => element.textContent, element);
			console.log(text); //Login failed? Forgot your password?
		};

		await page.screenshot({path: 'step4.png'});
		console.log(` step 4`);	

	  	await page.click('#j_idt47\\:j_idt48\\:j_idt49 > ul > li:nth-child(3) > a > span', {delay: 1000});
	  	await page.screenshot({path: 'step5.png'});
	  	console.log(` step 5`);
		await page.waitFor(5000);
		
	 	await page.click('#j_idt60\\:application_table\\:0\\:button_select', {delay: 1000});
		console.log(` step 6`);
		await page.waitFor(5000);
		await page.screenshot({path: 'step6.png'});

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 7`);
		await page.waitFor(999);
		await page.screenshot({path: 'step7.png'});	

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 8`);
		await page.waitFor(999);
		await page.screenshot({path: 'step8.png'});	

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 9`);
		await page.waitFor(999);
		await page.screenshot({path: 'step9.png'});

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 10`);
		await page.waitFor(999);
		await page.screenshot({path: 'step10.png'});	

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 11`);
		await page.waitFor(999);
		await page.screenshot({path: 'step11.png'});

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 12`);
		await page.waitFor(999);
		await page.screenshot({path: 'step12.png'});

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 13`);
		await page.waitFor(999);
		await page.screenshot({path: 'step13.png'});

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 14`);
		await page.waitFor(999);
		await page.screenshot({path: 'step14.png'});

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 15`);
		await page.waitFor(999);
		await page.screenshot({path: 'step15.png'});

	 	await page.click('#edit_panel\\:main_wizard_next', {delay: 1000});
		console.log(` step 16`);
		await page.waitFor(999);
		await page.screenshot({path: 'step16.png'});

	 	await page.click('#edit_panel\\:button_send', {delay: 1000});
		console.log(` step 16`);
		await page.waitFor(5000);
		await page.screenshot({path: 'step17.png'});	

		const datax = new Date('Jul 6, 2020 10:00:03 GMT+02:00');
		const now = new Date();
		const ruznica = datax - now;
		console.log("Do wciśnięcia TAK pozostało " + ruznica + " milisekund");
		await page.waitFor(ruznica);

	 	await page.click('#j_idt20', {delay: 1000});
		console.log(` step 17`);
		await page.waitFor(10000);
		
		console.log("Request sent for: " + now + ".");
		await page.screenshot({path: 'step18.png'});

		const sendError = await page.$('.ui-messages-error-summary');
		if (sendError) {	
		    const element = await page.$("#edit_panel\\:j_idt294 > div > ul > li > span");
		    const text = await page.evaluate(element => element.textContent, element);
			console.log(text); //Posting status
			//jeśli status "Niestety nie udało się wysłać wniosku.
			//Składanie wniosków rozpocznie się 06.07.2020 10:00:00. Złożenie wniosku jest niemożliwe."
			//to wracaj do linijki 109
		};
		await page.screenshot({path: 'step17.png'});
		await browser.close();

	    console.log(`Completed task for a company with TIN: 1234567890`);

const millis = Date.now() - start;
console.log(`Program working: ${Math.floor(millis / 1000)} sekund`);

	  } catch(err) {
	    console.log(err)
	  }

})();

