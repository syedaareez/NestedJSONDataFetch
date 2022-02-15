import React from 'react';
class Data extends React.Component {
    
    constructor(props){
    super(props);
      this.state = {
          dataFetched:[],
        }
        
        this.fetchData=this.fetchData.bind(this);
        this.all_children=this.all_children.bind(this);
      }
    fetchData(){
        var self=this;
        
        fetch("https://raw.githubusercontent.com/syedaareez/metaSample/main/db.json")
            .then(res=>res.json())
            .then(data=>this.setState({dataFetched:data,}))
        
        
    }
    
    componentDidMount(){
        this.fetchData();
    }
    all_children(data){
        var all_data=data;
        var element="";
        var self=this;
        var j=0;
        var main=j;
        function loopChildren(all_data){
            var temp=j;
            for(var i=0;i<all_data.length;i++){
                element+=`<h3>${j} ${all_data[i].name}</h3>`;
                if(all_data[i].child[0]){
                    j+=1;
                    loopChildren(data=all_data[i].child);
                }
                j=temp;
            }
            
        }
        loopChildren(all_data);
        var div=document.querySelector(".AllData");
        if(div){
            div.innerHTML=element;
        }
    }
    
    render(){
        var alldata=this.state.dataFetched;
        this.all_children(alldata);
        
            return(
                <>
                <div className="AllData"></div>
                </>
            )
        }
}
export default Data;
