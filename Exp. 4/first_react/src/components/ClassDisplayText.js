import React, { Component } from "react";
class ClassDisplayText extends Component {
    render() {
        return (
            <div className="contain2">
                <h1>React Class Component Example</h1>

                <h2><i>Welcome to React!</i></h2>
                <h3>This is a simple class component displaying static text.</h3>
                <p className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        );
    }
}
export default ClassDisplayText;