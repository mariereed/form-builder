// Tree and node classes
class FormTree {
	constructor(root) {
		this.root = root;
	}
}

class FormNode {
	constructor(data, children=null) {
		// Not sure what to put here
		this.data = data;
		this.children = children || [];
	}
	// to append children --> object.push('childName')
}


// create objects when new input/subinput is added

class Input {
	constructor(question, questionType) {
		this.question = question;
		this.questionType = questionType;
	}
}

class SubInput {
	constructor(question, questionType, conditional, conditionValue) {
		this.question = question;
		this.questionType = questionType;
		this.conditional = conditional;
		this.conditionValue = conditionValue;
	}
}


// Tabs component
class Tabs extends React.Component {
    constructor(props) {
    super(props);
    this.state = {};
	}

	handleClick(e) {
    // this.props.callback(e.target.id);
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

	handleAdd(e) {
	// functionality: Add a new sub-input!
    // this.props.callback(e.target.id);
	}

	handleDelete(e) {
	// functionality: Delete this block!
    // this.props.callback(e.target.id);
	}

    render() {
        return <div className="section">
        			<div className="input">
        				<p>This is an Input!</p>

        				<form>
        					Question: <input type='text' name='question'/>
        					Type: 
        					<select name='questionType'>
        						<option value='text'>Text</option>
        						<option value='number'>Number</option>
        						<option value='yes/no'>Yes/No</option>
        					</select>
        				</form>
        				<button onClick={(e) => this.handleAdd(e)}>Add SubInput</button>
        				<button onClick={(e) => this.handleDelete(e)}>Delete</button>


        			</div>
        			<SubinputBlock />
        		</div>
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
    render() {
        return <div className="subinput">
        			<p>This is a Subinput!</p>
        			<form>
        				Condition: 
        				<select name='conditional'>
    						<option value='equals'>Equals</option>
    						<option value='greaterThan'>Greater Than</option>
    						<option value='lessThan'>Less Than</option>
    					</select>
    					<input type='text' name='conditionValue'/>
    					<br/>
    					Question: <input type='text' name='question'/>
    					Type: 
    					<select name='questionType'>
    						<option value='text'>Text</option>
    						<option value='number'>Number</option>
    						<option value='yes/no'>Yes/No</option>
    					</select>
    				</form>
        		</div>
    }
}

// Component for the entire form
class FormDisplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			addInputClicked: false
		}
	}

    render() {
        return <div className="formDisplay">
        			<p>Hiiiii this is the form display</p>
        			{
        				this.state.addInputClicked?
        				<InputBlock /> : <p>It claims to not be clicked</p>

        			}
        			<AddInput callback={()=>this.setState({addInputClicked: true})}/>
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
