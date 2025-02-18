import Child from "./Child";

function Parent() {
    const message = "Hello from Parent!";

    return (
        <div>
            <h2>Parent Component</h2>
            <Child message={message} />
        </div>
    );
}

export default Parent;
