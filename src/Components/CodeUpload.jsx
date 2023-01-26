import { Button, Col, Drawer, Form, Input, Radio, Row, Space } from 'antd';
import { useState } from 'react';
const {TextArea} = Input;

const CodeUpload = ({ open, setOpen }) => {
    const [placement, setPlacement] = useState('top');

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const onChange = (e) => {
        setPlacement(e.target.value);
    };

    return (
        <>
            <Drawer
                title="Upload code"
                placement={placement}
                closable={false}
                onClose={onClose}
                open={open}
                key={placement}
                extra={
                    <Space>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onClose} type="primary">
                            Submit
                        </Button>
                    </Space>
                }
            >
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="Description"
                            label="Description"
                            rules={[{ required: true, message: "What's your code about?" }]}
                        >
                            <Input placeholder="What's your code about?" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <TextArea rows={10}/>
                </Row>
            </Drawer>
        </>
    );
};
export default CodeUpload;