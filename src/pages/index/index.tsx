import { Component } from 'react'
import { View, Video, Text } from '@tarojs/components'
import { AtButton, AtAccordion, AtDivider, AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import './index.scss'

interface Props {}
interface State {
    isOpen_1: boolean
    isOpen_2: boolean
}

export default class Index extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            isOpen_1: true,
            isOpen_2: true,
        }
    }

    handleOpen1 = () => {
        const { isOpen_1 } = this.state
        this.setState({isOpen_1: !isOpen_1})
    }

    handleOpen2 = () => {
        const { isOpen_2 } = this.state
        this.setState({isOpen_2: !isOpen_2})
    }

    jumpToUpload = () => {
        Taro.navigateToMiniProgram({
            appId: 'wx43ae9eb08f33844a',
            envVersion: 'release',
            success: function(res) {
            // 打开成功
            }
        })
    }

    render() {
        const { isOpen_1, isOpen_2 } = this.state
        return (
            <View className='index'>
                <Text className='title'>📹 Videos</Text>
                <AtAccordion
                  open={isOpen_1}
                  onClick={this.handleOpen1}
                  title='2020'
                  isAnimation={false}
                  hasBorder={false}
                >
                    <Video
                      className='video'
                      id='video'
                      src='http://video.yugle.fun/video.mp4'
                      poster='http://video.yugle.fun/cover.png'
                      autoplay={false}
                      loop={false}
                      muted={false}
                    />
                </AtAccordion>
                <AtAccordion
                  open={isOpen_2}
                  onClick={this.handleOpen2}
                  title='2021'
                  isAnimation={false}
                  hasBorder={false}
                >
                    <View className='upload'>
                        <AtButton onClick={this.jumpToUpload}>上传</AtButton>
                    </View>
                </AtAccordion>
                <Text className='title'>🎤 Something To Say</Text>
                <Text className='content'>
                    Our Decade起初这个想法是源于丁太升老师在四年前就开始的十年视频征集计划，前几年一直想效仿丁老师这个想法但考虑到可行性和实施难度等原因并没有真正做起来。
                </Text>
                <Text className='content'>
                    这个活动主要是对自己的记录: 对于你，可以看到自己的变化，意义是不言而喻的；对于我，这或许是我们之间十年的牵绊，等十年后希望我们还能坐在一起，带着自己的爱人和孩子，乐此不疲地畅谈过往。
                </Text>
                <Text className='content'>
                    今年是2020年，我们意外地见证了历史，也不出所料地处在我们人生的转折点上。我想，不妨就在这个时间点，开始我们的记录自己十年人生的旅程吧！
                </Text>
                <Text className='content'>
                    嘿！我的朋友们，期待你们的参与！希望我能坚持十年，希望你也能。
                </Text>
                <Text className='lastContent'>
                    朱光宇 2020.12.6
                </Text>
                <AtDivider>
                    <AtIcon value='check-circle'></AtIcon>
                </AtDivider>
            </View>
        )
    }
}
