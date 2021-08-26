import React from "react";

// reactstrap components
import { 
  Card,
  CardBody,
  Col,
  Button, 
  Container, 
  Row,
  Form,
  Input,
  FormGroup,
  // InputGroupAddon,
  Label,
  // InputGroupText,
  // InputGroup,
  CardHeader, 
} from "reactstrap";

// core components

function GetViasDetailsHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("../../assets/img/bg6.jpg").default + ")",
          }}
          ref={pageHeader}
        ></div>
        <div className="content-center ">
          <Container>
            <Row>
<Col md="6">

<Card  className="text-dark ">
  <CardHeader>
  <h4 className="text-uppercase">APPLY FOR Armenia VISA ONLINE</h4>

  </CardHeader>
<Form action="" className="form" method="">                 
                  <CardBody>
                    
                    <FormGroup>
        <Label for="exampleSelect">Purpose for travelSelect purpose</Label>
        <Input type="select" name="select" id="exampleSelect" className="rounded-0">
          <option>Single entry  (14 days)</option>
          <option>Multiple entry (30 days)</option>
          <option>Multiple entry (90 days)</option>       
        </Input>
      </FormGroup>
      <Button color="primary" className="btn-block text-uppertcase">Apply Online</Button>{' '}


                  </CardBody>
                </Form>
</Card>


</Col>
<Col md="6" className="text-left">
<h1 className="title">Armenia</h1>
<h5>eVisa Application</h5>
</Col>

            </Row>
           
            
          </Container>
        </div>
      </div>
    </>
  );
}

export default GetViasDetailsHeader;
