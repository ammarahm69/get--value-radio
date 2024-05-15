//Get ID by radio
function submit() {
    let gender = document.getElementsByName('gender');
    for (let index = 0; index < gender.length; index++) {
        if(gender[index].checked){
        console.log(gender[index].value);
    }
    }
};
//Get value by range

