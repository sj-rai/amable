import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'
import { ReactComponent as Fruit } from './fruit.svg';
import { ReactComponent as Pill } from './pill.svg';
import { ReactComponent as Register} from './register.svg'
import { Link} from 'react-router-dom'

export default class MapComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
        this.buttonClick = this.buttonClick.bind(this);
    }
    componentDidMount() {
    }
    buttonClick() {
        this.setState({clicked: true})
        console.log("[]")
        
    }
    render() {
        return(
                <div className = "card-out">
                     <div className = "card-border">
                        <CardDeck>
                        <Card border="primary" style={{ width: '20rem', height: '16rem' }} bg="dark" text="white"> 
                            {/* <Card.Header as="h5">Header</Card.Header> */}
                            {/* <Fruit width={50} height={50} align="center"/> */}
                            {/* <Card.Img variant="top" src={fruit} alt="Fruit" /> */}
                            <Card.Body style={{ paddingTop: '-80px' }} >
                                <Fruit width={50} height={100} fill='#fff'/>
                                <Card.Title>Donate</Card.Title>
                                <Card.Text>
                                Aashruthi is looking for Food Items
                                </Card.Text>
                                <Link to={{pathname:'/',  search: '?lng=75.200343&lat=12.76665',}}>
                                    <Button  variant="primary">Donate</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    {/* </div> */}
                        <Card border="primary" style={{ width: '20rem', height: '16rem' }} bg="dark" text="white"> 
                            {/* <Card.Header as="h5">Header</Card.Header> */}
                            {/* <Fruit width={50} height={50} align="center"/> */}
                            {/* <Card.Img variant="top" src={fruit} alt="Fruit" /> */}
                            <Card.Body style={{ paddingTop: '-80px' }} >
                                <Pill width={50} height={100} fill='#fff'/>
                                <Card.Title>Donate</Card.Title>
                                <Card.Text>
                                Sanjoth is requesting for paracetamol tablets
                                </Card.Text>
                                {/* <Button onClick={this.buttonClick} variant="primary">Request</Button> */}
                                <Link to={{pathname:'/',  search: '?lng=75.200343&lat=12.76665',}}>
                                    <Button  variant="primary">Donate</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <Card border="primary" style={{ width: '20rem', height: '16rem' }} bg="dark" text="white"> 
                            {/* <Card.Header as="h5">Header</Card.Header> */}
                            {/* <Fruit width={50} height={50} align="center"/> */}
                            {/* <Card.Img variant="top" src={fruit} alt="Fruit" /> */}
                            <Card.Body style={{ paddingTop: '-80px' }} >
                                <Register width={50} height={100} fill='#fff'/>
                                <Card.Title>Contact for Job</Card.Title>
                                <Card.Text>
                                Aashruthi is looking for people for job
                                </Card.Text>
                                <Link to={{pathname:'/',  search: '?lng=77.580343&lat=12.985555',}}>
                                    <Button  variant="primary">Request</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                    </div>
                    <div className = "card-border">
                    <CardDeck>
                        <Card border="primary" style={{ width: '20rem', height: '16rem' }} bg="dark" text="white"> 
                            {/* <Card.Header as="h5">Header</Card.Header> */}
                            {/* <Fruit width={50} height={50} align="center"/> */}
                            {/* <Card.Img variant="top" src={fruit} alt="Fruit" /> */}
                            <Card.Body style={{ paddingTop: '-80px' }} >
                                <Pill width={50} height={100} fill='#fff'/>
                                <Card.Title>Request</Card.Title>
                                <Card.Text>
                                Prakriti is donating medicines
                                </Card.Text>
                                <Link to={{pathname:'/',  search: '?lng=75.580343&lat=12.985555',}}>
                                    <Button  variant="primary">Request</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    {/* </div> */}
                        <Card border="primary" style={{ width: '20rem', height: '16rem' }} bg="dark" text="white"> 
                            {/* <Card.Header as="h5">Header</Card.Header> */}
                            {/* <Fruit width={50} height={50} align="center"/> */}
                            {/* <Card.Img variant="top" src={fruit} alt="Fruit" /> */}
                            <Card.Body style={{ paddingTop: '-80px' }} >
                                <Pill width={50} height={100} fill='#fff'/>
                                <Card.Title>Donate</Card.Title>
                                <Card.Text>
                                Anjana is looking for medicines
                                </Card.Text>
                                {/* <Button onClick={this.buttonClick} variant="primary">Request</Button> */}
                                <Link to='/'>
                                <Link to={{pathname:'/',  search: '?lng=77.580343&lat=12.985555',}}>
                                    <Button  variant="primary">Donate</Button>
                                </Link>
                                </Link>
                            </Card.Body>
                        </Card>
                        <Card border="primary" style={{ width: '20rem', height: '16rem' }} bg="dark" text="white"> 
                            {/* <Card.Header as="h5">Header</Card.Header> */}
                            {/* <Fruit width={50} height={50} align="center"/> */}
                            {/* <Card.Img variant="top" src={fruit} alt="Fruit" /> */}
                            <Card.Body style={{ paddingTop: '-80px' }} >
                                <Fruit width={50} height={100} fill='#fff'/>
                                <Card.Title>Request</Card.Title>
                                <Card.Text>
                                Prakriti is donating Food
                                </Card.Text>
                                <Link to={{pathname:'/',  search: '?lng=77.580343&lat=12.985555',}}>
                                    <Button  variant="primary">Request</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                       
                    </CardDeck>
                    </div>
                    
                    {/* attributions */}
                    {/* <div>Icons made by <a href="https://creativemarket.com/eucalyp" title="Eucalyp">Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/kiranshastry" title="Kiranshastry">Kiranshastry</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                </div>      
        )
    }
}
