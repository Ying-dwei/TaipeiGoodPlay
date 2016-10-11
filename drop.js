import React from 'react';
import ReactDOM from 'react-dom';


const {Component} = React;
//type:  breakfast 景點viewpoint 飯店hotel   餐廳 dining hall
let all_shops = [
        {id:'bf1',classN:'breakfast',name:'tsi_chen',chinese:'至誠豆漿',mT:'1102px',mL:'1954px'},
        {id:'bf2',classN:'breakfast',name:'fu_hun',chinese:'阜杭豆漿',mT:'2096px',mL:'1923px'},
        {id:'bf3',classN:'breakfast',name:'haw_tsi',chinese:'好初早餐',mT:'2289px',mL:'1095px'},
        {id:'bf4',classN:'breakfast',name:'chen_gan',chinese:'陳根找茶',mT:'2215px',mL:'2368px'},
        {id:'bf5',classN:'breakfast',name:'fuonsanhaw',chinese:'豐盛號',mT:'1368px',mL:'1950px'},
        {id:'bf6',classN:'breakfast',name:'jiaw_chaon',chinese:'找。餐店',mT:'2283px',mL:'2148px'},
        {id:'bf7',classN:'breakfast',name:'LOCO_FOOD',chinese:'樂口福',mT:'1859px',mL:'1984px'},
        {id:'vp1', classN:'viewpoint',name:'National_Palace_Museum',chinese:'故宮',mT:'1132px',mL:'2289px'},
        {id:'vp2', classN:'viewpoint',name:'longshan_temple',chinese:'龍山寺',mT:'2252px',mL:'1417px'},
        {id:'vp3', classN:'viewpoint',name:'Xingtian_temple',chinese:'行天宮',mT:'1707px',mL:'1980px'},
        {id:'vp4', classN:'viewpoint',name:'Tianyuan_temple',chinese:'無極天元宮',mT:'173px',mL:'2619px'},
        {id:'vp5', classN:'viewpoint',name:'Flower_Jade_Markets',chinese:'建國花/玉市',mT:'2055px',mL:'2054px'},
        {id:'vp6', classN:'viewpoint',name:'Taipei_101',chinese:'台北101',mT:'2157px',mL:'2360px'},
        {id:'vp7', classN:'viewpoint',name:'Maokong',chinese:'貓空',mT:'3235px',mL:'2679px'},
        {id:'vp8', classN:'viewpoint',name:'Yangmingshan',chinese:'陽明山國家公園',mT:'673px',mL:'2115px'},
        {id:'vp9', classN:'viewpoint',name:'Shilin_Night_Market',chinese:'士林夜市',mT:'1377px',mL:'1829px'},
        {id:'vp10',classN:'viewpoint',name:'Raohe_Night_Market',chinese:'饒河夜市',mT:'1936px',mL:'2627px'},
        {id:'vp11',classN:'viewpoint',name:'Tonghua_Night_Market',chinese:'通化夜市',mT:'2200px',mL:'2228px'},
        {id:'vp12',classN:'viewpoint',name:'Gongguan _Night_Market',chinese:'公館夜市',mT:'2422px',mL:'1888px'},
        {id:'vp13',classN:'viewpoint',name:'NTNU_Night_Market',chinese:'師大夜市',mT:'2295px',mL:'1951px'},
        {id:'vp14',classN:'viewpoint',name:'Ningxia_Night_Market',chinese:'寧夏夜市',mT:'1747px',mL:'1684px'},
        {id:'vp15',classN:'viewpoint',name:'NanJiChang_Night_Market',chinese:'南機場夜市',mT:'2168px',mL:'1666px'},
        {id:'vp16',classN:'viewpoint',name:'Ximending',chinese:'西門町',mT:'2093px',mL:'1626px'},
        {id:'vp17',classN:'viewpoint',name:'Yongkang_Street',chinese:'永康街',mT:'2207px',mL:'1949px'},
        {id:'vp18',classN:'viewpoint',name:'Songshan_Tobacco_Factory',chinese:'松山菸場',mT:'1973px',mL:'2348px'},
        {id:'vp19',classN:'viewpoint',name:'Dihua_Street',chinese:'迪化街',mT:'1831px',mL:'1688px'},
        {id:'vp20',classN:'viewpoint',name:'TFAM',chinese:'北美館',mT:'1615px',mL:'1862px'},
        {id:'vp21',classN:'viewpoint',name:'The_Lin_Family_Garden',chinese:'林家花園',mT:'2547px',mL:'900px'},
        {id:'vp22',classN:'viewpoint',name:'Danshuei_Old_Street',chinese:'淡水老街',mT:'76px',mL:'665px'},
        {id:'vp23',classN:'viewpoint',name:'Fishermans_Wharf',chinese:'漁人碼頭',mT:'14px',mL:'571px'},
        {id:'vp24',classN:'viewpoint',name:'Beitou_Park',chinese:'北投公園',mT:'665px',mL:'1854px'},
        {id:'vp25',classN:'viewpoint',name:'Beitou_Market',chinese:'北投市場',mT:'757px',mL:'1792px'},
        {id:'vp26',classN:'viewpoint',name:'Beitou_Hot_Spring',chinese:'北投溫泉',mT:'342px',mL:'2180px'},
        {id:'vp27',classN:'viewpoint',name:'Fort_San_Domingo',chinese:'紅毛城',mT:'29px',mL:'690px'},
        {id:'vp28',classN:'viewpoint',name:'Guang_Hua_Computer_Market',chinese:'光華商場',mT:'1977px',mL:'1953px'},
        {id:'vp29',classN:'viewpoint',name:'Green_Pool',chinese:'碧潭',mT:'3060px',mL:'1905px'},
        {id:'vp30',classN:'viewpoint',name:'NTU',chinese:'台灣大學',mT:'2377px',mL:'2020px'},
        {id:'ht1',classN:'hotel',name:'Grand',chinese:'圓山大飯店',mT:'1443px',mL:'1985px'},
        {id:'ht2',classN:'hotel',name:'Sheraton',chinese:'喜來登飯店',mT:'2050px',mL:'1865px'},
        {id:'ht3',classN:'hotel',name:'W',chinese:'W hotel',mT:'2093px',mL:'2445px'},
        {id:'ht4',classN:'hotel',name:'Regent',chinese:'晶華酒店',mT:'1843px',mL:'1860px'},
        {id:'ht5',classN:'hotel',name:'Brother',chinese:'兄弟大飯店',mT:'1860px',mL:'2138px'},
        {id:'ht6',classN:'hotel',name:'Okura',chinese:'大倉久和',mT:'1691px',mL:'1853px'},
        ];

let placeholder = document.createElement("div");
placeholder.className = "placeholder";

class  TodoApp extends Component{
  
  constructor(){
    super();
    this.state = {
        arr_10:['record','','','','','','','','','',''],
        man :''
    }
  }
  
  dragStart(e) {
    this.dragged = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData("text/html", e.currentTarget);


    
  }
  dragEnd(e){
    this.dragged.style.display = "block";
    this.dragged.parentNode.removeChild(placeholder);
    // Update data
    let data = this.state.data;
    let from = Number(this.dragged.dataset.id);
    let to = Number(this.over.dataset.id);
    if(from < to) to--;
    if(this.nodePlacement == "after") to++;
    data.splice(to, 0, data.splice(from, 1)[0]);
    this.setState({data: data});
  }
  dragLeave(e){
    e.preventDefault();
    console.log(e.target.id);
    let sq = document.getElementById(e.target.id);
    sq.style.backgroundColor = '#eee';
   // e.target.style.backgroundColor = '#eee';     
  }
  dragOver(e){
    e.preventDefault();
    console.log(e.target.id);
    // e.target.style.backgroundColor = '#111';  
    // if (this.state.arr_10) {};

    let sq = document.getElementById(e.target.id);
    sq.style.backgroundColor = 'lightblue';

    return;

    var the_sq = document.getElementById(e.target.id);
    the_sq.style.backgroundColor = '#111';    
    this.dragged.style.display = "none";
    if(e.target.className == "placeholder") return;
    this.over = e.target;
    // Inside the dragOver method
    let relY = e.clientY - this.over.offsetTop;
    let height = this.over.offsetHeight / 2;
    let parent = e.target.parentNode;
    
    if(relY > height) {
      this.nodePlacement = "after";
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    }
    else if(relY < height) {
      this.nodePlacement = "before"
      parent.insertBefore(placeholder, e.target);
    }
  }

  kk_start(e){
        console.log(this.refs[e.target.id].outerText);
        let txt = this.refs[e.target.id].outerText;
        this.setState({man:txt});
   } 
  kk_end(e){
//     let kk= document.getElementById('kk');
//     console.log(kk.style.left)
     console.log(e.clientX);
     console.log(e.clientY);
     
     let axisX = e.clientX;
     let axisY = e.clientY;

     if ( (axisX > 390)||(axisY>230)||(axisY< 70) ) {
        return;
     };
     let domi_sq; 
     if (axisY<140 ) {
        domi_sq= Math.floor( (axisX-10)  /70)+1;
         domi_sq = (domi_sq>5)? 5:domi_sq;
     }else{
        domi_sq= Math.floor( (axisX-10)  /70)+1;
     domi_sq = (domi_sq>5)? 5:domi_sq;
     domi_sq+=5;
     };
     let num = parseInt(domi_sq);
     console.log(this.state);

     this.state.arr_10[num] = this.state.man ;

     let sq = document.getElementById(num);
     sq.style.backgroundColor = '#eee';


     show();
     // this.setState({arr_10:})

     // let p = this.getState();
     // arr_10[num] = this.state.man;
     // this.setState({arr_10:this.state.man});
     console.log('domi_sq:'+domi_sq);

     // kk.style.left = e.clientX +document.body.scrollLeft +'px';
     // kk.style.top = e.clientY  +document.body.scrollTop +'px';
    
  }
 
  kk_click(e){
    let kk = document.getElementById(e.target.id);

    document.onmousemove=move;  
    document.onmousedown =putdownT;  

    function move(e){
        // kk.style.left=(e.clientX + document.body.scrollLeft )+"px";    
        // kk.style.top=(e.clientY + document.body.scrollTop )+"px";
        kk.style.left=(e.clientX + document.body.scrollLeft )+"px";    
        kk.style.top=(e.clientY + document.body.scrollTop )+"px";
    }
    function putdownT(){
        document.onmousemove=null; 

    }
  }
  scroller(){
    console.log(document.body.scrollLeft);
  }

  render(){
    return (
      <div onScroll={this.scroller} >
           <div className={"region_fixed"}
                onDragOver={this.dragOver}
                style={{padding:"5px"}}  
                >
                <div>台北好好玩</div>
                <div className={"squares_0"}>早餐</div>
                <div className={"squares_0"}>早晨</div>
                <div className={"squares_0"}>下午</div>
                <div className={"squares_0"}>晚間</div>
                <div className={"squares_0"}>飯店</div>
                <div className={"squares_1"}></div>
                <div id="1" className={"squares"}
                    onDragLeave={this.dragLeave}>{this.state.arr_10[1]}</div>
                <div id="2" className={"squares"}
                    onDragLeave={this.dragLeave}>{this.state.arr_10[2]}</div>
                <div id="3" className={"squares"}
                    onDragLeave={this.dragLeave}>{this.state.arr_10[3]}</div>
                <div id="4" className={"squares"}
                    onDragLeave={this.dragLeave}>{this.state.arr_10[4]}</div>
                <div id="5" className={"squares"}
                    onDragLeave={this.dragLeave}>{this.state.arr_10[5]}</div>
                <div className={"squares_1"}></div>
                <div id="6"  className={"squares"} 
                    onDragLeave={this.dragLeave}  
                >{this.state.arr_10[6]}</div>
                <div id="7"  className={"squares"} 
                    onDragLeave={this.dragLeave}  
                >{this.state.arr_10[7]}</div>
                <div id="8"  className={"squares"} 
                    onDragLeave={this.dragLeave}  
                >{this.state.arr_10[8]}</div>
                <div id="9"  className={"squares"} 
                    onDragLeave={this.dragLeave}  
                >{this.state.arr_10[9]}</div>
                <div id="10" className={"squares"} 
                    onDragLeave={this.dragLeave}  
                >{this.state.arr_10[10]}</div>
           </div>
           <div className={"map"}>

               { this.props.data.map(function(item, i) {
                        return (
                            <div
                                id = {item.id}
                                ref= {item.id}
                                key={i}
                                className={item.classN }
                                draggable ="true"
                                onDragEnd ={this.kk_end.bind(this)}
                                onClick ={this.kk_click} 
                                onDragStart = {this.kk_start.bind(this)} 
                                style={{position:'absolute',left:item.mL,top:item.mT}} >
                                {item.chinese}
                            </div>   
                        )
                        }, this)}
           </div>
               
      </div>

    );
  }
}


const show = () =>{
    ReactDOM.render(
      <TodoApp data={all_shops} />,
      document.getElementById('app')
    );
}
show();

