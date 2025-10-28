import React from 'react';
import { mount } from 'enzyme';
import Modal from '..';

jest.mock('rc-util/lib/Portal');

describe('Modal.swipeToClose', () => {
  it('should close modal on downward swipe when swipeToClose is true', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<Modal visible swipeToClose onCancel={onCancel} />);

    const modalWrap = wrapper.find('.ant-modal-wrap').at(0);

    // Simulate touch start
    modalWrap.simulate('touchstart', {
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    // Simulate touch move (swipe down 60 pixels)
    modalWrap.simulate('touchmove', {
      targetTouches: [{ clientX: 100, clientY: 160 }],
    });

    // Simulate touch end
    modalWrap.simulate('touchend');

    expect(onCancel).toHaveBeenCalled();
  });

  it('should not close modal on upward swipe', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<Modal visible swipeToClose onCancel={onCancel} />);

    const modalWrap = wrapper.find('.ant-modal-wrap').at(0);

    // Simulate touch start
    modalWrap.simulate('touchstart', {
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    // Simulate touch move (swipe up)
    modalWrap.simulate('touchmove', {
      targetTouches: [{ clientX: 100, clientY: 40 }],
    });

    // Simulate touch end
    modalWrap.simulate('touchend');

    expect(onCancel).not.toHaveBeenCalled();
  });

  it('should not close modal on horizontal swipe', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<Modal visible swipeToClose onCancel={onCancel} />);

    const modalWrap = wrapper.find('.ant-modal-wrap').at(0);

    // Simulate touch start
    modalWrap.simulate('touchstart', {
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    // Simulate touch move (swipe right)
    modalWrap.simulate('touchmove', {
      targetTouches: [{ clientX: 200, clientY: 105 }],
    });

    // Simulate touch end
    modalWrap.simulate('touchend');

    expect(onCancel).not.toHaveBeenCalled();
  });

  it('should not close modal on short downward swipe', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<Modal visible swipeToClose onCancel={onCancel} />);

    const modalWrap = wrapper.find('.ant-modal-wrap').at(0);

    // Simulate touch start
    modalWrap.simulate('touchstart', {
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    // Simulate touch move (swipe down only 30 pixels, less than threshold)
    modalWrap.simulate('touchmove', {
      targetTouches: [{ clientX: 100, clientY: 130 }],
    });

    // Simulate touch end
    modalWrap.simulate('touchend');

    expect(onCancel).not.toHaveBeenCalled();
  });

  it('should not handle touch events when swipeToClose is false', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<Modal visible swipeToClose={false} onCancel={onCancel} />);

    const modalWrap = wrapper.find('.ant-modal-wrap').at(0);

    // Simulate touch start
    modalWrap.simulate('touchstart', {
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    // Simulate touch move (swipe down 60 pixels)
    modalWrap.simulate('touchmove', {
      targetTouches: [{ clientX: 100, clientY: 160 }],
    });

    // Simulate touch end
    modalWrap.simulate('touchend');

    expect(onCancel).not.toHaveBeenCalled();
  });

  it('should not handle touch events when swipeToClose is not set (default)', () => {
    const onCancel = jest.fn();
    const wrapper = mount(<Modal visible onCancel={onCancel} />);

    const modalWrap = wrapper.find('.ant-modal-wrap').at(0);

    // Simulate touch start
    modalWrap.simulate('touchstart', {
      targetTouches: [{ clientX: 100, clientY: 100 }],
    });

    // Simulate touch move (swipe down 60 pixels)
    modalWrap.simulate('touchmove', {
      targetTouches: [{ clientX: 100, clientY: 160 }],
    });

    // Simulate touch end
    modalWrap.simulate('touchend');

    expect(onCancel).not.toHaveBeenCalled();
  });
});
