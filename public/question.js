function add(){
    var question = document.getElementById("question").value;
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	var d = document.getElementById("d").value;
    var correct = document.getElementById("correct").value;
    
    fetch('',{
        method: "POST",
        body: JSON.stringify({
            question,a,b,c,d,correct
        }),
        headers: {
            'Content-type' : 'application/json'
        },
    }).then(res => {
        return res.json()
    })
    .then(({success, error}) => {
        if(success){
            window.location.href = 'http://localhost:4000/admin/quiz'
        }else{
            if(error.question) document.getElementById('question_error').textContent = error.question.message 
                else document.getElementById('question_error').textContent = ""
            if(error.a) document.getElementById('a_error').textContent = error.a.message
                else document.getElementById('a_error').textContent = ""
            if(error.b) document.getElementById('b_error').textContent = error.b.message
                else document.getElementById('b_error').textContent = ""
            if(error.c) document.getElementById('c_error').textContent = error.c.message
                else document.getElementById('c_error').textContent = ""
            if(error.d) document.getElementById('d_error').textContent = error.d.message
                else document.getElementById('d_error').textContent = ""
            if(error.correct) document.getElementById('correct_error').textContent = error.correct.message
               else document.getElementById('correct_error').textContent = ""
        }
    })
    .catch(err => {
        console.log(err);
    })
}

function edit(){
    var question = document.getElementById("question").value;
	var a = document.getElementById("a").value;
	var b = document.getElementById("b").value;
	var c = document.getElementById("c").value;
	var d = document.getElementById("d").value;
    var correct = document.getElementById("correct").value;
    
    fetch('', {
        method: "PUT",
        body: JSON.stringify({
            question,a,b,c,d,correct
        }),
        headers: {
            'Content-type' : 'application/json'
        },
    }).
    then(res => {
        return res.json()
    })
    .then(({success, error}) => {
        if(success){
            window.location.href = 'http://localhost:4000/admin/quiz'
        }else{
            if(error.correct) document.getElementById('correct_error').textContent = error.correct.message
               else document.getElementById('correct_error').textContent = ""
        }
    })
    .catch(err => {
        console.log(err);
    })
}