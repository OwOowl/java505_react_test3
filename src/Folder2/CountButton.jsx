import React from "react";
import Button from "react-bootstrap/Button";


class CountButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }

        // 객체 멤버변수 count 선언
        this.count = this.state.count;
    }

    countUp = () => {
        this.count = this.count + 1;
        // setState() 함수를 실행해야만 state 값이 수정되고, state 값이 ㅣ수정되면 render() 함수가 재실행됨
        this.setState({
            count: this.count
        });
        console.log('+ 사용 후 this.count : ' + this.count);
    }

    countDown = () => {
        this.count = this.count - 1;
        this.setState({
            count: this.count
        });
        console.log('- 사용 후 this.count : ' + this.count);
    }

    render() {
        return(
            <div>
                <label className={"form-label"}>count : <span>{this.count}</span></label>
                <Button variant={"primary"} onClick={this.countUp}> + </Button>
                <Button variant={"success"} onClick={this.countDown}> - </Button>
            </div>
        );
    }
}


export default CountButton;