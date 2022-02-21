Webcam.set({
  width:350,
  height:300,
  Image_formate : 'png',
  png_quality:90
  });
  
  
   camera = document.getElementById("camera");
  
  
  Webcam.attach( '#camera' );
  
  
  function take_snapshot()
  {
  
   Webcam.snap(function(data_uri)  {
     document.getElementById("result").innerHTML ='<img id="captured_image" src="'+data_uri+'"/>';
  
  });
  
  }
  
   console.log('ml5 version:', ml5.version);
  
   classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ImEdCPz_g/',modelLoaded);
  
   function modelLoaded() {
    console.log('Model Loaded!');
  
   }
  
   function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is" + prediction_1;
    speak_data_2 = "and the second prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis)
  
  
   }
  
   function modeledLoaded() {
     console.log('Model Loaded!');
   }
  
   function check ()
   {
      img = document.getElementById('captured_image');
      classifier.classify(img, gotResult);
  
   }
  
  
   function gotResult(error, result) {
     if (error) {
       console.error(error);
     } else {
       console.log(results);
       document.getElementById("result_emotion_name").innerHtml = results[0].lable;
       document.getElementById("result_emotion_name2").innerHtml = results[1].lable;
       prediction_1 = results[0].lable;
       prediction_2 = results[1].lable;
       speak();
  
       if(results[0].lable == "happy")
       {
         document.getElementById("update_emoji").innerHTML = "&#128522;";
       }
       
       if(results[0].lable == "sad")
       {
         document.getElementById("update_emoji").innerHTML = "&#128532;";
       }
  
       if(results[0].lable == "angry")
       {
         document.getElementById("update_emoji").innerHTML = "&#128548;";
       }
  
       if(results[1].lable == "happy")
       {
         document.getElementById("update_emoji2").innerHTML = "&#128522;";
       }
       
       if(results[1].lable == "sad")
       {
         document.getElementById("update_emoji2").innerHTML = "&#128532;";
       }
  
       if(results[1].lable == "angry")
       {
         document.getElementById("update_emoji2").innerHTML = "&#128548;";
       }
       
         
        
       }
    }   
    
  
    
    