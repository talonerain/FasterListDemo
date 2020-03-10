import React, { Component } from 'react';
import { Text, View, SectionList, StyleSheet, RefreshControl, ActivityIndicator } from 'react-native';

const CITY_NAMES = [{ data: ['北京', '上海', '广州', '深圳'], title: '一线' },
{ data: ['杭州', '成都', '南京', '沈阳', '哈尔滨'], title: '二线' },
{ data: ["大连", '石家庄', '长沙', '台北', '厦门'], title: '三线' }]

export default class SectionListDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            dataArray: CITY_NAMES
        }
    }
    loadData(refreshing) {
        if (refreshing) {
            this.setState({
                isLoading: true
            });
        }
        //刷新后2秒翻转数组
        setTimeout(() => {
            let dataArray = []
            if (refreshing) {
                for (let i = this.state.dataArray.length - 1; i >= 0; i--) {
                    dataArray.push(this.state.dataArray[i])
                }
            } else {
                dataArray = this.state.dataArray.concat(CITY_NAMES)
            }
            this.setState({
                isLoading: false,
                dataArray: dataArray
            })
        }, 2000);
    }
    _renderSectionHeader({ section }) {
        return <View style={style.sectionHeader}>
            <Text style={style.sectionText}>{section.title}</Text>
        </View>
    }
    _renderItem(data) {
        return <View style={style.item}>
            <Text style={style.text}>{data.item}</Text>
        </View>
    }
    genIndicator() {
        return <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator
                size={'large'}
                animating={true}
            />
            <Text>正在加载</Text>
        </View>
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "stretch" }}>
                <SectionList
                    sections={this.state.dataArray}
                    renderItem={(data) => this._renderItem(data)}
                    /* refreshing={this.state.isLoading}
                    onRefresh={() => {
                      this.loadData()
                    }} */
                    //自定义loading样式
                    refreshControl={
                        <RefreshControl
                            title={'loading'}
                            colors={['red']}
                            refreshing={this.state.isLoading}
                            onRefresh={() => {
                                this.loadData(true)
                            }}
                        />
                    }
                    ListFooterComponent={() => this.genIndicator()}
                    onEndReached={() => this.loadData()}
                    renderSectionHeader={(cnm) => this._renderSectionHeader(cnm)}
                    ItemSeparatorComponent={() => <View style={style.spearator} />}
                />
            </View>
        );
    }
}

const style = StyleSheet.create({
    item: {
        height: 80,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: 'black',
        fontSize: 20
    },
    sectionHeader: {
        height: 50,
        backgroundColor: "#93ebbe",
        justifyContent: "center",
        alignItems: "center"
    },
    spearator: {
        height: 1,
        backgroundColor: 'gray',
        flex: 1
    },
    sectionText: {
        color: 'red',
        fontSize: 16
    }
})
