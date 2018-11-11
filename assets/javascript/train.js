var config = {
    apiKey: "AIzaSyB2gLeq7KxSobVV8Iv5CYgHVf6EM_w-MNw",
    authDomain: "classproject-ca27e.firebaseapp.com",
    databaseURL: "https://classproject-ca27e.firebaseio.com",
    messagingSenderId: "428460988398",
    projectId: "classproject-ca27e",
    storageBucket: "classproject-ca27e.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database().ref();

// $("#submitButton").on("click", function(event) {
//     event.preventDefault();

//     var trainName = $("#trainNameInput").val().trim();
//     var trainDestination = $("#destinationInput").val().trim();
//     var trainFrequency = moment($("#frequencyInput").val().trim(), "MM/DD/YYYY").format("X");
//     var trainMinAway = moment() + "$(#frequencyInput)";
//     var trainFirstTime = moment();

//     var train = {
//         name: trainName,
//         Destination: trainDestination,
//         Frequency: trainFrequency,
//         minAway: trainMinAway,
//         firstTime: trainFirstTime
//     };

//     database.push(train);

//     console.log(train.Name);
//     console.log(train.Destination);
//     console.log(train.Frequency);
//     console.log(train.MinAway);
//     console.log(train.FirstTime)

//     $("#trainNameInput").val("");
//     $("#frequencyInput").val("");
//     $("#minAway").val("");
//     $("#firstTimeInput").val("");
// });

database.on("child_added", function(childSnapshot) {
    console.log('childSnapshot', childSnapshot);
    // console.log(childSnapshot.val());

    // var trainName = childSnapshot.val().name;
    // var trainDestination = childSnapshot.val().Destination;
    // var trainFrequency = childSnapshot.val().Frequency;
    // var trainMinAway = childSnapshot.val().minAway;
    // var trainFirstTime = childSnapshot.val().firstTime;

    // console.log(trainName);
    // console.log(trainDestination);
    // console.log(trainFrequency);
    // console.log(trainMinAway);
    // console.log(trainFirstTime);

    // var tFrequency = trainFrequency;

    // var firstTime = trainFirstTime;

    // var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    // console.log(firstTimeConverted);

    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // var nextTrain = moment().add(trainFrequency, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    // var newRow = $("<tr>").append(
    //     $("<td>").text(trainName),
    //     $("<td>").text(trainDestination),
    //     $("<td>").text(trainFrequency),
    //     $("<td>").text(nextTrain),
    //     $("<td>").text(tMinutesTillTrain),
    // );

    // $("#train-table > tbody").append(newRow);
});
