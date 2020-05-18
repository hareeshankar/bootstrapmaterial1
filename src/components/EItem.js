import React from "react";
import { Card } from "react-bootstrap";

class EItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          eventname: "Ramesh Wedding",
          eventdate: "2020-05-15",
          eventloc: "Chennai",
          eventdes: "Event is on 15th may evening 7pm at Temple Bay",
          userId: "shambo",
          id: "3"
        },
        {
          eventname: "Suresh Wedding",
          eventdate: "2020-05-15",
          eventloc: "Chennai",
          eventdes: "Event is on 15th may evening 7pm at Temple Bay",
          userId: "shambo",
          id: "2"
        },
        {
          eventname: "Rajesh Wedding",
          eventdate: "2020-05-15",
          eventloc: "Chennai",
          eventdes: "Event is on 15th may evening 7pm at Temple Bay",
          userId: "shambo",
          id: "1"
        }
      ]
    };
  }

  render() {
    const {
      eventname,
      eventdate,
      eventloc,
      eventdes,
      userId,
      id
    } = this.props.event;

    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>{eventname}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {eventdate} , {eventloc}
            </Card.Subtitle>
            <Card.Text>{eventdes}</Card.Text>
            <Card.Link href="#">Edit</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default EItem;
