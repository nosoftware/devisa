import React, { useState, useEffect } from "react";
import { config } from '../../constant';
import axios from "axios";

// import {
//   // Button,
//   Container,
//   Row,
//   Col,
//   Media,
// } from "reactstrap";

//const getPageContentUrl = "http://localhost/admin/api/get-page";
//const getPageContentUrl = "http://my-demo.xyz/visa/api/get-page";
const getPageContentUrl = config.url.API_URL+"/get-page";

function HomeContent() {
	const [pageContent, setPageContentData] = useState('content');

	const getPageContentWithAxios = async () => {
		const res = await axios.get(getPageContentUrl,{ params: { page: 'home' }});
		//console.log(response);
		const pageContent = res.data.content;
		setPageContentData(pageContent);
		//console.log(pageContent);
	};

	useEffect(() => {
		getPageContentWithAxios();
	}, []);
	
	return (
    <>
		<div className="section section-step" dangerouslySetInnerHTML={{ __html: pageContent[0].content }}></div>
		<div className="section section-step" >

		{/* <Container>
    <Row>
      <Col md="6">
      <h2 className="title text-uppercase">Apply for your visa in
        3 easy steps</h2>
      <p> To apply online, use any working device with an internet connection. Make sure you meet all of the requirements specified for each destination and your country of origin.
        
        Once you have the necessary documents ready, select the destination you want to go to on the left-hand bar. Then follow these steps to complete your application: </p>
      <p className="p-3 bg-primary text-white"> Please note that these are the basic requirements. Each country can have different visa requirements to meet before making the application. In some cases, you may need to attach some additional documents or a photograph. </p>
      </Col>
      <Col md="6">
      <Media list>
      <Media tag="li">
      <Media left middle href="#" className="align-self-center mr-3">
      <Media object src={require("../../assets/img/list1-icon.png").default} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading> Fill the application form </Media>
        Provide your data, e-mail address, passport details, the purpose of your travel, and any other required information. Attach additional documents if the destination you chose requires this. </Media>
      </Media>
      <Media tag="li">
      <Media left middle href="#" class="align-self-center mr-3">
      <Media object src={require("../../assets/img/list2-icon.png").default} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading> Register an online payment </Media>
        Pay the handling visa fee using any of the available methods of online payment. Once your payment is registered, move on to the next step </Media>
      </Media>
      <Media tag="li">
      <Media left middle href="#" class="align-self-center mr-3">
      <Media object src={require("../../assets/img/list3-icon.png").default} alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading> Check your inbox </Media>
        Immediately after the application approval, the eVisa arrives in your e-mail box. Make sure to put the correct one in the form to receive your permit without issues or delays. </Media>
      </Media>
      </Media>
      </Col>
    </Row>
  </Container> */}
		</div>

    </>
  );
}

export default HomeContent;

