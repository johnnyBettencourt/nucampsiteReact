import { Container, Row, Col } from "reactstrap";
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsiteList from "../features/campsites/CampsitesList";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import { useState } from "react";

const CampsitesDirectoryPage = () => {
    const [campsiteId, setCampsiteId] = useState(0);
    const selectedCampsite = selectCampsiteById(campsiteId);

    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <CampsiteList setCampsiteId={setCampsiteId}/>
                </Col>
                <Col sm='7' md='5'>
                    <CampsiteDetail campsite={selectedCampsite} />
                </Col>
            </Row>
        </Container>
    )
};

export default CampsitesDirectoryPage;