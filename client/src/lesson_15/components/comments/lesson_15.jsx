import * as React from 'react';
import { ajax} from "../../utils/ajax";
import './lesson_15.scss';
const URL = 'https://evening-dawn-11092.herokuapp.com/comments';

export class Сomments extends React.Component {
    constructor() {
        super();
        this.state = {
            list: [],
            text: '',
            name: '',
        };

        ajax.get(URL, (resp) => {
            this.setState({list: resp});
            });
        }
        addComment(comment) {
            this.setState({
                name: '',
                text: '',
                list: this.state.list.concat([comment])
            })
        }

        submitForm(e) {
            e.preventDefault();
            ajax.post(URL, {name: this.state.name, text: this.state.text}, (resp) => {
            this.addComment(resp);
            })
        }
        inputHandlerName(e) {
        const target = e.target;
        console.log(target.value);
            this.setState({
            list: this.state.list,
            name: target.value
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
                <div className="Comment__name">{item.name}</div>
                <div className="Comment__comment">{item.text}</div>
                <span className="Comment__time">{item.date}</span>
            </div>;
            listItems.push(li);
        });

        return <div className="wrapper">
            <div className="Input-Section">
                <form className="Section" onSubmit={this.submitForm.bind(this)}>
                    <input type="text" className="Section__name" onInput={this.inputHandlerName.bind(this)}/>
                    <input type="text" className="Section__comments" onInput={this.inputHandlerText.bind(this)}/>
                    <button className="Section__Button">Add comments</button>
                </form>
            </div>
            { listItems }
        </div>

    }
}
