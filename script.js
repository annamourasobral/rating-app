function onSubmit() {
  document.getElementById("container").style.display = "none";
  document.getElementById("onclick-container").style.display = "block";
}

document.getElementById("one").onclick = function () {
  document.getElementById("one").style.backgroundColor = "hsl(217, 12%, 63%)";
  document.getElementById("one").style.color = "#fff";

  document.getElementById("two").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("two").style.color = "hsl(217, 12%, 63%)";

  document.getElementById("three").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("three").style.color = "hsl(217, 12%, 63%)";

  document.getElementById("four").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("four").style.color = "hsl(217, 12%, 63%)";

  document.getElementById("five").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("five").style.color = "hsl(217, 12%, 63%)";

  document.getElementById("result-no").innerHTML = "1"
};

document.getElementById("two").onclick = function () {
  document.getElementById("two").style.backgroundColor = "hsl(217, 12%, 63%)";
  document.getElementById("two").style.color = "#fff";

  document.getElementById("one").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("one").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("three").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("three").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("four").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("four").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("five").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("five").style.color = "hsl(217, 12%, 63%)";

  document.getElementById("result-no").innerHTML = "2"
};

document.getElementById("three").onclick = function () {
  document.getElementById("three").style.backgroundColor = "hsl(217, 12%, 63%)";
  document.getElementById("three").style.color = "#fff";

  document.getElementById("two").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("two").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("one").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("one").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("four").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("four").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("five").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("five").style.color = "hsl(217, 12%, 63%)";

  document.getElementById("result-no").innerHTML = "3"
};

document.getElementById("four").onclick = function () {
  document.getElementById("four").style.backgroundColor = "hsl(217, 12%, 63%)";
  document.getElementById("four").style.color = "#fff";

  document.getElementById("two").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("two").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("three").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("three").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("one").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("one").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("five").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("five").style.color = "hsl(217, 12%, 63%)";

  document.getElementById("result-no").innerHTML = "4"
};

document.getElementById("five").onclick = function () {
  document.getElementById("five").style.backgroundColor = "hsl(217, 12%, 63%)";
  document.getElementById("five").style.color = "#fff";

  document.getElementById("two").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("two").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("three").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("three").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("four").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("four").style.color = "hsl(217, 12%, 63%)";
  document.getElementById("one").style.backgroundColor = "hsl(213, 14%, 25%)";
  document.getElementById("one").style.color = "hsl(217, 12%, 63%)";

  document.getElementById("result-no").innerHTML = "5"
};