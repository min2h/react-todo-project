import React from 'react';
import {
    ListItem, 
    ListItemText, 
    InputBase, 
    Checkbox,
    ListItemSecondaryAction,
    IconButton
} from "@material-ui/core";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";



class Todo extends React.Component{
    deleteEventHandler =()=>{
        this.delete(this.state.item);
    }
    enterkeyEventHandler =(e)=>{
        if(e.key==="Enter"){
            this.setState({readOnly:true});
        }
    }
    constructor(props){
    super(props);
    this.state={item:props.item, readOnly: true};
    this.delete = props.delete;
  }
  render(){
    const item = this.state.item;
    return (
        <ListItem>
            <Checkbox checked={item.done} disableRipple/>
            <ListItemText>
                <InputBase
                    inputProps={{"aria-label":"naked", readOnly: this.state.readOnly}}
                    onClick={this.offReadOnlyMode}
                    type = "text"
                    id={item.id} // 각 리스트 구분위함 id
                    name={item.id} // 각 리스트 구분위함 id
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>

            <ListItemSecondaryAction>
            <IconButton 
            aria-label='Delete Todo'
            onClick={this.deleteEventHandler}>
                <DeleteOutlined/>
            </IconButton>
            </ListItemSecondaryAction>
            
        </ListItem>
        
        

    )
  }
}
export default Todo;