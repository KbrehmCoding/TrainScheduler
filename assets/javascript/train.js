    var config = {
        apiKey: "AIzaSyB2gLeq7KxSobVV8Iv5CYgHVf6EM_w-MNw",
        authDomain: "classproject-ca27e.firebaseapp.com",
        databaseURL: "https://classproject-ca27e.firebaseio.com",
        projectId: "classproject-ca27e",
        storageBucket: "classproject-ca27e.appspot.com",
        messagingSenderId: "428460988398"
    };
    firebase.initializeApp(config);

    $("#submitButton").on("click", function(event) {
        event.preventDefault();

        var empName = $("#employee-name-input").val().trim();
        var empDestination = $("#Destination-input").val().trim();
        var empFrequency = moment($("#Frequency-input").val().trim(), "MM/DD/YYYY").format("X");
        var empMinAway = $("#minAway-input").val().trim();
        var firstTime = moment($("#firstTimeinput").val().trim());

        var newEmp = {
            name: empName,
            Destination: empDestination,
            Frequency: empFrequency,
            minAway: empMinAway,
            firstTime: empFirstTime
        };

        database.ref().push(newEmp);

        console.log(newEmp.name);
        console.log(newEmp.Destination);
        console.log(newEmp.Frequency);
        console.log(newEmp.minAway);
        console.log(empFirstTime.firstTime)

        alert("Employee successfully added");

        $("#employee-name-input").val("");
        $("#Destination-input").val("");
        $("#Frequency-input").val("");
        $("#minAway-input").val("");
        $("#firstTimeInput").val("");
    });

        database.ref().on("child_added", function(childSnapshot) {
        console.log(childSnapshot.val());

        var empName = childSnapshot.val().name;
        var empDestination = childSnapshot.val().Destination;
        var empFrequency = childSnapshot.val().Frequency;
        var empMinAway = childSnapshot.val().minAway;
        var empFirstTime = chidlSanpShot.val().firstTime;

        console.log(empName);
        console.log(empDestination);
        console.log(empFrequency);
        console.log(empMinAway);
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
            $("<td>").text(empMinAway),
        );

        $("#train-table > tbody").append(newRow);
        });
