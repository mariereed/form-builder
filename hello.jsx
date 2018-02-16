// Tabs component
class Tabs extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
	}

	handleClick(e) {
    // this.props.callback(e.target.id);
    // Not yet made the tabs functional
	}

    render() {
		return <div className="tabs">
					<button onClick={(e) => this.handleClick(e)}>This Is A Tab!</button>
					<button onClick={(e) => this.handleClick(e)}>This is a tab too</button>
					<button onClick={(e) => this.handleClick(e)}>this is also a tab</button>
				</div>
    }
}

// Component for the physical input block
class InputBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodeChildren: 0,
            questionType: '',
            question: '',
        }
        this.handleInputType = this.handleInputType.bind(this);
        this.handleInputQuestion = this.handleInputQuestion.bind(this);
    }

    handleInputType(e) {
        this.setState({questionType: e.target.value});
        console.log(this.state.questionType);
    }

    handleInputQuestion(e) {
        this.setState({question: e.target.value});
        console.log(this.state.question);
    }

    render() {

        let inputArray = []
        for ( let i = 0; i < this.state.nodeChildren; ++i) {
            inputArray.push(<SubinputBlock type={this.state.questionType}/>);
        }

        return <div className="section">
        			<div className="input">
        				<p>This is an Input!</p>

        				<form>
        					Question: <input type='text' name='question' value={this.state.question} onChange={this.handleInputQuestion}/>
        					Type: 
        					<select name='questionType' value={this.state.questionType} onChange={this.handleInputType}>
        						<option value=''>--</option>
                                <option value='text'>Text</option>
        						<option value='number'>Number</option>
        						<option value='yes/no'>Yes/No</option>
        					</select>
        				</form>
        				<AddSubInput callback={()=>this.setState({nodeChildren: this.state.nodeChildren +1})}/>
        				<DeleteInput />
        			</div>
                    {
                        this.state.nodeChildren?
                        inputArray : null
                    }
        		</div>
    }
}

class AddSubInput extends React.Component {
	handleClick(e) {
		this.props.callback();
	}

	render() {
		return <button onClick={(e) => this.handleClick(e)}>Add Sub-Input</button>

	}
}

class DeleteInput extends React.Component {
	handleClick(e) {
		this.props.callback();
	}

	render() {
		return <button onClick={(e) => this.handleClick(e)}>Delete</button>
	}
}

// This is the actual Add Input button component
class AddInput extends React.Component {
	handleClick(e) {
		this.props.callback();
	}

	render() {
		return <div className="addInput">
					<button onClick={(e) => this.handleClick(e)}>Add Input</button>
				</div>
	}
}

// Component for the physical subinput block
class SubinputBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodeChildren: 0,
        }
    }

    render() {

        let inputArray = []
        for ( let i = 0; i < this.state.nodeChildren; ++i) {
            inputArray.push(<SubinputBlock />);
        }

        return <div className="section">
                <div className="subinput">
        			<p>This is a Sub-Input of type: {this.props.type}!</p>
                    {
                        this.props.type == 'text'?
                        console.log(true): console.log(false)
                    }
        			<form>
        				Condition: 
        				<select name='conditional'>
                            <option value=''>--</option>
    						<option value='equals'>Equals</option>
    						<option value='greaterThan'>Greater Than</option>
    						<option value='lessThan'>Less Than</option>
    					</select>
    					<input type='text' name='conditionValue'/>
    					<br/>
    					Question: <input type='text' name='question'/>
    					Type: 
    					<select name='questionType'>
                            <option value=''>--</option>
    						<option value='text'>Text</option>
    						<option value='number'>Number</option>
    						<option value='yes/no'>Yes/No</option>
    					</select>
    				</form>
                    <AddSubInput callback={()=>this.setState({nodeChildren: this.state.nodeChildren +1})}/>
                    <DeleteInput />
        		</div>
                {
                    this.state.nodeChildren?
                    inputArray : null
                }
            </div>
    }
}

// Component for the entire form
class FormDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            childrenOfRoot: 0
		}
	}

    render() {

        let inputArray = []
        for (let i=0; i < this.state.childrenOfRoot; ++i) {
            inputArray.push(<InputBlock />)
        }

        return <div className="formDisplay">
        			<p>This is the form display</p>
        			{
        				this.state.childrenOfRoot?
        				inputArray : null

        			}
        			<AddInput callback={()=>this.setState({childrenOfRoot: this.state.childrenOfRoot + 1})}/>
        		</div>
    }
}

// Component for the entire page
class Container extends React.Component {
    render() {
        return <div>
        			<Tabs />
        			<FormDisplay />
        		</div>
    }
}


ReactDOM.render(
    <Container />,
    document.getElementById("root")
);
