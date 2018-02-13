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
        return <p>This is an Input!</p>
    }
}

class Subinput extends React.Component {
    render() {
        return <p>This is a Subinput!</p>
    }
}
class FormDisplay extends React.Component {
    render() {
        return <div className="formDisplay">
        			<p>Hiiiii this is the form display</p>
        			<Input />
        			<Subinput />
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
