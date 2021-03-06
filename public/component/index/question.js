/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/10
 * Time: 下午6:55
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
const titleImg = require('../../img/index/font2.png')
const expertImg = require('../../img/expert/e8.jpg')

class Question extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        let questionData = this.props.menus.meetProblems;

        return questionData ? 
         (
            <div className="box gray">
                <div className="container">
                    <div className="tc">
                        <img src={titleImg} alt="" className="l-title" />
                    </div>
                    <div className="line"></div>
                    <div className="col-l-3 clearfix">
                        {
                            questionData.map((item, index) => {
                                return (
                                <a href="" className="col-3" id={item.id} key={index}>
                                    <div>
                                        <div className="img-card">
                                            <img src={expertImg} alt=""/>
                                        </div>
                                        <div className="img-desc overflow" href="" dangerouslySetInnerHTML={{__html: item.title}}></div>
                                    </div> 
                                </a> 
                                )                                
                            })       
                        }      
                    </div>
                </div>
            </div>
        ) : <div></div>
    }
}


const mapStateToProps = (state) => {
    return state;
}

let wrapedQues = connect(mapStateToProps)(Question);

//question.propTypes = {};
//question.defaultProps = {};

export default wrapedQues;
