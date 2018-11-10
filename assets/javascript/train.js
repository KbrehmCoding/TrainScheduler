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

$("#submitButton").on("click", function(event) {
    event.preventDefault();

    var empName = $("#trainNameInput").val().trim();
    var empDestination = $("#destinationInput").val().trim();
    var empFrequency = moment($("#frequencyInput").val().trim(), "MM/DD/YYYY").format("X");
    var empMinAway = $("#minAway").val();
    var empMinAway = "$(#firstTimeInput)" + "$(#frequencyInput)";
    var empFirstTime = moment($("#firstTimeinput"));

    var newEmp = {
        name: empName,
        Destination: empDestination,
        Frequency: empFrequency,
        minAway: empMinAway,
        firstTime: empFirstTime
    };

    database.push(newEmp);

    console.log(newEmp.name);
    console.log(newEmp.Destination);
    console.log(newEmp.Frequency);
    console.log(newEmp.minAway);
    console.log(empFirstTime.firstTime)

    alert("Employee successfully added");

    $("#trainNameInput").val("");
    $("#").val("");
    $("FrequencyInput").val("");
    $("#minAway").val("");
    $("#firstTimeInput").val("");
});

database.on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var empName = childSnapshot.val().name;
    var empDestination = childSnapshot.val().Destination;
    var empFrequency = childSnapshot.val().Frequency;
    var empMinAway = childSnapshot.val().minAway;
    var empFirstTime = childSnapshot.val().firstTime;

    console.log(empName);
    console.log(empDestination);
    console.log(empFrequency);
    // console.log(empMinAway);
    console.log(empFirstTime);

    var tFrequency = empFrequency;

    var firstTime = empFirstTime;

    var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    var currentTime = moment();
    console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    var tRemainder = diffTime % tFrequency;
    console.log(tRemainder);

    var tMinutesTillTrain = tFrequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    var newRow = $("<tr>").append(
        $("<td>").text(empName),
        $("<td>").text(empDestination),
        $("<td>").text(empFrequency),
        $("<td<").text(nextArrival),
        $("<td>").text(empMinAway),
    );

    $("#train-table > tbody").append(newRow);
});
