/** @format */

document.querySelector('button').addEventListener('click', calculateAge);

function calculateAge() {
	//collect input from html format and converts into date

	var userInput = document.querySelector('#DOB').value;
	var dob = new Date(userInput);
	var yearAge;
	var monthAge;
	var dateAge;

	//check user provide input or not

	if (userInput == null || userInput == '') {
		document.getElementById('message').innerHTML = '**Choose a date please';
		return false;
	} else {
		document.getElementById('message').style.display = 'none';
		// extract year and month and date

		var dobYear = dob.getYear();
		var dobMonth = dob.getMonth();
		var dobDate = dob.getDate();

		var now = new Date();

		var currentYear = now.getYear();
		var currentMonth = now.getMonth();
		var currentDate = now.getDate();

		var age = {};
		var ageString = '';

		//get Years

		yearAge = currentYear - dobYear;

		//get Months

		if (currentMonth >= dobMonth) monthAge = currentMonth - dobMonth;
		else {
			yearAge--;
			monthAge = 12 + currentMonth - dobMonth;
		}

		//get Dates

		if (currentDate >= dobDate) dateAge = currentDate - dobDate;
		else {
			monthAge--;
			dateAge = 31 + currentDate - dobDate;

			if (monthAge < 0) {
				monthAge = 11;
				yearAge--;
			}
		}

		//group the age in single variable

		age = {
			years: yearAge,
			months: monthAge,
			days: dateAge,
		};

		if (age.years > 0 && age.months > 0 && age.days > 0)
			ageString = `${age.years} years, ${age.months} months and ${age.days} days old.`;
		else if (age.years == 0 && age.months == 0 && age.days > 0)
			ageString = `Only ${age.days} days old!`;
		else if (age.years > 0 && age.months == 0 && age.days == 0)
			ageString = `${age.years} years old. Happy Birthday!! :)`;
		else if (age.years > 0 && age.months > 0 && age.days == 0)
			ageString = `${age.years} years and ${age.months} months old.`;
		else if (age.years == 0 && age.months > 0 && age.days > 0)
			ageString = `${age.months} months and ${age.days} days old.`;
		else if (age.years > 0 && age.months == 0 && age.days > 0)
			ageString = `${age.years} years, and ${age.days} days old.`;
		else if (age.years == 0 && age.months > 0 && age.days == 0)
			ageString = `${age.months} months old.`;
		else ageString = `Welcome to earth! <br> It's first day on Earth!`;

		return (document.getElementById('result').innerHTML = ageString);
	}
}
