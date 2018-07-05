/**
 * Created by xiaolei on 2018/2/13.
 */
import React, {Component} from 'react';
import './CV.css';
import Progressbar from '../../component/Progressbar/progressbar'
class CV extends Component {
    render() {
        return (
            <div className="CVContainer">
                {/*<div className="languageBtn">English</div>*/}
                <h1 className="borderH">肖磊</h1>
                <img className="headPhoto"
                     src="./img/IMG_7406.jpg" alt=""/>
                <div>
                    <div>TEL：<a href="tel:18717717190">(+86)
                        18717717190</a></div>
                    <div>E-mail：
                        <a href="mailto:xiaoleixiaolei2008@yeah.net">xiaoleixiaolei2008@yeah.net</a>
                    </div>
                    <div>
                        {/*Date of Birth: May. 1992*/}
                        出生年月：1992/05
                    </div>
                    {/*<div>*/}
                        {/*Political Status: Member of*/}
                        {/*Communist Party of China*/}
                    {/*</div>*/}
                </div>
                <h3>Education
                </h3>
                <div className="educationContain">
                    <div>
                        <span>上海大学（硕士）</span>
                        <span
                            className="fr">2014/09-2016/04</span>
                        <span>
                            控制理论与控制工程
                        </span>
                    </div>
                    <div>
                        <span>盐城工学院（本科）</span>
                        <span
                            className="fr">2010/09-06/2014/03</span>
                        <span>电气工程及其自动化</span>
                    </div>
                </div>
                <h3>技能</h3>
                <div className="skillContain">
                    <Progressbar title="JavaScript" progress="75%"/>
                    <Progressbar title="HTML5" progress="75%"/>
                    <Progressbar title="CSS" progress="78%"/>
                    <Progressbar title="React" progress="70%"/>
                    <Progressbar title="Angularjs" progress="65%"/>
                    <Progressbar title="nodeJs" progress="50%"/>
                    <Progressbar title="Weixin mini programs" progress="90%"/>
                </div>
                <h3>项目经历</h3>
                <div className="experienceContain">
                    <div>
                        <div className="experienceTitle">
                            大地电子商务大地生活（微信项目）
                        </div>
                        <div className="experienceBody">
                            使用angular和ionic对项目进行迭代开发，熟悉购物整体流程，开发下单、购物车、支付和订单查询模块功能，与后端联调实现数据展示 ，并对优化项目，开发指令，提高开发效率。此项目主要使用angular1.x、jquery技术。
                        </div>
                    </div>
                    {/*<div>*/}
                        {/*<div className="experienceTitle">*/}
                            {/*大地电子商务大地生活活动项目*/}
                        {/*</div>*/}
                        {/*<div className="experienceBody">*/}
                            {/*对公司活动项目进行重构，使用React技术方案，使 活动页商品购买 需求变更达到快速研发、上线效果，且数据采集也做到了标准化，研发成本大大降低，最终在 活动页购买 产品线中开始使用。*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    <div>
                        <div className="experienceTitle">
                            微信小程序"易修猫城市合伙人"
                        </div>
                        <div className="experienceBody">
                            独立进行公司首个微信小程序开发，实现各级别地推人员管理，以及门店的评价、图片审核等功能。
                        </div>
                    </div>
                    <div>
                        <div className="experienceTitle">
                            基于React的"商户移动端"前端项目
                        </div>
                        <div className="experienceBody">
                    使用React技术方案，使用creat-react-app进行构建项目，独立开发商户移动端项目，实现在线接单、评价、预约、图片上传等模块功能，并编写相关通用组件，并在其他项目中进行使用，提高整体开发速度，并统一UI风格
                        </div>
                    </div>
                    <div>
                        <div className="experienceTitle">
                            海洋平台电站能量管理系统（PMS）的研究（工信部国家级项目）
                        </div>
                        <div className="experienceBody">
                            对海洋钻井平台电站能量管理系统（PMS）的控制策略分析和研究，实现电能综合调度与管理。能够实时监测和控制发电机和电网的状态，实现电站自动化控制。完成海洋平台柴油发电机的数学建模。本人主要完成Matlab/Simulink环境下的建模和仿真，并在《系统仿真学报》发表文章“海洋钻井平台发电机组的仿真研究”。设计网页版海洋平台监控系统，利用HTML，CSS，JavaScript等前端技能设计负责监控网站页面开发和交互，实现用户管理、电站监测、历史查询和故障诊断等功能
                        </div>
                    </div>
                    <div>
                        <div  className="experienceTitle">基于Android平台的车牌识别系统 （企业级项目）
                        </div>
                        <div className="experienceBody">
                            在Android平台下，进行图像采集、图像预处理、车牌定位、车牌处理、字符分割、字符识别等模块，将拍摄到的照片或手机内已有的照片进行车牌的定位及识别等，将识别后的数据通过网络传入上位机数据库。本人主要负责UI界面及其各个组件布局设计，使用户界面更加友好；并负责图像预处理以、车牌分割和字符识别及相关技术文档的整理。
                        </div>
                    </div>

                </div>
                <h3>兴趣</h3>
                <div className="interestContain">
                    {/*Fitness, Front-end, Travel*/}
                    健身，前端，旅游
                </div>
            </div>
        )
    }
}
export default CV