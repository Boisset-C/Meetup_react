import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetup() {
  //exposes methods to manipulate browser history, for example to navigate away
  const history = useHistory();
  //firebase requires json adding meetups at the end creates a new file in database
  function addMeetupHandler(meetupData) {
    fetch(
      "https://react-meetup-fda0b-default-rtdb.firebaseio.com/meetups.json",
      {
        //data u want to store
        method: "POST",
        // converts js objects or arrays and converts them too JSON
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      //navigate "programatically" back to homepage, back button wont work using replace push would
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
