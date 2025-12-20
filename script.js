var report = [];
let dailyReport = document.querySelector("#daily_report");
let weeklyReport = document.querySelector("#weekly_report");
let monthlyReport = document.querySelector("#monthly_report");

function showError(){
	let mainTag = document.querySelector("main")
	let errorBlock = document.createElement("div");
	errorBlock.classList.add("error");
	errorBlock.innerHTML = "Something went wrong while fetching the data.";
	mainTag.appendChild(errorBlock); 
}

async function getReport(){
	try{
		const REQUEST_URL = "/data.json";
		const REQUEST = new Request(REQUEST_URL); 
		let response = await fetch(REQUEST);
		/*if(!response.ok) return alert("Something went wrong.");*/
		if(!response.ok){
			showError();
			return;
		}

		report = await response.json();
	}catch(e){
		/*alert("Something went wrong while fetching the data.");*/
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

	dailyReport.style.color = "white";
	weeklyReport.style.color = "hsl(238, 32%, 60%)";
	monthlyReport.style.color = "hsl(238, 32%, 60%)";
	weeklyReport.classList.add("white-hover");
	monthlyReport.classList.add("white-hover");

		for(let reportSegment of report){
			if(reportSegment.title == "Work"){
				let workDaily = reportSegment.timeframes.daily;
				let workCurrent = document.querySelector("#work_current");
				workCurrent.innerHTML = `${workDaily.current}hrs`;

				let workPrevious = document.querySelector("#work_previous");
				workPrevious.innerHTML = `Yesterday - ${workDaily.previous}hrs`;
			}else if(reportSegment.title == "Play"){
				let playDaily = reportSegment.timeframes.daily;
				let playCurrent = document.querySelector("#play_current");
				playCurrent.innerHTML = `${playDaily.current}hrs`;

				let playPrevious = document.querySelector("#play_previous");
				playPrevious.innerHTML = `Yesterday - ${playDaily.previous}hrs`;
			}else if(reportSegment.title == "Study"){
				let studyDaily = reportSegment.timeframes.daily;
				let studyCurrent = document.querySelector("#study_current");
				studyCurrent.innerHTML = `${studyDaily.current}hrs`;

				let studyPrevious = document.querySelector("#study_previous");
				studyPrevious.innerHTML = `Yesterday - ${studyDaily.previous}hrs`;
			}else if(reportSegment.title == "Exercise"){
				let exerciseDaily = reportSegment.timeframes.daily;
				let exerciseCurrent = document.querySelector("#exercise_current");
				exerciseCurrent.innerHTML = `${exerciseDaily.current}hrs`;

				let exercisePrevious = document.querySelector("#exercise_previous");
				exercisePrevious.innerHTML = `Yesterday - ${exerciseDaily.previous}hrs`;
			}else if(reportSegment.title == "Social"){
				let socialDaily = reportSegment.timeframes.daily;
				let socialCurrent = document.querySelector("#social_current");
				socialCurrent.innerHTML = `${socialDaily.current}hrs`;

				let socialPrevious = document.querySelector("#social_previous");
				socialPrevious.innerHTML = `Yesterday - ${socialDaily.previous}hrs`;
			}else if(reportSegment.title == "Self Care"){
				let selfCareDaily = reportSegment.timeframes.daily;
				let selfCareCurrent = document.querySelector("#self-care_current");
				selfCareCurrent.innerHTML = `${selfCareDaily.current}hrs`;

				let selfCarePrevious = document.querySelector("#self-care_previous");
				selfCarePrevious.innerHTML = `Yesterday - ${selfCareDaily.previous}hrs`;
			}

		}
}

function populateReport(){

	let selectedReport = this.innerHTML;
	
	if(selectedReport === "Daily"){
		populateDailyReport();
	}else if(selectedReport === "Weekly"){

		weeklyReport.style.color = "white";
		dailyReport.style.color = "hsl(238, 32%, 60%)";
		monthlyReport.style.color = "hsl(238, 32%, 60%)";
		dailyReport.classList.add("white-hover");
		monthlyReport.classList.add("white-hover");

		for(let reportSegment of report){
			if(reportSegment.title == "Work"){
				let workWeekly = reportSegment.timeframes.weekly;
				let workCurrent = document.querySelector("#work_current");
				workCurrent.innerHTML = `${workWeekly.current}hrs`;

				let workPrevious = document.querySelector("#work_previous");
				workPrevious.innerHTML = `Last Week - ${workWeekly.previous}hrs`;
			}else if(reportSegment.title == "Play"){
				let playWeekly = reportSegment.timeframes.weekly;
				let playCurrent = document.querySelector("#play_current");
				playCurrent.innerHTML = `${playWeekly.current}hrs`;

				let playPrevious = document.querySelector("#play_previous");
				playPrevious.innerHTML = `Last Week - ${playWeekly.previous}hrs`;
			}else if(reportSegment.title == "Study"){
				let studyWeekly = reportSegment.timeframes.weekly;
				let studyCurrent = document.querySelector("#study_current");
				studyCurrent.innerHTML = `${studyWeekly.current}hrs`;

				let studyPrevious = document.querySelector("#study_previous");
				studyPrevious.innerHTML = `Last Week - ${studyWeekly.previous}hrs`;
			}else if(reportSegment.title == "Exercise"){
				let exerciseWeekly = reportSegment.timeframes.weekly;
				let exerciseCurrent = document.querySelector("#exercise_current");
				exerciseCurrent.innerHTML = `${exerciseWeekly.current}hrs`;

				let exercisePrevious = document.querySelector("#exercise_previous");
				exercisePrevious.innerHTML = `Last Week - ${exerciseWeekly.previous}hrs`;
			}else if(reportSegment.title == "Social"){
				let socialWeekly = reportSegment.timeframes.weekly;
				let socialCurrent = document.querySelector("#social_current");
				socialCurrent.innerHTML = `${socialWeekly.current}hrs`;

				let socialPrevious = document.querySelector("#social_previous");
				socialPrevious.innerHTML = `Last Week - ${socialWeekly.previous}hrs`;
			}else if(reportSegment.title == "Self Care"){
				let selfCareWeekly = reportSegment.timeframes.weekly;
				let selfCareCurrent = document.querySelector("#self-care_current");
				selfCareCurrent.innerHTML = `${selfCareWeekly.current}hrs`;

				let selfCarePrevious = document.querySelector("#self-care_previous");
				selfCarePrevious.innerHTML = `Last Week - ${selfCareWeekly.previous}hrs`;
			}

		}

	}else if(selectedReport === "Monthly"){

		monthlyReport.style.color = "white";
		dailyReport.style.color = "hsl(238, 32%, 60%)";
		weeklyReport.style.color = "hsl(238, 32%, 60%)";
		dailyReport.classList.add("white-hover");
		weeklyReport.classList.add("white-hover");
		
		for(let reportSegment of report){
			if(reportSegment.title == "Work"){
				let workMonthly = reportSegment.timeframes.monthly;
				let workCurrent = document.querySelector("#work_current");
				workCurrent.innerHTML = `${workMonthly.current}hrs`;

				let workPrevious = document.querySelector("#work_previous");
				workPrevious.innerHTML = `Last Month - ${workMonthly.previous}hrs`;
			}else if(reportSegment.title == "Play"){
				let playMonthly = reportSegment.timeframes.monthly;
				let playCurrent = document.querySelector("#play_current");
				playCurrent.innerHTML = `${playMonthly.current}hrs`;

				let playPrevious = document.querySelector("#play_previous");
				playPrevious.innerHTML = `Last Month - ${playMonthly.previous}hrs`;
			}else if(reportSegment.title == "Study"){
				let studyMonthly = reportSegment.timeframes.monthly;
				let studyCurrent = document.querySelector("#study_current");
				studyCurrent.innerHTML = `${studyMonthly.current}hrs`;

				let studyPrevious = document.querySelector("#study_previous");
				studyPrevious.innerHTML = `Last Month - ${studyMonthly.previous}hrs`;
			}else if(reportSegment.title == "Exercise"){
				let exerciseMonthly = reportSegment.timeframes.monthly;
				let exerciseCurrent = document.querySelector("#exercise_current");
				exerciseCurrent.innerHTML = `${exerciseMonthly.current}hrs`;

				let exercisePrevious = document.querySelector("#exercise_previous");
				exercisePrevious.innerHTML = `Last Month - ${exerciseMonthly.previous}hrs`;
			}else if(reportSegment.title == "Social"){
				let socialMonthly = reportSegment.timeframes.monthly;
				let socialCurrent = document.querySelector("#social_current");
				socialCurrent.innerHTML = `${socialMonthly.current}hrs`;

				let socialPrevious = document.querySelector("#social_previous");
				socialPrevious.innerHTML = `Last Month - ${socialMonthly.previous}hrs`;
			}else if(reportSegment.title == "Self Care"){
				let selfCareMonthly = reportSegment.timeframes.monthly;
				let selfCareCurrent = document.querySelector("#self-care_current");
				selfCareCurrent.innerHTML = `${selfCareMonthly.current}hrs`;
				let selfCarePrevious = document.querySelector("#self-care_previous");
				selfCarePrevious.innerHTML = `Last Month - ${selfCareMonthly.previous}hrs`;
			}

		}
	}else{
		return;
	}

}

dailyReport.addEventListener("click", populateReport);
weeklyReport.addEventListener("click", populateReport);
monthlyReport.addEventListener("click", populateReport);










