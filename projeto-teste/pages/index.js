import { Tabs } from 'antd'
import React from 'react';
import Tab1 from '../src/components/Tab1';
import Tab2 from '../src/components/Tab2';
import Tab3 from '../src/components/Tab3';
const {TabPane} = Tabs;


const onChance = (key) => {
  console.log(key);
}


export default function Home() {
  return (
    <Tabs defaultActiveKey='1' onChange={onChance}>
      <TabPane tab="Tab 1" key="1">
        <Tab1 />
      </TabPane>
      
      <TabPane tab="Tab 2" key="2">
        <Tab2 />
      </TabPane>
      <TabPane tab="Tab 3" key="3">
        <Tab3/>
      </TabPane>
      

    </Tabs>
  )
}
