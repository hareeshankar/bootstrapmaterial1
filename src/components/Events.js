import React from "react";
import EItem from "./EItem.js";
import { Container, Row, Col } from "react-bootstrap";

class Events extends React.Component {
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
    return (
      <Container>
        <Row>
          {this.state.events.map(event => (
            <Col>
              <EItem key={event.id} event={event} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
export default Events;
