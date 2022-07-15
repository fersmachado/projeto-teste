import { Button, Drawer, Table } from "antd";
import { useState } from "react";


function Tab3(){
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false)
    };

    return (
        <div>
            <Button type="primary" onClick={showDrawer}>
                Open
            </Button>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={visible}>
                fgfdgf
            </Drawer>
            <Table>
            </Table>
        </div>
        
    )
}

export default Tab3;