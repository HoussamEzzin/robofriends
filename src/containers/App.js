import React, {Component}from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){//get the robots from the outside world xd 
        fetch('https://jsonplaceholder.typicode.com/users')//this website provide us with an array that containes 10 objects each one have user informations
            .then(response => response.json())
            .then(users => {this.setState({ robots: users})});
    }

    onSearchChange = (event) => {//the event here is typing something in the search field
        this.setState({searchfield:event.target.value}); //updating searchfield
    }

    render(){
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{//filter the robots that match the name typed in the search field
            return robot.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
        })
        return !robots.length ?
            <h1 className='tc'>Loading...</h1> :
           (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange ={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                    
                </div>   
            );
    }
}

export default App;