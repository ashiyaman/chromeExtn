//add toggle button and change the state of component when toggled
//to display strike and + onToggle otherwise none and cross
import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import IconButton from 'material-ui/IconButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const styles = {
  block: {
     maxWidth: 150,
    marginLeft:"auto",
    marginRight:"auto"
  },
  checkbox: {
    marginBottom: 16, 
  },
  labelStyle:{
    color:"#FFFFFF",
    textDecoration:"none"
  },
  iconStyle:{
          fill:"#FFFFFF",
  },
  iStyle:{
    fill:"#FFFFFF",
    display:"inline",
    float:"left"
  },
  parent:{
    display:"flex",
  }
};
class SeeTodo extends React.Component{

  constructor(props){
    super(props);
  }

  checkedBox(){
    let lblDeco = this.labelStyle.textDecoration;
    if (lblDeco === "none"){
      this.labelStyle.textDecoration="line-through";
    }
    else{
      this.labelStyle.textDecoration="none";
    }
    
  }

  btnTapped(){
    //alert("remove todo button tapped");
    this.props.doneTodo();
  }

render(){
  
  return(
    <div className={styles.parent}>
    <div style={styles.block}>
    <h1>TODAY</h1>
    <Checkbox
      label={this.props.todoSaved}
      style={styles.checkbox}
      labelStyle={styles.labelStyle}
      iconStyle={styles.iconStyle}
      onCheck={this.checkedBox}
      
    />
    <IconButton onClick={()=>this.btnTapped()} iconStyle={styles.iStyle}>
      <ContentAdd />
    </IconButton>
    </div>
    

    </div>   
  );
}

        
}

export default SeeTodo;

