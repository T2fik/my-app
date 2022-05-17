import { useState, useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";

function Listing() {
  const [usersList, setUsers] = useState([]);

  useEffect(() => {
    users();
  }, []);

  const users = async () => {
    fetch("https://dummyapi.io/data/v1/user?limit=10", {
      method: "GET",
      headers: {
        "app-id": "6283b42903ea38d5203c5ce9",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
      });
  };

  return (
    <div>
      <Row xs={1} md={2} className="g-4">
        {usersList.map((record) => {
          return (
            <Col key={record.id}>
              <Card>
                <Card.Img variant="left" src={record.picture}/>
                <Card.Body>
                  <Card.Title>
                  {record.title} {record.firstName} {record.lastName}
                  </Card.Title>
                  <Card.Text></Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Listing;
