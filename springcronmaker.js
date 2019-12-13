

const SECOND = 0;
const MINUTE = 1;
const HOUR = 2;
const DAY_OF_MONTH = 3;
const MONTH = 4;
const DAY_OF_WEEK = 5;

function generateCronExpression(param) {
	var second = getParameterValue(param.second);
	var minute = getParameterValue(param.minute);
	var hour = getParameterValue(param.hour);
	var day = getParameterValue(param.day);
	var month = getParameterValue(param.month);
	var weekday = getParameterValue(param.weekday, "SUN");
	
	second = (second !== "*" ? "*/" + second : "*");
	minute = (minute !== "*" ? "*/" + minute : "*");
	// console.log(second);
	// console.log(minute);
	// console.log(hour);
	// console.log(day);
	// console.log(month);
	// console.log(weekday);
	
	return second + " " + minute + " " + hour + " " + day + " " + month + " " + weekday + " ";
}

function getParameterValue(paramField, defaultValue) {
	return (!paramField ? (defaultValue ? defaultValue : "*" ) : paramField);
}

var param = {
	second: 5
};
var value = generateCronExpression(param);
console.log(value);