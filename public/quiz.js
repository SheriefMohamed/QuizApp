// // Show the spinner when the page loads
// document.addEventListener("DOMContentLoaded", function () {
//   document.querySelector("#spinner").style.display = "block";
//   document.querySelector("#quiz").style.display = "none";
// });

// // Hide the spinner after 0.5 seconds
// setTimeout(function () {
//   document.querySelector("#spinner").style.display = "none";
//   document.querySelector("#quiz").style.display = "block";
// }, 1500);

function addQuestion(){
    window.location.href = 'http://localhost:4000/admin/question'
}

function deleteQuestion(questionId){
    fetch(`/admin/question/${questionId}`,{
        method: "DELETE",
        headers: {
            'Content-type' : 'application/json'
        },
    }).then(res => {
        return res.json()
    })
    .then(({success}) => {
        if(success){
            window.location.href = 'http://localhost:4000/admin/quiz'
        }
    })
    .catch(err => {
        console.log(err);
    })
}