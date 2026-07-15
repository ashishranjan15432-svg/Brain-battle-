function checkAnswer() {
  let answer = document.getElementById("answer").value;

  if (answer == 12) {
    document.getElementById("result").innerHTML = "🎉 Correct Answer!";
    document.getElementById("result").style.color = "lime";
  } else {
    document.getElementById("result").innerHTML = "❌ Wrong Answer! Try Again.";
    document.getElementById("result").style.color = "yellow";
  }
}
