/* const timeZones = ['America/Chicago', 'America/New_York', 
'America/Denver', 'America/Anchorage', 'America/Los_Angeles', 'Pacific/Honolulu'];

const elementId = ["central", "eastern", "mountain", "alaskan", "pacific", "hawaiian"]; */

const timeZones = [
	{
		zone: "America/Chicago",
		id: "central",
	},
	{
		zone: "America/New_York",
		id: "eastern",
	},
	{
		zone: "America/Denver",
		id: "mountain",
	},
	{
		zone: "America/Anchorage",
		id: "alaskan",
	},
	{
		zone: "America/Los_Angeles",
		id: "pacific",
	},
	{
		zone: "Pacific/Honolulu",
		id: "hawaiian",
	},
]

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

function update() {
	const date = new Date();
	
	for (let i = 0; i < timeZones.length; i++) {
		const time = date.toLocaleString("en-US", {
			timeZone: `${timeZones[i].zone}`,
			timeStyle: 'medium'
		});
		
		if (userTimezone === timeZones[i].zone) {
			document.getElementById(timeZones[i].id).style.backgroundColor = "red";
		}
		
	    document.getElementById(timeZones[i].id).innerText = time;
	}
}

/* function update() {
	
const date = new Date()

const updatedTimes = [];

for (let i = 0; i < timeZones.length; i++) {

	const time = date.toLocaleString("en-US", {timeZone: `${timeZones[i]}`, timeStyle: 'medium'});

	updatedTimes.push(time);

}
for (let j = 0; j < elementId.length; j++) {
	
	document.getElementById(elementId[j]).innerText = updatedTimes[j];
}

} */

update();

setInterval(update, 1000)