function Welcome(props) {
    return <h2>Welcome, {props.name}!</h2>;
}

function App() {
    return (
        <div>
            <h1>Engineering College React Demo</h1>
            <Welcome name="Kairat" />
            <Welcome name="Nurlan" />
            <Welcome name="Aidar" />
        </div>
    );
}

export default App;
