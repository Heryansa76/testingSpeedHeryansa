let newDiagnoseList = document.querySelector(".addNewDiagnosa");
let diagnoseList = document.getElementById("diagnoseList");

newDiagnoseList.addEventListener("click", function(){
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type= "text";
    input.name="";
    input.className = "form-control mb-2";

    li.appendChild(input);
    diagnoseList.appendChild(li);
});

let newICD10List = document.querySelector(".addNewICD10");
let ICD10List = document.getElementById("ICD10List");

newICD10List.addEventListener("click", function(){
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type= "text";
    input.name="";
    input.className = "form-control mb-2";

    li.appendChild(input);
    ICD10List.appendChild(li);
});

let newActionList = document.querySelector(".addNewAction");
let actionList = document.getElementById("actionList");

newActionList.addEventListener("click", function(){
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type= "text";
    input.name="";
    input.className = "form-control mb-2";

    li.appendChild(input);
    actionList.appendChild(li);
});


let newICD9List = document.querySelector(".addNewICD9");
let ICD9List = document.getElementById("ICD9List");
newICD9List.addEventListener("click", function(){
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type= "text";
    input.name="";
    input.className = "form-control mb-2";

    li.appendChild(input);
    ICD9List.appendChild(li);
});