import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{

    constructor(props){
        super(props);
        this.state={
            counterPos:0,
            counterNeut:0,
            counterNeg:0
        }

        this.increasePos = this.increasePos.bind(this)
        this.increaseNeut = this.increaseNeut.bind(this)
        this.increaseNeg = this.increaseNeg.bind(this)
    }

    increasePos(){
        this.setState({counterPos: this.state.counterPos +1})
    }
    increaseNeut(){
        this.setState({counterNeut: this.state.counterNeut +1})
    }
    increaseNeg(){
        this.setState({counterNeg: this.state.counterNeg +1})
    }

    showFeedback = () =>{
        if(this.state.counterPos === 0 && this.state.counterNeut === 0 && this.state.counterNeg === 0){
            return <p> No feedback received</p>
        }
        else{
            return(
                <div>
                    <Statistics
                        counterPos={this.state.counterPos}
                        counterNeut={this.state.counterNeut}
                        counterNeg={this.state.counterNeg}
                     />
                </div>
            )
        }
    }

   render() {
       return (
           <div>
               <h1>Please give us Feedback!</h1>
               <h2>We value your Opinion</h2>
               <div>
                   <header>How did we do today?</header>
                   <Display counter={this.state.counter} />
                   <Button handleClick={this.increasePos} text="Good"/>
                   <Button handleClick={this.increaseNeut} text="Neutral"/>
                   <Button handleClick={this.increaseNeg} text="Bad"/>
                   <h3>Statistics</h3>
                   {this.showFeedback()}
               </div>
           </div>
       )
   }

}

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>{text}</button>
)

const Statistics =({counterPos, counterNeut, counterNeg}) =>{
    return(
        <div>
            <p>Good: {counterPos}</p>
            <p>Neutral: {counterNeut}</p>
            <p>Bad: {counterNeg}</p>
            <p>Average: {(counterPos-counterNeg/(counterPos+counterNeut+counterNeg))}</p>
            <p>Positive: {(counterPos/(counterPos+counterNeg+counterNeut)*100)} %</p>
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
)