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

function validateInputs() {
    return $("#trainNameInput").val().trim().length > 0 &&
        $("#destinationInput").val().trim().length > 0 &&
        $("#firstTimeInput").val().trim().length > 0 &&
        $("#frequencyInput").val().trim().length > 0 &&
        /^([01]\d|2[0-3]):?([0-5]\d)$/.test($("#firstTimeInput").val().trim()) &&
        /^[0-9]+$/.test($("#frequencyInput").val().trim());
}

function getTrainObjectFromInputs() {
    return {
        destination: $("#destinationInput").val().trim(),
        firstTime: $("#firstTimeInput").val().trim(),
        frequency: $("#frequencyInput").val().trim(),
        name: $("#trainNameInput").val().trim(),
    };
}

function clearInputs() {
    $("#trainNameInput").val("");
    $("#destinationInput").val("");
    $("#firstTimeInput").val("");
    $("#frequencyInput").val("");
}

$("#submitButton").on("click", function(event) {
    event.preventDefault();

    if (!validateInputs()) {
        return;
    }

    database.push(getTrainObjectFromInputs());

    clearInputs();
});

database.on("child_added", function(childSnapshot) {
    var train = childSnapshot.val();

    var firstTimeOneYearAgo = moment(train.firstTime, "HH:mm").subtract(1, "years");
    var diffTimeInMinutes = moment().diff(firstTimeOneYearAgo, "minutes");
    var remainderMinutes = diffTimeInMinutes % train.frequency;
    var minutesUntilNextTrain = train.frequency - remainderMinutes;
    var nextTrainTime = moment().add(minutesUntilNextTrain, "minutes");

    var newRow = $("<tr>").append(
        $("<td>").text(train.name),
        $("<td>").text(train.destination),
        $("<td>").text(train.frequency),
        $("<td>").text(nextTrainTime.format("HH:mm")),
        $("<td>").text(minutesUntilNextTrain)
    );

    $("#train-table > tbody").append(newRow);
});
