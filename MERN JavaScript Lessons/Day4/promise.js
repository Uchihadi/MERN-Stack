function getTrip(location) {
    return new Promise(function(resolve, reject) {
      if (location == "ooty") {
          resolve("Trip to " + location);
      } else {
        reject(Error("Some error occured"));
      }
    });
  }

  getTrip("ooty").then(
    function(data) {
      console.log(data);
    },
    function(error) {
      console.log(error);
    }
  );
  // Trip to ooty

  getTrip("coorg").then(
    function(data) {
      console.log(data);
    },
    function(error) {
      console.log(error.message);
    }
  );
  // Error: Some error occurred
  