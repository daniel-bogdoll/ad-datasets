const jsonData= require('./data_sorted.json');
export let complete = 0;
export let parComplete = 0;
export let incomplete = 0;


function f() {
    for (let key in jsonData) {
        if(jsonData[key]['completionStatus']==="complete"){
            complete++;
        }
        else if(jsonData[key]['completionStatus']==="partially Complete"){
            parComplete++;
        }
        else if(jsonData[key]['completionStatus']==="incomplete"){
            incomplete++;
        }
    }
}

f();

