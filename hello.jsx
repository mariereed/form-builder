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


class Input extends React.Component {
    render() {
        return <div className="section">
        			<div className="input">
        				<p>This is an Input!</p>
        			</div>
        			<Subinput />
        			<Subinput />
        		</div>
    }
}

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


class Subinput extends React.Component {
    render() {
        return <div className="subinput">
        			<p>This is a Subinput!</p>
        		</div>
    }
}


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
        				<Input /> : <p>It claims to not be clicked</p>

        			}
        			<AddInput callback={()=>this.setState({addInputClicked: true})}/>
        		</div>
    }
}


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
