import React from 'react';
import TextField from 'material-ui/TextField';
import {orange500, blue500} from 'material-ui/styles/colors';

const styles = {
 
  underlineStyle: {
    borderColor: orange500,
  },
  widthStyle:{
    width:"400px",
  },
  inputStyle:{
    color:"#FFFFFF"
  }
};


class AddTodo extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            todo:''
        }
    }

     handleSubmit=(e)=>{
         e.preventDefault();
        this.props.addedTodo(this.state.todo);
 }
    onInputChanged(term){
        this.setState({todo:term})
    }
    render(){
        return(
            <div>
     <h1>What is your main focus for today?</h1>
    <form onSubmit={this.handleSubmit}>     
     <TextField
            id="1"
       underlineStyle={styles.underlineStyle}
       style={styles.widthStyle}
       hintStyle={styles.hintStyle}
       inputStyle={styles.inputStyle}
       onChange={(e)=>this.onInputChanged(e.target.value)}
     />
     </form>  
    </div>   
        );
    }
};

export default AddTodo;