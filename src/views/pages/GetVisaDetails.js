import React from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {
  // Button,
  // NavItem,
  // NavLink,
  // Nav,
  // TabContent,
  // TabPane,
  Container,
  // Row,
  // Col,
  // UncontrolledTooltip,
} from "reactstrap";

// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import GetViasDetailsHeader from "../../components/Headers/getVisadetailsPageHeader.js";
import Carousel from "../sectionsBlock/top_visa_carousel.js";

function GetVisaDetailspage() {
  
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
      <GetViasDetailsHeader />
       

        <div className="section Country_visa_details">
              <Container>
             
              {/* flag holder */}
               
                    <h2 className="title ">Bahrain eVisa Information</h2>


                  <p> Bahrain eVisa is an electronic visa introduced in 2014 by the Government of the Kingdom of Bahrain in order to allow citizens of eligible countries to visit the country for tourism and business purposes.</p> 

                  <p>The eVisa for Bahrain is available as a single and multiple entry online visa and allows a stay from 14 to 90 days depending on its type.</p> 

                  <p> eVisa is electronically linked to the applicant's passport, so visitors no longer need to go to a Bahrain embassy to get a regular visa.</p>

                  <p> The cost of the Bahrain eVisa depends on the type of entry selected:</p>
<ul>
<li>69 Euro for a single 14-day stay</li>
<li>109 Euro for a 30-day stay with the possibility of multiple entries</li>
<li>249 Euro for a multiple-entry allowing a 90-day stay, valid for one year from the date of issue of the document.</li>
</ul>
<p>Keep reading for more information about eVisa types, prices, and application requirements.</p>  


<h2 className="title ">Required documents</h2>


<p></p>Time to apply! Citizens of all eligible countries (list above) can apply online with the following documents on hand:
<ul>
  <li>the bio-data page of your valid passport, in electronic form (a digital photo)</li>
  <li>a photo of return/onward ticket</li>
  <li>For most travelers, that's it! However, travelers from India and certain other countries are required to supply additional documentation. READ ON if you're an Indian citizen, or a citizen from any of the countries marked with *** or ** on the "Bahrain eVisa: Am I eligible?" section, above.</li>
</ul>



<p>INDIAN CITIZENS ONLY: Please provide a copy of the photo page of the applicant's passport, plus a copy of the passport last page for Indian passports.</p>

<p>IF YOUR COUNTRY IS MARKED *** in the "Bahrain eVisa: Am I eligible?" section, above, please provide: Proof of a hotel booking in Bahrain. If the traveler is staying with a relative, it may be necessary to provide a copy of the relative’s CPR Reader’s printout.</p>

<p>IF YOUR COUNTRY IS MARKED ** in the "Bahrain eVisa: Am I eligible?" section, above, please provide: Copy of a stamped bank statement under the applicant's name, covering the last three months, with a current balance of not less than the equivalent of BD300 (about USD800).</p>

<p>ALL FOREIGN NATIONALS residing in GCC countries (GCC Visa) should provide the following:</p>
<ul>
<li>Scan or digital photo of the bio-data page of the applicant's passport</li>
<li>Copy of return/onward ticket</li>
<li>Copy of a resident card from one of the GCC countries</li>

</ul>























                
               
              </Container>
            </div>


                  <Carousel />
                
        
        <DefaultFooter />
      </div>
    </>
  );
}

export default GetVisaDetailspage;
