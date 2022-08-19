import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Container } from 'reactstrap';
import IPageProps from '../interfaces/page';
import "./home.css"

const HomePage: React.FunctionComponent<IPageProps> = props => {
    return (
        <Container>
            <Card className="card">
                <CardBody>
                    <h3>
                        Welcome to this page by Friebase auth!
                    </h3>
                    <p>
                        Change your password <Link to="/change">here</Link>.
                    </p>
                    <p>
                        <button className="custom-btn btn-16" >
                            <Link to='/logout'>Logout</Link>
                        </button>
                    </p>
                </CardBody>
            </Card>
        </Container>
    );
}

export default HomePage;