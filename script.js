let report = [];
let dailyReport = document.querySelector("#daily_report");
let weeklyReport = document.querySelector("#weekly_report");
let monthlyReport = document.querySelector("#monthly_report");
let workCurrent = document.querySelector("#work_current");
let workPrevious = document.querySelector("#work_previous");
let playCurrent = document.querySelector("#play_current");
let playPrevious = document.querySelector("#play_previous");
let studyCurrent = document.querySelector("#study_current");
let studyPrevious = document.querySelector("#study_previous");
let exerciseCurrent = document.querySelector("#exercise_current");
let exercisePrevious = document.querySelector("#exercise_previous");
let socialCurrent = document.querySelector("#social_current");
let socialPrevious = document.querySelector("#social_previous");
let selfCareCurrent = document.querySelector("#self-care_current");
let selfCarePrevious = document.querySelector("#self-care_previous");

function showError(){
	let mainTag = document.querySelector("main")
	let errorBlock = document.createElement("div");
	errorBlock.classList.add("error");
	errorBlock.innerHTML = "Something went wrong while fetching the data.";
	mainTag.appendChild(errorBlock); 
}

async function getReport(){
	try{

		/*const REQUEST_URL = "/data.json";*/ /*=> local url. Need local server for working.*/
		const REQUEST_URL = "https://raw.githubusercontent.com/atif-dev/FEM_time-tracking-dashboard/refs/heads/master/data.json";
		const REQUEST = new Request(REQUEST_URL); 
		let response = await fetch(REQUEST);
		if(!response.ok){
			showError();
			return;
		}

		report = await response.json();
	}catch(e){
		showError();
	}
}

getReport().then(() => {
	if(report.length !== 0){
		populateDailyReport();
	}else{
		return; //if server is not responding then return. PopulateDailyReport() will not be executed.
	}
});

function populateDailyReport(){

	dailyReport.className = "white-color";
	weeklyReport.className = "purple-color";
	monthlyReport.className = "purple-color";

	weeklyReport.classList.add("white-hover");
	monthlyReport.classList.add("white-hover");

	report.forEach((reportSegment) => {
		if(reportSegment.title === "Work"){
			let workDaily = reportSegment.timeframes.daily;
			workCurrent.innerHTML = `${workDaily.current}hrs`;
			workPrevious.innerHTML = `Yesterday - ${workDaily.previous}hrs`;
		}else if(reportSegment.title === "Play"){
			let playDaily = reportSegment.timeframes.daily;
			playCurrent.innerHTML = `${playDaily.current}hrs`;
			playPrevious.innerHTML = `Yesterday - ${playDaily.previous}hrs`;
		}else if(reportSegment.title === "Study"){
			let studyDaily = reportSegment.timeframes.daily;
			studyCurrent.innerHTML = `${studyDaily.current}hrs`;
			studyPrevious.innerHTML = `Yesterday - ${studyDaily.previous}hrs`;
		}else if(reportSegment.title === "Exercise"){
			let exerciseDaily = reportSegment.timeframes.daily;
			exerciseCurrent.innerHTML = `${exerciseDaily.current}hrs`;
			exercisePrevious.innerHTML = `Yesterday - ${exerciseDaily.previous}hrs`;
		}else if(reportSegment.title === "Social"){
			let socialDaily = reportSegment.timeframes.daily;
			socialCurrent.innerHTML = `${socialDaily.current}hrs`;
			socialPrevious.innerHTML = `Yesterday - ${socialDaily.previous}hrs`;
		}else if(reportSegment.title === "Self Care"){
			let selfCareDaily = reportSegment.timeframes.daily;
			selfCareCurrent.innerHTML = `${selfCareDaily.current}hrs`;
			selfCarePrevious.innerHTML = `Yesterday - ${selfCareDaily.previous}hrs`;
		}
	});

}

function populateReport(){

	let selectedReport = this.innerHTML;
	
	if(selectedReport === "Daily"){
		populateDailyReport();
	}else if(selectedReport === "Weekly"){
		weeklyReport.className = "white-color";
		dailyReport.className = "purple-color";
		monthlyReport.className = "purple-color";

		dailyReport.classList.add("white-hover");
		monthlyReport.classList.add("white-hover");

		report.forEach((reportSegment) => {
			if(reportSegment.title === "Work"){
				let workWeekly = reportSegment.timeframes.weekly;
				workCurrent.innerHTML = `${workWeekly.current}hrs`;
				workPrevious.innerHTML = `Last Week - ${workWeekly.previous}hrs`;
			}else if(reportSegment.title === "Play"){
				let playWeekly = reportSegment.timeframes.weekly;
				playCurrent.innerHTML = `${playWeekly.current}hrs`;
				playPrevious.innerHTML = `Last Week - ${playWeekly.previous}hrs`;
			}else if(reportSegment.title === "Study"){
				let studyWeekly = reportSegment.timeframes.weekly;
				studyCurrent.innerHTML = `${studyWeekly.current}hrs`;
				studyPrevious.innerHTML = `Last Week - ${studyWeekly.previous}hrs`;
			}else if(reportSegment.title === "Exercise"){
				let exerciseWeekly = reportSegment.timeframes.weekly;
				exerciseCurrent.innerHTML = `${exerciseWeekly.current}hrs`;
				exercisePrevious.innerHTML = `Last Week - ${exerciseWeekly.previous}hrs`;
			}else if(reportSegment.title === "Social"){
				let socialWeekly = reportSegment.timeframes.weekly;
				socialCurrent.innerHTML = `${socialWeekly.current}hrs`;
				socialPrevious.innerHTML = `Last Week - ${socialWeekly.previous}hrs`;
			}else if(reportSegment.title === "Self Care"){
				let selfCareWeekly = reportSegment.timeframes.weekly;
				selfCareCurrent.innerHTML = `${selfCareWeekly.current}hrs`;
				selfCarePrevious.innerHTML = `Last Week - ${selfCareWeekly.previous}hrs`;
			}
		});
	}else if(selectedReport === "Monthly"){
		monthlyReport.className = "white-color";
		dailyReport.className = "purple-color";
		weeklyReport.className = "purple-color";
		
		dailyReport.classList.add("white-hover");
		weeklyReport.classList.add("white-hover");
		report.forEach((reportSegment) => {
			if(reportSegment.title === "Work"){
				let workMonthly = reportSegment.timeframes.monthly;
				workCurrent.innerHTML = `${workMonthly.current}hrs`;
				workPrevious.innerHTML = `Last Month - ${workMonthly.previous}hrs`;
			}else if(reportSegment.title === "Play"){
				let playMonthly = reportSegment.timeframes.monthly;
				playCurrent.innerHTML = `${playMonthly.current}hrs`;
				playPrevious.innerHTML = `Last Month - ${playMonthly.previous}hrs`;
			}else if(reportSegment.title === "Study"){
				let studyMonthly = reportSegment.timeframes.monthly;
				studyCurrent.innerHTML = `${studyMonthly.current}hrs`;
				studyPrevious.innerHTML = `Last Month - ${studyMonthly.previous}hrs`;
			}else if(reportSegment.title === "Exercise"){
				let exerciseMonthly = reportSegment.timeframes.monthly;
				exerciseCurrent.innerHTML = `${exerciseMonthly.current}hrs`;
				exercisePrevious.innerHTML = `Last Month - ${exerciseMonthly.previous}hrs`;
			}else if(reportSegment.title === "Social"){
				let socialMonthly = reportSegment.timeframes.monthly;
				socialCurrent.innerHTML = `${socialMonthly.current}hrs`;
				socialPrevious.innerHTML = `Last Month - ${socialMonthly.previous}hrs`;
			}else if(reportSegment.title === "Self Care"){
				let selfCareMonthly = reportSegment.timeframes.monthly;
				selfCareCurrent.innerHTML = `${selfCareMonthly.current}hrs`;
				selfCarePrevious.innerHTML = `Last Month - ${selfCareMonthly.previous}hrs`;
			}
		});
	}else{
		return;
	}

}

dailyReport.addEventListener("click", populateReport);
weeklyReport.addEventListener("click", populateReport);
monthlyReport.addEventListener("click", populateReport);










