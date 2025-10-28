---
order: 14
title:
  zh-CN: 向下滑动关闭
  en-US: Swipe to Close
---

## zh-CN

在触摸设备上，设置 `swipeToClose` 为 `true` 后，可以通过向下滑动手势关闭 Modal。

## en-US

On touch devices, set `swipeToClose` to `true` to enable closing the Modal with a downward swipe gesture.

```jsx
import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const App = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal with Swipe to Close
      </Button>
      <Modal
        title="Swipe Down to Close"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        swipeToClose
      >
        <p>You can swipe down on this modal to close it (on touch devices).</p>
        <p>Try swiping down from any part of the modal content.</p>
        <p>This feature is especially useful on mobile devices.</p>
      </Modal>
    </>
  );
};

ReactDOM.render(<App />, mountNode);
```
