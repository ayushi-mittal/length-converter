document.getElementById("selection").addEventListener('click',function(){
  var numValue = document.getElementById("txt-inp").value;
  var type = document.getElementById("selection").value;
  var box1 = document.querySelector(".answer1");
  var box2 = document.querySelector(".answer2");
  var box3 = document.querySelector(".answer3");
  var box4 = document.querySelector(".answer4");
  var box5 = document.querySelector(".answer5");
  if(type == "kilometer")
  {
    box1.style.backgroundColor = "rgb(208, 98, 79)";
    document.getElementById("head1").textContent = "Kilometer";
    document.getElementById("txt1").textContent = numValue;

    box2.style.backgroundColor = "rgb(41, 172, 86)";
    document.getElementById("head2").textContent = "Mile";
    document.getElementById("txt2").textContent = numValue * 0.621371;

    box3.style.backgroundColor = "rgb(120, 131, 241)";
    document.getElementById("head3").textContent = "Foot";
    document.getElementById("txt3").textContent = numValue * 3280.84;

    box4.style.backgroundColor = "rgb(16, 75, 111)";
    document.getElementById("head4").textContent = "Inch";
    document.getElementById("txt4").textContent = numValue * 39370.1;

    box5.style.backgroundColor = "rgb(73, 26, 96)";
    document.getElementById("head5").textContent = "Yard";
    document.getElementById("txt5").textContent = numValue * 1093.61;
  }

  else if(type == "mile")
  {
    box1.style.backgroundColor = "rgb(208, 98, 79)";
    document.getElementById("head1").textContent = "Kilometer";
    document.getElementById("txt1").textContent = numValue * 1.60934;

    box2.style.backgroundColor = "rgb(41, 172, 86)";
    document.getElementById("head2").textContent = "Mile";
    document.getElementById("txt2").textContent = numValue;

    box3.style.backgroundColor = "rgb(120, 131, 241)";
    document.getElementById("head3").textContent = "Foot";
    document.getElementById("txt3").textContent = numValue * 5280;

    box4.style.backgroundColor = "rgb(16, 75, 111)";
    document.getElementById("head4").textContent = "Inch";
    document.getElementById("txt4").textContent = numValue * 63360;

    box5.style.backgroundColor = "rgb(73, 26, 96)";
    document.getElementById("head5").textContent = "Yard";
    document.getElementById("txt5").textContent = numValue * 1760;
  }

  else if(type == "foot")
  {
    box1.style.backgroundColor = "rgb(208, 98, 79)";
    document.getElementById("head1").textContent = "Kilometer";
    document.getElementById("txt1").textContent = numValue * 0.0003048;

    box2.style.backgroundColor = "rgb(41, 172, 86)";
    document.getElementById("head2").textContent = "Mile";
    document.getElementById("txt2").textContent = numValue * 0.000189394;

    box3.style.backgroundColor = "rgb(120, 131, 241)";
    document.getElementById("head3").textContent = "Foot";
    document.getElementById("txt3").textContent = numValue;

    box4.style.backgroundColor = "rgb(16, 75, 111)";
    document.getElementById("head4").textContent = "Inch";
    document.getElementById("txt4").textContent = numValue * 12;

    box5.style.backgroundColor = "rgb(73, 26, 96)";
    document.getElementById("head5").textContent = "Yard";
    document.getElementById("txt5").textContent = numValue * 0.333333;
  }

  else if(type == "inch")
  {
    box1.style.backgroundColor = "rgb(208, 98, 79)";
    document.getElementById("head1").textContent = "Kilometer";
    document.getElementById("txt1").textContent = numValue * 2.54e-5;

    box2.style.backgroundColor = "rgb(41, 172, 86)";
    document.getElementById("head2").textContent = "Mile";
    document.getElementById("txt2").textContent = numValue * 1.57828e-5;

    box3.style.backgroundColor = "rgb(120, 131, 241)";
    document.getElementById("head3").textContent = "Foot";
    document.getElementById("txt3").textContent = numValue * 0.0833333;

    box4.style.backgroundColor = "rgb(16, 75, 111)";
    document.getElementById("head4").textContent = "Inch";
    document.getElementById("txt4").textContent = numValue;

    box5.style.backgroundColor = "rgb(73, 26, 96)";
    document.getElementById("head5").textContent = "Yard";
    document.getElementById("txt5").textContent = numValue * 0.0277778;
  }

  else if(type == "yard")
  {
    box1.style.backgroundColor = "rgb(208, 98, 79)";
    document.getElementById("head1").textContent = "Kilometer";
    document.getElementById("txt1").textContent = numValue * 0.0009144;

    box2.style.backgroundColor = "rgb(41, 172, 86)";
    document.getElementById("head2").textContent = "Mile";
    document.getElementById("txt2").textContent = numValue * 0.000568182;

    box3.style.backgroundColor = "rgb(120, 131, 241)";
    document.getElementById("head3").textContent = "Foot";
    document.getElementById("txt3").textContent = numValue * 3;

    box4.style.backgroundColor = "rgb(16, 75, 111)";
    document.getElementById("head4").textContent = "Inch";
    document.getElementById("txt4").textContent = numValue * 36;

    box5.style.backgroundColor = "rgb(73, 26, 96)";
    document.getElementById("head5").textContent = "Yard";
    document.getElementById("txt5").textContent = numValue;
  }
});
