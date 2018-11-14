import * as React from 'react';
import { ajax} from "../../utils/ajax";
import './lesson_15.scss';
const URL = 'http://localhost:4001/comments';

export class Сomments extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            text: '',
            author: '',
        };

        ajax.get(URL, (resp) => {
            this.setState({list: resp});
            });
        }
        addComment(comment) {
            this.setState({
                author: '',
                text: '',
                list: this.state.list.concat([comment])
            })
        }

        submitForm(e) {
            e.preventDefault();
            ajax.post(URL, {author: this.state.author, text: this.state.text}, (resp) => {
            this.addComment(resp);
            })
        }
        inputHandlerName(e) {
        const target = e.target;
        console.log(target.value);
            this.setState({
            list: this.state.list,
            author: target.value
            });
        }
        inputHandlerText(e) {
        const target = e.target;
        console.log(target.value);
            this.setState({
            list: this.state.list,
            text: target.value
            });
        }

    render(){
        const listItems = [];

        this.state.list.forEach((item) => {
            const li = <div className="Comments">
                <div className="Comment__author">{item.author}</div>
                <div className="Comment__comment">{item.text}</div>
                <span className="Comment__time">{item.date}</span>
            </div>;
            listItems.push(li);
        });

        return <div className="wrapper">
            <div className="Input-Section">
                <form className="Section" onSubmit={this.submitForm.bind(this)}>
                    <input type="text" className="Section__author" onInput={this.inputHandlerName.bind(this)}/>
                    <input type="text" className="Section__comments" onInput={this.inputHandlerText.bind(this)}/>
                    <button className="Section__Button">Add comments</button>
                </form>
            </div>
            { listItems }
        </div>

    }
}
