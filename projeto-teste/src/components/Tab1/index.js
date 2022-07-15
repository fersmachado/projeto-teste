import { Button, Drawer, Table } from "antd";
import { useState } from "react";
import Form from "../Form";




function Tab1() {
    const [data, setData] = useState([{
        username: " edu"
    }])
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false)
    };

    const onAddUser = (username) => {
        setData([
            ...data,
            {
                username: username
            }
        ])
    }

    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                <Form onAddUser={onAddUser}></Form>
            </Drawer>
            <Table columns={[{title: "User", dataIndex: "username"}]} dataSource={data}>
            </Table>
        </div>
    )
}

export default Tab1;