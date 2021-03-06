/**
 * Created by: Luojinghui/luojinghui424@gmail.com
 * Date: 16/10/12
 * Time: 下午5:48
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
const titleImg = require('../../img/index/font-13.png');
const img4 = require('../../img/expert/e3.jpg');
const img1 = require('../../img/expert/e4.jpg');
const img2 = require('../../img/expert/e5.jpg');
const img3 = require('../../img/expert/e6.jpg');

class Train extends Component {
    render() {
        let train = this.props.menus.trainInfo;

        return train?
         (
            <div className="box gray">
                <div className="container">
                    <div className="tc">
                        <img src={titleImg} alt="" className="l-title" />
                    </div>
                    <div className="line"></div>
                    <div className="col-l-2 clearfix">
                    {
                        train.map((item, index) =>{
                            return(
                                <a href="" className="col-2" id={item.memberid} key={index}>
                                    <div>
                                        <div className="pro-320">
                                            <img src={img4} alt="" />
                                        </div>
                                        <div className="pro-card">
                                            <div className="pro-name">{item.title}</div>
                                            <div className="pro-icon">
                                                <div className="inline pro-mr">
                                                    <i className="iconfont icon-heart pro-i"></i>
                                                    <span>{item.fav}</span>
                                                </div>
                                                <div className="inline">
                                                    <i className="iconfont icon-chat pro-i p-h"></i>
                                                    <span>{item.read}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            )
                        })
                    }

                    </div>
                </div>
            </div>
        ): <div></div>;
    }
}

const mapStateToProps = (state) => {
    return state;
}

let wrapedTrain = connect(mapStateToProps)(Train);

//train.propTypes = {};
//train.defaultProps = {};

export default wrapedTrain;
