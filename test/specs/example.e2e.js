describe('My Vue.js Example Application', () => {
	it('should login with valid credentials', () => {
		browser.url(`#/login`);

		const username = 'testjssummit@gmail.com';
		const password = 'password';

		$('input[type="email"]').setValue(username);
		$('input[type="password"]').setValue(password);
		$('button[type="submit"]').click();

		expect($('.home-page')).toBeExisting();
	});
});
