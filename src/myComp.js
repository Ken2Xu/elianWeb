import React from 'react';
import propTypes from "prop-types";
import $ from 'jquery';

class Comp extends React.Component{//父子级通信
    constructor(...args){ 
        super(...args);
        this.state={
            x:3,y:0
        }
    }
    fn(data){//给子集回调
        alert(data)
    }
    render(){
        return <div>
           <Child a={this.state.x} cd={this.fn.bind(this)}/>
        </div>;
    }
}
class Child2 extends React.Component{
    constructor(...args){
        super(...args);
        this.num=44;
    }

    render(){
        //this.props.cd(this.num)
        return <div>
        {this.props.a}2222222</div>
    }
}
export default Child2; 



// class Comp extends React.Component {  属性
//     render() {
//         return (
//             <span>wode 名字{this.props.name}，今年{this.props.age}</span>
//         );
//     }
// }
// ReactDOM.render(
//     <Comp name="blue" age="22"/>,
//     document.getElementById('app')
// );

//状态
// class Comp extends React.Component {
//     constructor(...args){//状态不能不初始化。所以需要construtor
//         super(...args);//超类/父类
//         this.state={value:""};
//     }
//     fn(ev){
//        this.setState({
//            value:ev.target.value
//        })
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" onChange={this.fn.bind(this)}/>
//                 <span>{this.state.value}</span>
//             </div>

//         );
//     }
// }
// ReactDOM.render(
//     <Comp name="blue" age="22"/>,
//     document.getElementById('app')
// );


// class Comp extends React.Component{//事件
//     constructor(...args){
//         super(...args);
//         this.state={
//             'display':"block"
//         }
//     }
//     fn(){
//         this.setState({
//             display:this.state.display=="block"?"none":"block"
//         })
//     }
//     render(){
//         return <div>
//             <input type="button" value="显示隐藏" onClick={this.fn.bind(this)}/>
//             <div className="box" style={{display:this.state.display}}></div>
//         </div>;
//     }
// }
// ReactDOM.render(
//     <Comp/>,
//     document.getElementById("app")
// )
// class Comp extends React.Component{//时钟
//         constructor(...args){
//             super(...args);
//             this.state={
//                 h:0,m:0,s:0
//             }

//             var _this=this;
//             setInterval(function(){
//                 _this.fn();
//             },1000);
            
//         }
//         componentDidMount(){//已经创建完了
//             this.fn();
//             }
//         fn(){
//             var oDate=new Date();
//             this.setState({
//                 h:oDate.getHours(),
//                 m:oDate.getMinutes(),
//                 s:oDate.getSeconds()
//             })
//         }
//         render(){
//             return <div>
//                <span>{this.state.h}</span>:
//                <span>{this.state.m}</span>:
//                <span>{this.state.s}</span>
//             </div>;
//         }
//     }
//     ReactDOM.render(
//         <Comp/>,
//         document.getElementById("app")
//     )


// class ChildrenComp extends React.Component{//重用
//     componentWillReceiveProps(){
//         console.log('参数更新了')
//     }
//     render(){
//         return <span>{this.props.name}</span>;
//     }
// }
// class ParentComp extends React.Component{
//     constructor(...args){
//         super(...args);
//         this.state={i:0};
//     }
//     fn(){
//         this.setState({
//             i:this.state.i+1
//         })
//     }
//     render(){

//         return <div><input type="button" value="anwo" onClick={this.fn.bind(this)}/>
//                     <ChildrenComp name={this.state.i}/>
//                     </div>;
//     }
// }


// class Comp extends React.Component{//创建列表
//     constructor(...args){
//         super(...args)
//     };
//     render(){
//         return <li>{this.props.value}</li>;
//     }
// }
// class List extends React.Component{
//     constructor(...args){
//         super(...args);
//         this.arr=[12,8,6,9,4];
//         this.state={ar:this.arr};
//     }
//     fn(){
//         this.arr.push(Math.random());
//         this.setState({
//             ar:this.arr
//         })
//     }
//     render(){
//         var result=[];
//         this.arr.map(function(val,ind,ar){
//             result.push(<Comp key={ind} value={val}/>);
//         })
//         return <ul>
//         <input type="button" value="按钮" onClick={this.fn.bind(this)}/>
//             {result}
//         </ul>;
//     }
// }
// ReactDOM.render(
//     <List/>,
//     document.getElementById("app")
// )

// class Comp extends React.Component{//ref获取元素原生
//     constructor(...args){
//         super(...args);
//         this.state={
//             'color':"black"
//         }
//     }
//     fn(){
//         // this.setState({
//         //     color:"red"
//         // })
//         var os=this.refs["s1"];
//         //os.style.color="red";
//         $(os).css("color","red");
//     }
//     render(){
//         return <div>
//             <input type="button" value="显示隐藏" onClick={this.fn.bind(this)}/>
//             <div className="box"  ref="s1">11111</div>
//         </div>;
//     }
// }
// ReactDOM.render(
//     <Comp/>,
//     document.getElementById("app")
// )
// class Comp extends React.Component{//jquery拖拽
//     constructor(...args){
//         super(...args);
//         this.state={
//             x:0,y:0
//         }
//     }
//     fn(ev){
//         // this.setState({
//         //     color:"red"
//         // })
//         // var os=this.refs["s1"];
//         // //os.style.color="red";
//         // $(os).css("color","red");
//         var divX=ev.pageX-this.state.x;
//         var divY=ev.pageY-this.state.y;
//         var _this=this;
//         document.onmousemove=function(ev){
//             _this.setState({
//                 x:ev.pageX-divX,
//                 y:ev.pageY-divY
//             })
//         }
//        document.onmouseup=function(){
//            document.onmousemove=null;
//            document.onmouseup=null;
//         }
//     }
//     render(){
//         return <div className="box" onMouseDown={this.fn.bind(this)} style={{left:this.state.x+"px",top:this.state.y+"px"}}>111
//         </div>;
//     }
// }
// ReactDOM.render(
//     <Comp/>,
//     document.getElementById("app")
// )




// class Comp extends React.Component{//表单
//     constructor(...args){
//         super(...args);
//         this.state={
//             x:0,y:0
//         }
//     }
//     render(){
//         return <form action="http://hzyl.8866.org:7200/pages" method="get">
//                 用户名：<input type="text" name="username" defaultValue={this.props.a}/>
//                 是否接受邮件：<input type="checkbox" defaultChecked="true"/>
//                 <input type="submit" value="提交"/>
//         </form>;
//     }
// }
// ReactDOM.render(
//     <Comp a="blue"/>,
//     document.getElementById("app")
// )
// class Comp extends React.Component{//事件冒泡
//     constructor(...args){
//         super(...args);
//         this.state={
//             x:0,y:0
//         }
//     }
//     fn1(){
//         alert("父级")
//     }
//     fn2(ev){
        
//         //ev.nativeEvent.stopImmediatePropagation();
//         ev.nativeEvent.stopImmediatePropagation();
//         alert("子集");
//     }
//     render(){
//         return <div onClick={this.fn1.bind(this)}>
//             <div onClick={this.fn2.bind(this)}>11111111111111</div>
//         </div>;
//     }
// }
// ReactDOM.render(
//     <Comp a="blue"/>,
//     document.getElementById("app")
// )

